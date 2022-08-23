import * as React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToolkitProvider } from "@jpmorganchase/uitk-core";
import { StartPage } from "./pages/StartPage";
import "@jpmorganchase/uitk-theme/index.css";
import { TestInstructionsPage } from "./pages/TestInstructionsPage";
import { QuestionPage } from "./pages/QuestionPage";
import { q1, q2, q3, q4, q5, q6, q7, q8, q9 } from "./pages/questionPageData";
import { TestCompletePage } from "./pages/TestCompletePage";
import { ConditionsPage } from "./pages/ConditionsPage";
import { useState } from "react";

const setNames = Array.from("ABCDEF").map((x) => ["Condition", x].join(" "));

export interface Conditions {
  theme: "dark" | "light";
}

const conditions: Conditions[] = [];

function App(): JSX.Element {
  const [selectedSet, setSelectedSet] = useState<number>(0);

  const onSelectedSetChanged = (set: number) => {
    setSelectedSet(set);
  };

  return (
    <BrowserRouter>
      <ToolkitProvider density={"high"}>
        <Routes>
          <Route
            path={"/"}
            element={
              <ConditionsPage
                setNames={setNames}
                selectedSet={selectedSet}
                onSelectedSetChange={onSelectedSetChanged}
              />
            }
          />
          <Route path={"/start"} element={<StartPage />} />
          <Route
            path={"/test-instructions"}
            element={<TestInstructionsPage />}
          />
          <Route path={"/question1"} element={<QuestionPage {...q1} />} />
          <Route path={"/question2"} element={<QuestionPage {...q2} />} />
          <Route path={"/question3"} element={<QuestionPage {...q3} />} />
          <Route path={"/question4"} element={<QuestionPage {...q4} />} />
          <Route path={"/question5"} element={<QuestionPage {...q5} />} />
          <Route path={"/question6"} element={<QuestionPage {...q6} />} />
          <Route path={"/question7"} element={<QuestionPage {...q7} />} />
          <Route path={"/question8"} element={<QuestionPage {...q8} />} />
          <Route path={"/question9"} element={<QuestionPage {...q9} />} />
          <Route path={"/test-complete"} element={<TestCompletePage />} />
        </Routes>
      </ToolkitProvider>
    </BrowserRouter>
  );
}

export default App;
