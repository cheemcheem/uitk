import {
  Table,
  TableColumn,
  RowSelectionColumn,
} from "@jpmorganchase/uitk-grid/table";
import { ExampleRow4, exampleRows4 } from "./rowData4";

export const TableExample4 = () => {
  return (
    <Table
      rowData={exampleRows4}
      rowKeyGetter={(x) => x.id}
      className={"exampleTable"}
      defaultSelectedRowKeys={new Set(["2", "8", "9"])}
    >
      <RowSelectionColumn id={"rowSelection"} />
      <TableColumn
        name="Account"
        id="account"
        defaultWidth={82}
        getValue={(x) => x.account}
      />
      <TableColumn
        name="User ID"
        id="userId"
        defaultWidth={72}
        getValue={(x) => x.userId}
      />
      <TableColumn
        name="Trade ID"
        id="tradeId"
        defaultWidth={87}
        getValue={(x) => x.tradeId}
      />
      <TableColumn
        name="Trade Date"
        id="tradeDate"
        defaultWidth={90}
        getValue={(x) => x.tradeDate}
      />
      <TableColumn
        name="Status"
        id="status"
        defaultWidth={63}
        getValue={(x) => x.status}
      />
      <TableColumn
        name="Last Updated"
        id="lastUpdated"
        defaultWidth={158}
        getValue={(x) => x.lastUpdated}
      />
      <TableColumn
        name="Cash Type"
        id="cashType"
        defaultWidth={77}
        getValue={(x) => x.cashType}
      />
      <TableColumn
        name="CCY Pair"
        id="ccyPair"
        defaultWidth={70}
        getValue={(x) => x.ccyPair}
      />
      <TableColumn
        name="Direction (Dealt CCY)"
        id="direction(dealtCcy)"
        defaultWidth={128}
        getValue={(x) => x["direction(dealtCcy)"]}
      />
      <TableColumn
        name="Value Date"
        id="valueDate"
        defaultWidth={81}
        getValue={(x) => x.valueDate}
      />
      <TableColumn
        name="Dealt CCY"
        id="dealtCcy"
        defaultWidth={71}
        getValue={(x) => x.dealtCcy}
      />
      <TableColumn
        name="Amount"
        id="amount"
        defaultWidth={96}
        getValue={(x) => x.amount}
        align="right"
      />
      <TableColumn
        name="Base CCY"
        id="baseCcy"
        defaultWidth={68}
        getValue={(x) => x.baseCcy}
      />
      <TableColumn
        name="Base AMT"
        id="baseAmt"
        defaultWidth={96}
        getValue={(x) => x.baseAmt}
        align="right"
      />
      <TableColumn
        name="Term CCY"
        id="termCcy"
        defaultWidth={78}
        getValue={(x) => x.termCcy}
      />
      <TableColumn
        name="Term AMT"
        id="termAmt"
        defaultWidth={92}
        getValue={(x) => x.termAmt}
        align="right"
      />
      <TableColumn
        name="Spot Rate"
        id="spotRate"
        defaultWidth={74}
        getValue={(x) => x.spotRate}
        align="right"
      />
    </Table>
  );
};
