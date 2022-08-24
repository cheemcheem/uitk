import {
  RowSelectionColumn,
  Table,
  TableColumn,
  TableProps,
} from "@jpmorganchase/uitk-grid/table";
import { exampleRows8 } from "./rowData8";

export const TableExample8 = (props: Partial<TableProps>) => {
  return (
    <Table
      {...props}
      rowData={exampleRows8}
      rowKeyGetter={(x) => x.id}
      className={"exampleTable"}
      // zebra={true}
      // columnSeparators={true}
    >
      <RowSelectionColumn id={"rowSelection"} />
      <TableColumn
        name="Source"
        id="source"
        defaultWidth={73}
        getValue={(x) => x.source}
      />
      <TableColumn
        name="Origination"
        id="origination"
        defaultWidth={80}
        getValue={(x) => x.origination}
      />
      <TableColumn
        name="Client Account Name"
        id="clientAccountName"
        defaultWidth={193}
        getValue={(x) => x.clientAccountName}
      />
      <TableColumn
        name="JPM Direction"
        id="jpmDirection"
        defaultWidth={95}
        getValue={(x) => x.jpmDirection}
      />
      <TableColumn
        name="Notional"
        id="notional"
        defaultWidth={78}
        getValue={(x) => x.notional}
        align="right"
        editable={true}
      />
      <TableColumn
        name="Description"
        id="description"
        defaultWidth={162}
        getValue={(x) => x.description}
      />
      <TableColumn
        name="Level (decimal)"
        id="level(decimal)"
        defaultWidth={100}
        getValue={(x) => x["level(decimal)"]}
        align="right"
        editable={true}
      />
      <TableColumn
        name="Trade Date"
        id="tradeDate"
        defaultWidth={81}
        getValue={(x) => x.tradeDate}
      />
      <TableColumn
        name="Trade Id"
        id="tradeId"
        defaultWidth={92}
        getValue={(x) => x.tradeId}
      />
      <TableColumn
        name="Settlement Date"
        id="settlementDate"
        defaultWidth={108}
        getValue={(x) => x.settlementDate}
      />
      <TableColumn
        name="Booking Status"
        id="bookingStatus"
        defaultWidth={104}
        getValue={(x) => x.bookingStatus}
      />
      <TableColumn
        name="Trader Name"
        id="traderName"
        defaultWidth={121}
        getValue={(x) => x.traderName}
        editable={true}
      />
      <TableColumn
        name="Principal (BondCcy)"
        id="principal(bondccy)"
        defaultWidth={122}
        getValue={(x) => x["principal(bondccy)"]}
        align="right"
      />
      <TableColumn
        name="Accrued Interest (BondCcy)"
        id="accruedInterest(bondccy)"
        defaultWidth={168}
        getValue={(x) => x["accruedInterest(bondccy)"]}
        align="right"
      />
      <TableColumn
        name="Total Settl Amt (BondCcy)"
        id="totalSettlAmt(bondccy)"
        defaultWidth={160}
        getValue={(x) => x["totalSettlAmt(bondccy)"]}
        align="right"
      />
      <TableColumn
        name="Settlement CCY"
        id="settlementCcy"
        defaultWidth={106}
        getValue={(x) => x.settlementCcy}
      />
      <TableColumn
        name="Sales Quality"
        id="salesQuality"
        defaultWidth={100}
        getValue={(x) => x.salesQuality}
      />
      <TableColumn
        name="Risk Sales Quality"
        id="riskSalesQuality"
        defaultWidth={119}
        getValue={(x) => x.riskSalesQuality}
      />
      <TableColumn
        name="Total CV"
        id="totalCv"
        defaultWidth={80}
        getValue={(x) => x.totalCv}
        align="right"
      />
      <TableColumn
        name="Total CV $"
        id="totalCv$"
        defaultWidth={90}
        getValue={(x) => x["totalCv$"]}
        align="right"
      />
      <TableColumn
        name="Risk Final Total CV"
        id="riskFinalTotalCv"
        defaultWidth={120}
        getValue={(x) => x.riskFinalTotalCv}
        align="right"
      />
      <TableColumn
        name="Risk Final Total CV $"
        id="riskFinalTotalCv$"
        defaultWidth={131}
        getValue={(x) => x["riskFinalTotalCv$"]}
        align="right"
      />
    </Table>
  );
};
