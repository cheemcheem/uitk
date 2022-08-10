import { Spinner } from "@jpmorganchase/uitk-lab";

const ariaLabel = "Loading component";

describe("GIVEN a Spinner", () => {
  it("THEN it should render with the correct default ARIA attributes", () => {
    cy.mount(<Spinner />);

    cy.findByRole("img", { name: "loading" }).should("exist");
  });

  it("THEN it should render with a custom ARIA label", () => {
    cy.mount(<Spinner aria-label="loading settings panel" />);

    cy.findByRole("img", { name: "loading settings panel" }).should("exist");
  });

  it("THEN the announcer should be called with aria-label", () => {
    cy.mount(<Spinner aria-label={ariaLabel} />);

    cy.findByRole("img").should("announce", ariaLabel);
  });
});

describe("GIVEN an available announcer", () => {
  it("THEN the announcer should be called with aria-label every 5 seconds", () => {
    cy.mount(<Spinner aria-label={ariaLabel} />);

    cy.wait(5000);

    cy.findByRole("img").should("announce", ariaLabel);
  });

  it("THEN the announcer should be called when the component unmounts", () => {
    cy.mount(<Spinner aria-label={ariaLabel} />).then(({ unmount }) => {
      unmount().then(() => {
        cy.findByRole("img").should("announce", `finished ${ariaLabel}`);
      });
    });
  });

  it("THEN nothing should be announced when announcer is disabled", () => {
    cy.mount(<Spinner aria-label={ariaLabel} disableAnnouncer />).then(
      ({ unmount }) => {
        cy.findByRole("img").should("not.announce", ariaLabel);
        unmount().then(() => {
          cy.findByRole("img").should("not.announce", `finished ${ariaLabel}`);
        });
      }
    );
  });

  it("THEN it should not announce completion message when set to null", () => {
    cy.mount(
      <Spinner aria-label={ariaLabel} completionAnnouncement={null} />
    ).then(({ unmount }) => {
      unmount().then(() => {
        cy.findByRole("img").should("not.announce", `finished ${ariaLabel}`);
      });
    });
  });
});
