import * as React from "react";
import {
  Button,
  Card,
  FlexItem,
  FlexLayout,
  Radio,
} from "@jpmorganchase/uitk-core";
import { PageHeader } from "../components/PageHeader";
import { PageContent } from "../components/PageContent";
import { Page } from "../components/Page";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import "./ConditionsPage.css";

export interface ConditionsPageProps {
  setNames: string[];
  selectedSet: number;
  onSelectedSetChange: (set: number) => void;
}

export const ConditionsPage: FC<ConditionsPageProps> = (props) => {
  const { setNames, selectedSet, onSelectedSetChange } = props;
  const navigate = useNavigate();

  const onStart = () => {
    navigate({ pathname: "/start" });
  };

  return (
    <Page>
      <PageHeader>Data Grid Conditions</PageHeader>
      <PageContent>
        <p>Which set of treatments is assigned to this participant?</p>
      </PageContent>
      <FlexLayout direction={"column"} className={"setSelector"}>
        {setNames.map((setName, idx) => {
          const isSelected = idx === selectedSet;
          return (
            <FlexItem>
              <Card
                className={isSelected ? "selectedCard" : undefined}
                onClick={() => onSelectedSetChange(idx)}
              >
                <FlexLayout direction={"row"}>
                  <FlexItem>
                    <Radio checked={isSelected} />
                  </FlexItem>
                  <FlexItem>{setName}</FlexItem>
                </FlexLayout>
              </Card>
            </FlexItem>
          );
        })}
      </FlexLayout>
      <FlexLayout direction={"row"} justify={"space-between"}>
        <Button variant={"cta"} onClick={onStart}>
          Continue
        </Button>
      </FlexLayout>
    </Page>
  );
};
