import { ComponentMeta, ComponentStory } from "@storybook/react";
import { GridLayout, GridItem } from "@jpmorganchase/uitk-core";
import { Text, Div } from "@jpmorganchase/uitk-lab";

export default {
  title: "Lab/Typography",
  component: Text,
} as ComponentMeta<typeof Text>;

const excludeProps = [
  "children",
  "elementType",
  "maxRows",
  "showTooltip",
  "tooltipProps",
  "truncate",
  "style",
  "onOverflowChange",
];

const TextTruncatedExamples: ComponentStory<typeof Text> = () => {
  return (
    <GridLayout columns={2}>
      <GridItem>
        <strong>Default</strong>
        <br />
        truncate = false
        <br />
        <strong>Wraps</strong>
      </GridItem>
      <GridItem>
        <Div>
          The king's son said he was to send her up to him, but the mother
          answered, oh, no, she is much too dirty, she cannot show herself. But
          he absolutely insisted on it, and Cinderella had to be called.
        </Div>
      </GridItem>

      <GridItem>
        truncate = true
        <br />
        parent height = 40px
        <br />
        <strong>shows Tooltip</strong>
      </GridItem>
      <GridItem>
        <div style={{ height: 40 }}>
          <Div truncate={true}>
            And when she rose up and the king's son looked at her face he
            recognized the beautiful maiden who had danced with him and cried,
            that is the true bride.
          </Div>
        </div>
      </GridItem>
      <GridItem>
        truncate = true
        <br />
        maxRows = 2
        <br />
        <strong>shows Tooltip</strong>
      </GridItem>
      <GridItem>
        <Div truncate={true} maxRows={2}>
          When the wedding with the king's son was to be celebrated, the two
          false sisters came and wanted to get into favor with cinderella and
          share her good fortune.
        </Div>
      </GridItem>
    </GridLayout>
  );
};
export const TruncatedTextExample = TextTruncatedExamples.bind({});
TruncatedTextExample.parameters = {
  controls: {
    exclude: excludeProps,
  },
};
