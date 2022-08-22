import * as React from "react";
import { PageHeader, PageHeader2 } from "../components/PageHeader";
import { PageContent } from "../components/PageContent";
import { Page } from "../components/Page";

export const TestCompletePage = () => {
  return (
    <Page>
      <PageHeader>Test Complete</PageHeader>
      <PageContent>
        <p>
          Thank you for your time today. You’ve completed all the tasks in this
          usability test.
        </p>
        <p>
          Do you have any additional comments or questions for us about the
          design you’ve tested?
        </p>
        <PageHeader2>What's next</PageHeader2>
        <p>
          We’re going to collect the data from this test, add it to our test
          results so far and analyse for trends. Any trends will indicate
          further actions moving forwards.
        </p>
        <p>
          Moving forwards, would you like to be kept up to date on the progress
          of the Data Grid?
        </p>
      </PageContent>
    </Page>
  );
};
