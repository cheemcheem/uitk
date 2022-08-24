import * as React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToolkitProvider } from "@jpmorganchase/uitk-core";
import { StartPage } from "./pages/StartPage";
import "@jpmorganchase/uitk-theme/index.css";
import { TestInstructionsPage } from "./pages/TestInstructionsPage";
import { QuestionPage, QuestionPageProps } from "./pages/QuestionPage";
import { q1, q2, q3, q4, q5, q6, q7, q8, q9 } from "./pages/questionPageData";
import { TestCompletePage } from "./pages/TestCompletePage";
import { ConditionsPage } from "./pages/ConditionsPage";
import { useEffect, useMemo, useState } from "react";

const setNames = Array.from("ABCDEF").map((x) => ["Condition", x].join(" "));

export interface QuestionConditions {
  theme?: "dark" | "light";
  zebra?: boolean;
  variant?: "primary" | "secondary";
  columnSeparators?: boolean;
  selectedRows?: number[];
}

export interface ConditionsSet {
  name: string;
  questions: QuestionConditions[];
}

const conSets: ConditionsSet[] = [
  {
    name: "A",
    questions: [
      { theme: "dark", zebra: true },
      { variant: "secondary" },
      { theme: "dark", zebra: true, selectedRows: [2] },
      { variant: "secondary", selectedRows: [1, 4, 5] },
      { theme: "dark", zebra: true },
      { theme: "dark", variant: "secondary" },
      { columnSeparators: true },
      { theme: "dark", zebra: true },
    ],
  },
  {
    name: "B",
    questions: [
      { theme: "dark" },
      { zebra: true },
      { theme: "dark", variant: "secondary", selectedRows: [3] },
      { selectedRows: [1, 4, 5] },
      { theme: "dark", variant: "secondary" },
      { zebra: true },
      { theme: "dark", zebra: true, columnSeparators: true },
      { zebra: true },
    ],
  },
  {
    name: "C",
    questions: [
      { variant: "secondary" },
      { theme: "dark" },
      { variant: "secondary", selectedRows: [1] },
      { theme: "dark", zebra: true, selectedRows: [1, 2, 3] },
      { variant: "secondary" },
      { theme: "dark", zebra: true },
      { variant: "secondary", columnSeparators: true },
      { theme: "dark", variant: "secondary" },
    ],
  },
  {
    name: "D",
    questions: [
      {},
      { theme: "dark", zebra: true },
      { zebra: true, selectedRows: [1] },
      { theme: "dark", selectedRows: [1, 2, 3] },
      { zebra: true },
      { theme: "dark" },
      { theme: "dark", variant: "secondary", columnSeparators: true },
      { variant: "secondary" },
    ],
  },
  {
    name: "E",
    questions: [
      { theme: "dark", variant: "secondary" },
      { zebra: true },
      { theme: "dark", selectedRows: [1] },
      { zebra: true, selectedRows: [1] },
      {},
      { variant: "secondary" },
      { theme: "dark", columnSeparators: true },
      {},
    ],
  },
  {
    name: "F",
    questions: [
      { variant: "secondary" },
      { variant: "secondary" },
      { variant: "secondary", selectedRows: [1] },
      { theme: "dark", variant: "secondary", selectedRows: [1, 2, 3] },
      { zebra: true },
      { theme: "dark", variant: "secondary" },
      { zebra: true, columnSeparators: true },
      { theme: "dark" },
    ],
  },
];

function shuffle<T>(source: T[]) {
  for (let i = source.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = source[i];
    source[i] = source[j];
    source[j] = t;
  }
}

const lightFirst = (a: QuestionPageProps, b: QuestionPageProps) => {
  if (a.conditions?.theme == "dark") {
    if (b.conditions?.theme == "dark") {
      return 0;
    }
    return 1;
  }
  if (b.conditions?.theme == "dark") {
    return -1;
  }
  return 0;
};

const logQuestionProps = (qs: QuestionPageProps[]) => {
  qs.forEach((q, i) => {
    const st = [`[${i}]`, `${q.questionNumber}`];
    if (q.conditions) {
      if (q.conditions.theme === "dark") {
        st.push(`dark`);
      }
      if (q.conditions.zebra) {
        st.push(`zebra`);
      }
      if (q.conditions.columnSeparators) {
        st.push(`separators`);
      }
      if (q.conditions.selectedRows) {
        st.push(`selection`);
      }
    }
    console.log(st.join(" - "));
  });
};

const randomizeQuestionProps = (
  conSet?: ConditionsSet
): QuestionPageProps[] => {
  const qs: QuestionPageProps[] = [q1, q2, q3, q4, q5, q6, q7, q8, q9];
  if (!conSet) {
    return qs;
  }
  conSet.questions.forEach((c, i) => {
    qs[i].conditions = c;
  });
  shuffle(qs);
  // qs.sort(lightFirst);
  return qs;
};

const randomizedQuestionProps = conSets.map((c) => randomizeQuestionProps(c));
randomizedQuestionProps.forEach((x) => x.sort(lightFirst));

function App(): JSX.Element {
  const [conSetIdx, setConSetIdx] = useState<number>(0);

  const onSelectedSetChanged = (set: number) => {
    setConSetIdx(set);
  };

  const questionProps = randomizedQuestionProps[conSetIdx];

  useEffect(() => {
    console.log(new Array(100).fill("-").join(""));
    logQuestionProps(questionProps);
  }, [questionProps]);

  return (
    <BrowserRouter>
      <ToolkitProvider density={"high"}>
        <Routes>
          <Route
            path={"/"}
            element={
              <ConditionsPage
                setNames={setNames}
                selectedSet={conSetIdx}
                onSelectedSetChange={onSelectedSetChanged}
              />
            }
          />
          <Route path={"/start"} element={<StartPage />} />
          <Route
            path={"/test-instructions"}
            element={<TestInstructionsPage />}
          />
          {questionProps.map((p, i) => {
            return (
              <Route
                key={i}
                path={`/question${i + 1}`}
                element={<QuestionPage {...p} questionNumber={i + 1} />}
              />
            );
          })}
          <Route path={"/test-complete"} element={<TestCompletePage />} />
        </Routes>
      </ToolkitProvider>
    </BrowserRouter>
  );
}

export default App;
