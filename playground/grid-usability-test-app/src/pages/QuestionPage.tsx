import * as React from "react";
import { Button, Card, FlexItem, FlexLayout } from "@jpmorganchase/uitk-core";
import { PageHeader } from "../components/PageHeader";
import { PageContent } from "../components/PageContent";
import { Page } from "../components/Page";
import { useNavigate } from "react-router-dom";
import {
  ComponentType,
  FC,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
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

const zeroPad = (x: number) => {
  return x < 10 ? `0${x}` : `${x}`;
};

export const QuestionPage: FC<QuestionPageProps> = (props) => {
  const {
    questionNumber = 1,
    text = dummyText,
    gridProps,
    table: TableExample,
  } = props;
  const navigate = useNavigate();
  const [started, setStarted] = useState<boolean>(false);
  const [isRefreshing, setRefreshing] = useState<boolean>(false);
  const startTimeRef = useRef<number>(0);
  const [timer, setTimer] = useState<string>("00:00:00");

  const onStart = () => {
    setStarted(true);
  };

  const updateTimer = () => {
    console.log(`Updating timer`);
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
    setRefreshing(true);
  };

  useEffect(() => {
    setStarted(false);
    startTimeRef.current = 0;
  }, [questionNumber]);

  useEffect(() => {
    setRefreshing(false);
  }, [isRefreshing]);

  useEffect(() => {
    if (started && startTimeRef.current === 0) {
      startTimeRef.current = new Date().valueOf();
      setTimeout(() => updateTimer(), 1000);
    }
    return () => {
      startTimeRef.current = 0;
    };
  }, [started]);

  return (
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
              {!isRefreshing && <TableExample />}
              {/*<DataGrid {...gridProps} className={"dataGrid"} />*/}
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
  );
};
