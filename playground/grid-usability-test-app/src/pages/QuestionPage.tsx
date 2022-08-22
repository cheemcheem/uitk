import * as React from "react";
import { Button, Card, FlexItem, FlexLayout } from "@jpmorganchase/uitk-core";
import { PageHeader } from "../components/PageHeader";
import { PageContent } from "../components/PageContent";
import { Page } from "../components/Page";
import { useNavigate } from "react-router-dom";
import { ComponentType, FC, useLayoutEffect, useState } from "react";
import { Link } from "@jpmorganchase/uitk-lab";
import { DataGrid, DataGridProps } from "@jpmorganchase/uitk-grid";
import "./QuestionPage.css";

export interface QuestionPageProps {
  questionNumber: number;
  text: string[];
  gridProps: DataGridProps;
  table: ComponentType;
}

const dummyText: string[] = [
  "You are about to see a screen with an equity trade blotter. When you do, and without interacting with the blotter; Can you tell me what price was executed for the Tesla stock? We will be timing you.",
];

export const QuestionPage: FC<QuestionPageProps> = (props) => {
  const {
    questionNumber = 1,
    text = dummyText,
    gridProps,
    table: TableExample,
  } = props;
  const navigate = useNavigate();
  const [started, setStarted] = useState<boolean>(false);

  const onStart = () => {
    setStarted(true);
  };

  const onNextQuestion = () => {
    if (questionNumber < 9) {
      navigate({ pathname: `/question${questionNumber + 1}` });
    }
  };

  useLayoutEffect(() => {
    setStarted(false);
  }, [questionNumber]);

  const onRefresh = () => {};

  return (
    <Page>
      <PageHeader>{`Question ${questionNumber}`}</PageHeader>
      <PageContent>
        {text.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </PageContent>
      {!started ? (
        <Button variant={"cta"} onClick={onStart}>
          Start
        </Button>
      ) : (
        <>
          <div className={"gridContainer"}>
            <TableExample />
            {/*<DataGrid {...gridProps} className={"dataGrid"} />*/}
          </div>
          <FlexLayout direction={"row"} justify={"space-between"}>
            <FlexItem>
              <Button variant={"cta"} onClick={onNextQuestion}>
                Next Question
              </Button>
            </FlexItem>
            <FlexItem>
              <Button variant={"primary"} onClick={onRefresh}>
                Refresh Grid
              </Button>
            </FlexItem>
          </FlexLayout>
          <FlexLayout direction={"row"} style={{ marginTop: "30px" }}>
            <FlexItem grow={1} />
            <FlexItem style={{ textAlign: "right" }}>
              <div>00:00:00</div>
              <Link>Skip task</Link>
            </FlexItem>
          </FlexLayout>
        </>
      )}
    </Page>
  );
};
