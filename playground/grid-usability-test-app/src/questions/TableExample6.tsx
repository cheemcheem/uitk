import {
  Table,
  TableColumn,
  RowSelectionColumn,
  ColumnGroup,
} from "@jpmorganchase/uitk-grid/table";
import { ExampleRow6, exampleRows6 } from "./rowData6";

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
          align="right"
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
          align="right"
        />
        <TableColumn
          name="δ"
          id="slpnldelta"
          defaultWidth={56}
          getValue={(x) => x.slpnldelta}
          align="right"
        />
      </ColumnGroup>
      <ColumnGroup name="PnL Benchmark" id="pnlBenchmark">
        <TableColumn
          name="Mid $"
          id="mid$"
          defaultWidth={66}
          getValue={(x) => x["mid$"]}
          align="right"
        />
        <TableColumn
          name="Mid δ"
          id="middelta"
          defaultWidth={58}
          getValue={(x) => x.middelta}
          align="right"
        />
        <TableColumn
          name="Book $"
          id="book$"
          defaultWidth={66}
          getValue={(x) => x["book$"]}
          align="right"
        />
        <TableColumn
          name="Book δ"
          id="bookdelta"
          defaultWidth={58}
          getValue={(x) => x.bookdelta}
          align="right"
        />
      </ColumnGroup>
    </Table>
  );
};
