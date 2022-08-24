import * as React from "react";
import { ComponentType, FC, useEffect, useRef, useState } from "react";
import {
  Button,
  FlexItem,
  FlexLayout,
  ToolkitProvider,
} from "@jpmorganchase/uitk-core";
import { PageHeader } from "../components/PageHeader";
import { PageContent } from "../components/PageContent";
import { Page } from "../components/Page";
import { useNavigate } from "react-router-dom";
import { Link } from "@jpmorganchase/uitk-lab";
import "./QuestionPage.css";
import { QuestionConditions } from "../App";
import { TableProps } from "@jpmorganchase/uitk-grid/table";

export interface QuestionPageProps {
  questionNumber: number;
  text: string[];
  table: ComponentType;
  conditions?: QuestionConditions;
}

const zeroPad = (x: number) => {
  return x < 10 ? `0${x}` : `${x}`;
};

export const QuestionPage: FC<QuestionPageProps> = (props) => {
  const { questionNumber = 1, text, table: TableExample, conditions } = props;
  const navigate = useNavigate();
  const [started, setStarted] = useState<boolean>(false);
  const startTimeRef = useRef<number>(0);
  const [timer, setTimer] = useState<string>("00:00:00");

  const onStart = () => {
    setStarted(true);
  };

  const updateTimer = () => {
    // console.log(`Updating timer`);
    if (startTimeRef.current !== 0) {
      const now = new Date().valueOf();
      const dt = 0.001 * (now - startTimeRef.current);
      const s = Math.floor(dt % 60);
      const min = Math.floor(dt / 60);
      const m = min % 60;
      const h = Math.floor(min / 60);
      setTimer([h, m, s].map(zeroPad).join(":"));
      setTimeout(updateTimer, 1000);
    }
  };

  const onNextQuestion = () => {
    setTimer("00:00:00");
    if (questionNumber < 9) {
      navigate({ pathname: `/question${questionNumber + 1}` });
    } else {
      navigate({ pathname: "/test-complete" });
    }
  };

  const onRefresh = () => {
    startTimeRef.current = 0;
    setTimer("00:00:00");
    setStarted(false);
  };

  useEffect(() => {
    setStarted(false);
    startTimeRef.current = 0;
  }, [questionNumber]);

  useEffect(() => {
    if (started && startTimeRef.current === 0) {
      startTimeRef.current = new Date().valueOf();
      setTimeout(() => updateTimer(), 1000);
    }
    return () => {
      startTimeRef.current = 0;
    };
  }, [started]);

  const tableProps: Partial<TableProps> = {
    columnSeparators: conditions?.columnSeparators,
    zebra: conditions?.zebra,
    defaultSelectedRowKeys: new Set(
      conditions?.selectedRows?.map((x) => `${x}`)
    ),
  };

  return (
    <ToolkitProvider density={"high"} theme={conditions?.theme || "light"}>
      <Page>
        {!started ? (
          <div className={"notStarted"}>
            <PageHeader>{`Question ${questionNumber}`}</PageHeader>
            <PageContent>
              {text.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </PageContent>
            <Button variant={"cta"} onClick={onStart}>
              Start
            </Button>
          </div>
        ) : (
          <div className={"started"}>
            <div className={"main"}>
              <div className={"gridContainer"}>
                <TableExample {...tableProps} />
              </div>
            </div>
            <div className={"controlPanel"}>
              <FlexLayout direction={"row"} justify={"space-between"}>
                <FlexItem>
                  <Button variant={"cta"} onClick={onNextQuestion}>
                    Next Question
                  </Button>
                </FlexItem>
                <FlexItem>
                  <Button variant={"primary"} onClick={onRefresh}>
                    Reset Task
                  </Button>
                </FlexItem>
              </FlexLayout>
              <FlexLayout direction={"row"} style={{ marginTop: "30px" }}>
                <FlexItem grow={1} />
                <FlexItem style={{ textAlign: "right" }}>
                  <div>{timer}</div>
                  <Link onClick={onNextQuestion}>Skip task</Link>
                </FlexItem>
              </FlexLayout>
            </div>
          </div>
        )}
      </Page>
    </ToolkitProvider>
  );
};
