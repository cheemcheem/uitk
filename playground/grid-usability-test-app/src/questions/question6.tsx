import {
  Table,
  TableColumn,
  RowSelectionColumn,
  ColumnGroup,
} from "@jpmorganchase/uitk-grid/table";

export const questionText6 = [
  "In this blotter I would like you to tell me what the column title the “Unset” values apply to.",
];

export interface ExampleRow6 {
  id: string;
  strategyType: string;
  cmdStatus: string;
  symbol: string;
  user: string;
  progress: string;
  alogstate: string;
  slpnl$: string;
  slpnldelta: string;
  mid$: string;
  middelta: string;
  book$: string;
  bookdelta: string;
}

export const exampleRows6 = [
  {
    id: "1",
    strategyType: "SingleLeg",
    cmdStatus: "Unset",
    symbol: "AMD",
    user: "awills",
    progress: "52%",
    alogstate: "Running",
    slpnl$: "-1,891",
    slpnldelta: "",
    mid$: "2390",
    middelta: "4.73",
    book$: "-624",
    bookdelta: "-12",
  },
  {
    id: "2",
    strategyType: "SingleLeg",
    cmdStatus: "Unset",
    symbol: "AMD",
    user: "awills",
    progress: "58%",
    alogstate: "Running",
    slpnl$: "155",
    slpnldelta: "",
    mid$: "-3,741",
    middelta: "-27",
    book$: "-3,250",
    bookdelta: "-23",
  },
  {
    id: "3",
    strategyType: "SingleLeg",
    cmdStatus: "Unset",
    symbol: "AMD",
    user: "awills",
    progress: "100%",
    alogstate: "Complete",
    slpnl$: "-1.265",
    slpnldelta: "",
    mid$: "-1,349",
    middelta: "-8.4",
    book$: "-1,988",
    bookdelta: "-12",
  },
  {
    id: "4",
    strategyType: "SingleLeg",
    cmdStatus: "Unset",
    symbol: "AMZN",
    user: "awills",
    progress: "5%",
    alogstate: "Running",
    slpnl$: "-378",
    slpnldelta: "",
    mid$: "113",
    middelta: "6.63",
    book$: "-190",
    bookdelta: "-11.3",
  },
  {
    id: "5",
    strategyType: "SingleLeg",
    cmdStatus: "Unset",
    symbol: "AMZN",
    user: "awills",
    progress: "72%",
    alogstate: "Running",
    slpnl$: "0",
    slpnldelta: "",
    mid$: "356",
    middelta: "1.99",
    book$: "767",
    bookdelta: "4.2",
  },
  {
    id: "6",
    strategyType: "SingleLeg",
    cmdStatus: "Unset",
    symbol: "AMZN",
    user: "awills",
    progress: "0%",
    alogstate: "Running",
    slpnl$: "0",
    slpnldelta: "",
    mid$: "0",
    middelta: "0",
    book$: "0",
    bookdelta: "0",
  },
  {
    id: "7",
    strategyType: "SingleLeg",
    cmdStatus: "Unset",
    symbol: "BA",
    user: "awills",
    progress: "0%",
    alogstate: "Cancelled",
    slpnl$: "0",
    slpnldelta: "",
    mid$: "0",
    middelta: "0",
    book$: "0",
    bookdelta: "0",
  },
  {
    id: "8",
    strategyType: "SingleLeg",
    cmdStatus: "Unset",
    symbol: "BRZB",
    user: "awills",
    progress: "10%",
    alogstate: "Running",
    slpnl$: "-260",
    slpnldelta: "",
    mid$: "0",
    middelta: "0",
    book$: "126",
    bookdelta: "14.7",
  },
  {
    id: "9",
    strategyType: "SingleLeg",
    cmdStatus: "Unset",
    symbol: "BABA",
    user: "awills",
    progress: "33%",
    alogstate: "Running",
    slpnl$: "-1,289",
    slpnldelta: "",
    mid$: "177",
    middelta: "3.5",
    book$: "83",
    bookdelta: "1.63",
  },
  {
    id: "10",
    strategyType: "SingleLeg",
    cmdStatus: "Unset",
    symbol: "BAC",
    user: "awills",
    progress: "44%",
    alogstate: "Running",
    slpnl$: "-374",
    slpnldelta: "",
    mid$: "56.3",
    middelta: "3.44",
    book$: "-124",
    bookdelta: "-7.6",
  },
];
export const TableExample6 = () => {
  return (
    <Table
      rowData={exampleRows6}
      rowKeyGetter={(x) => x.id}
      className={"exampleTable"}
    >
      <ColumnGroup name="" id="selector" pinned="left">
        <RowSelectionColumn id={"rowSelection"} />
      </ColumnGroup>
      <ColumnGroup name="Order Status" id="orderStatus">
        <TableColumn
          name="Strategy Type"
          id="strategyType"
          defaultWidth={93}
          getValue={(x) => x.strategyType}
        />
        <TableColumn
          name="Cmd Status"
          id="cmdStatus"
          defaultWidth={83}
          getValue={(x) => x.cmdStatus}
        />
        <TableColumn
          name="Symbol"
          id="symbol"
          defaultWidth={59}
          getValue={(x) => x.symbol}
        />
        <TableColumn
          name="User"
          id="user"
          defaultWidth={50}
          getValue={(x) => x.user}
        />
        <TableColumn
          name="Progress"
          id="progress"
          defaultWidth={69}
          getValue={(x) => x.progress}
        />
        <TableColumn
          name="AlogState"
          id="alogstate"
          defaultWidth={72}
          getValue={(x) => x.alogstate}
        />
      </ColumnGroup>
      <ColumnGroup name="Slippage PnL" id="slippagePnL">
        <TableColumn
          name="$"
          id="slpnl$"
          defaultWidth={58}
          getValue={(x) => x["slpnl$"]}
        />
        <TableColumn
          name="δ"
          id="slpnldelta"
          defaultWidth={56}
          getValue={(x) => x.slpnldelta}
        />
      </ColumnGroup>
      <ColumnGroup name="PnL Benchmark" id="pnlBenchmark">
        <TableColumn
          name="Mid $"
          id="mid$"
          defaultWidth={66}
          getValue={(x) => x["mid$"]}
        />
        <TableColumn
          name="Mid δ"
          id="middelta"
          defaultWidth={58}
          getValue={(x) => x.middelta}
        />
        <TableColumn
          name="Book $"
          id="book$"
          defaultWidth={66}
          getValue={(x) => x["book$"]}
        />
        <TableColumn
          name="Book δ"
          id="bookdelta"
          defaultWidth={58}
          getValue={(x) => x.bookdelta}
        />
      </ColumnGroup>
    </Table>
  );
};
