import { ContentStatus } from "@jpmorganchase/uitk-lab";
import { ComponentMeta, ComponentStory, Story } from "@storybook/react";
import { AllRenderer, QAContainer, QAContainerProps } from "docs/components";

import "./content-status.qa.stories.css";

export default {
  title: "Lab/Content Status/QA",
  component: ContentStatus,
} as ComponentMeta<typeof ContentStatus>;

export const AllExamplesGrid: Story<QAContainerProps> = (props) => {
  return (
    <AllRenderer className="uitkContentStatusQA">
      <div
        style={{
          background: "inherit",
          display: "flex",
          flexDirection: "column",
          gap: "2px",
        }}
      >
        <ContentStatus
          className={props.className}
          actionLabel="[CUSTOM ACTION]"
          message="Supplementary content can go here if required."
          status="warning"
          title="No permission to access [content]"
          onActionClick={() => {}}
        />
        <ContentStatus
          className={props.className}
          message="Supplementary content can go here if required."
          status="success"
        />
        <ContentStatus
          className={props.className}
          message="It should be temporary, so please try again."
          status="error"
          title="There's been a system error"
          actionLabel="RELOAD"
          onActionClick={() => {}}
        />
        <ContentStatus
          className={props.className}
          actionLabel="[CUSTOM ACTION]"
          message="Supplementary content can go here if required."
          title="No [content] available"
          onActionClick={() => {}}
        />
        <ContentStatus
          className={props.className}
          message="Supplementary content can go here if required."
          status="loading"
        />
        <ContentStatus
          className={props.className}
          message="Supplementary content can go here if required."
          status="loading"
          value={38}
        />
      </div>
    </AllRenderer>
  );
};

AllExamplesGrid.parameters = {
  chromatic: { disableSnapshot: false },
};

export const BackwardsCompatGrid = AllExamplesGrid.bind({});
BackwardsCompatGrid.args = {
  className: "backwardsCompat",
};

BackwardsCompatGrid.parameters = {
  chromatic: { disableSnapshot: false },
};

export const CompareWithOriginalToolkit: ComponentStory<
  typeof ContentStatus
> = () => {
  return (
    <QAContainer
      width={1600}
      height={900}
      className="uitkContentStatusQA"
      imgSrc="/visual-regression-screenshots/ContentStatus-vr-snapshot.png"
    >
      <AllExamplesGrid />
    </QAContainer>
  );
};
