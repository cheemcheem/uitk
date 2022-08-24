import {
  RowSelectionColumn,
  Table,
  TableColumn,
  TableProps,
} from "@jpmorganchase/uitk-grid/table";
import { exampleRows5 } from "./rowData5";

export const TableExample5 = (props: Partial<TableProps>) => {
  return (
    <Table
      {...props}
      rowData={exampleRows5}
      rowKeyGetter={(x) => x.id}
      className={"exampleTable"}
    >
      <RowSelectionColumn id={"rowSelection"} />
      <TableColumn
        name="Trader Name"
        id="traderName"
        defaultWidth={109}
        getValue={(x) => x.traderName}
      />
      <TableColumn
        name="Security Type"
        id="securityType"
        defaultWidth={94}
        getValue={(x) => x.securityType}
      />
      <TableColumn
        name="Description"
        id="description"
        defaultWidth={170}
        getValue={(x) => x.description}
      />
      <TableColumn
        name="JPM Direction"
        id="jpmDirection"
        defaultWidth={91}
        getValue={(x) => x.jpmDirection}
      />
      <TableColumn
        name="Notional"
        id="notional"
        defaultWidth={76}
        getValue={(x) => x.notional}
        align="right"
      />
      <TableColumn
        name="Level (decimal)"
        id="level(decimal)"
        defaultWidth={96}
        getValue={(x) => x["level(decimal)"]}
        align="right"
      />
      <TableColumn
        name="Level Type"
        id="levelType"
        defaultWidth={74}
        getValue={(x) => x.levelType}
      />
      <TableColumn
        name="Yield"
        id="yield"
        defaultWidth={89}
        getValue={(x) => x.yield}
        align="right"
      />
      <TableColumn
        name="Trade Date"
        id="tradeDate"
        defaultWidth={80}
        getValue={(x) => x.tradeDate}
      />
      <TableColumn
        name="Settlement Date"
        id="settlementDate"
        defaultWidth={106}
        getValue={(x) => x.settlementDate}
      />
      <TableColumn
        name="Principal (BondCcy)"
        id="principal(bondccy)"
        defaultWidth={124}
        getValue={(x) => x["principal(bondccy)"]}
        align="right"
      />
      <TableColumn
        name="Accrued Interest (BondCcy)"
        id="accruedInterest(bondccy)"
        defaultWidth={164}
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
        defaultWidth={104}
        getValue={(x) => x.settlementCcy}
      />
      <TableColumn
        name="Sales Quality"
        id="salesQuality"
        defaultWidth={90}
        getValue={(x) => x.salesQuality}
      />
      <TableColumn
        name="Risk Sales Quality"
        id="riskSalesQuality"
        defaultWidth={113}
        getValue={(x) => x.riskSalesQuality}
      />
      <TableColumn
        name="Total CV"
        id="totalCv"
        defaultWidth={72}
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
        name="CV $"
        id="cv$"
        defaultWidth={60}
        getValue={(x) => x["cv$"]}
        align="right"
      />
      <TableColumn
        name="Risk Final Total CV"
        id="riskFinalTotalCv"
        defaultWidth={116}
        getValue={(x) => x.riskFinalTotalCv}
        align="right"
      />
      <TableColumn
        name="Risk Final Total CV $"
        id="riskFinalTotalCv$"
        defaultWidth={128}
        getValue={(x) => x["riskFinalTotalCv$"]}
        align="right"
      />
      <TableColumn
        name="Client Contact"
        id="clientContact"
        defaultWidth={91}
        getValue={(x) => x.clientContact}
      />
      <TableColumn
        name="Salesperson Name"
        id="salespersonName"
        defaultWidth={123}
        getValue={(x) => x.salespersonName}
      />
      <TableColumn
        name="JPM CRFLE"
        id="jpmCrfle"
        defaultWidth={75}
        getValue={(x) => x.jpmCrfle}
      />
      <TableColumn
        name="JPM Legal Entity"
        id="jpmLegalEntity"
        defaultWidth={106}
        getValue={(x) => x.jpmLegalEntity}
      />
      <TableColumn
        name="CUSIP"
        id="cusip"
        defaultWidth={84}
        getValue={(x) => x.cusip}
      />
      <TableColumn
        name="Instrument CCY"
        id="instrumentCcy"
        defaultWidth={104}
        getValue={(x) => x.instrumentCcy}
      />
      <TableColumn
        name="Distribution Channel"
        id="distributionChannel"
        defaultWidth={128}
        getValue={(x) => x.distributionChannel}
      />
      <TableColumn
        name="Client Name"
        id="clientName"
        defaultWidth={229}
        getValue={(x) => x.clientName}
      />
      <TableColumn
        name="ISIN"
        id="isin"
        defaultWidth={98}
        getValue={(x) => x.isin}
      />
      <TableColumn
        name="Level (32nd)"
        id="level(32nd)"
        defaultWidth={91}
        getValue={(x) => x["level(32nd)"]}
      />
      <TableColumn
        name="Sales Team"
        id="salesTeam"
        defaultWidth={83}
        getValue={(x) => x.salesTeam}
      />
      <TableColumn
        name="Benchmark security"
        id="benchmarkSecurity"
        defaultWidth={128}
        getValue={(x) => x.benchmarkSecurity}
      />
    </Table>
  );
};
