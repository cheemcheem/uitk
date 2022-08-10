import { Checkbox, CheckboxGroup } from "@jpmorganchase/uitk-core";

describe("GIVEN a CheckboxGroup component", () => {
  it("THEN should render checkboxes", () => {
    cy.mount(
      <CheckboxGroup>
        <Checkbox label="one" value="one" />
        <Checkbox label="two" value="two" />
        <Checkbox label="three" value="three" />
      </CheckboxGroup>
    );

    cy.findAllByRole("checkbox").should("have.length", 3);

    cy.findAllByRole("checkbox").then((checkboxes) => {
      expect(
        checkboxes.map((i, checkbox) => (checkbox as HTMLInputElement).value)
      ).to.deep.equal(["one", "two", "three"]);
    });
  });

  describe("WHEN mounted as an uncontrolled component", () => {
    it("THEN should respect defaultCheckedValues", () => {
      cy.mount(
        <CheckboxGroup defaultCheckedValues={["one"]}>
          <Checkbox label="one" value="one" />
          <Checkbox label="two" value="two" />
          <Checkbox label="three" value="three" />
        </CheckboxGroup>
      );
      cy.findByRole("checkbox", { name: "one" }).should("be.checked");
      cy.findByRole("checkbox", { name: "two" }).should("not.be.checked");
      cy.findByRole("checkbox", { name: "three" }).should("not.be.checked");
    });

    describe("AND a checkbox is checked and unchecked", () => {
      it("THEN should call onChange and update the DOM", () => {
        const changeSpy = cy.stub().as("changeSpy");
        cy.mount(
          <CheckboxGroup defaultCheckedValues={["one"]} onChange={changeSpy}>
            <Checkbox label="one" value="one" />
            <Checkbox label="two" value="two" />
            <Checkbox label="three" value="three" />
          </CheckboxGroup>
        );

        cy.findByRole("checkbox", { name: "one" }).should("be.checked");
        cy.findByRole("checkbox", { name: "two" }).realClick();
        cy.get("@changeSpy").should("be.calledWithMatch", { value: "two" });
        cy.findByRole("checkbox", { name: "one" }).should("be.checked");
        cy.findByRole("checkbox", { name: "two" }).should("be.checked");
        cy.findByRole("checkbox", { name: "two" }).realClick();
        cy.findByRole("checkbox", { name: "one" }).should("be.checked");
        cy.findByRole("checkbox", { name: "two" }).should("not.be.checked");
      });
    });
  });

  describe("WHEN mounted as a controlled component", () => {
    it("THEN should respect checkedValues", () => {
      cy.mount(
        <CheckboxGroup checkedValues={["one"]}>
          <Checkbox label="one" value="one" />
          <Checkbox label="two" value="two" />
          <Checkbox label="three" value="three" />
        </CheckboxGroup>
      );

      cy.findByRole("checkbox", { name: "one" }).should("be.checked");
      cy.findByRole("checkbox", { name: "two" }).should("not.be.checked");
      cy.findByRole("checkbox", { name: "three" }).should("not.be.checked");
    });

    describe("AND a checkbox is checked and unchecked", () => {
      it("THEN should call onChange and not update the DOM", () => {
        const changeSpy = cy.stub().as("changeSpy");
        cy.mount(
          <CheckboxGroup checkedValues={["one"]} onChange={changeSpy}>
            <Checkbox label="one" value="one" />
            <Checkbox label="two" value="two" />
            <Checkbox label="three" value="three" />
          </CheckboxGroup>
        );

        cy.findByRole("checkbox", { name: "one" }).should("be.checked");
        cy.findByRole("checkbox", { name: "two" }).realClick();
        cy.get("@changeSpy").should("be.calledWithMatch", { value: "two" });
        cy.findByRole("checkbox", { name: "two" }).should("not.be.checked");
        cy.findByRole("checkbox", { name: "two" }).realClick();
        cy.findByRole("checkbox", { name: "two" }).should("not.be.checked");
      });
    });
  });
});
