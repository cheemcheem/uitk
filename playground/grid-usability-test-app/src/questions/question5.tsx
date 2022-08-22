import {
  Table,
  TableColumn,
  RowSelectionColumn,
} from "@jpmorganchase/uitk-grid/table";

export const questionText5 = [
  "You are about to see a blotter with a lot of columns, here you want to increase the width of the client name column, how would you go about that?",
  "Can you do that please?",
];

export interface ExampleRow5 {
  id: string;
  traderName: string;
  securityType: string;
  description: string;
  jpmDirection: string;
  notional: string;
  "level(decimal)": string;
  levelType: string;
  yield: string;
  tradeDate: string;
  settlementDate: string;
  "principal(bondccy)": string;
  "accruedInterest(bondccy)": string;
  "totalSettlAmt(bondccy)": string;
  settlementCcy: string;
  salesQuality: string;
  riskSalesQuality: string;
  totalCv: string;
  totalCv$: string;
  cv$: string;
  riskFinalTotalCv: string;
  riskFinalTotalCv$: string;
  clientContact: string;
  salespersonName: string;
  jpmCrfle: string;
  jpmLegalEntity: string;
  cusip: string;
  instrumentCcy: string;
  distributionChannel: string;
  clientName: string;
  isin: string;
  "level(32nd)": string;
  salesTeam: string;
  benchmarkSecurity: string;
}

export const exampleRows5 = [
  {
    id: "1",
    traderName: "Thomas Spence",
    securityType: "BOND",
    description: "ROLLS 5.75 15Oct27 144A",
    jpmDirection: "SELL",
    notional: "700000",
    "level(decimal)": "95.25",
    levelType: "Price",
    yield: "6.848440875",
    tradeDate: "19 Aug 22",
    settlementDate: "21 Aug 22",
    "principal(bondccy)": "666750",
    "accruedInterest(bondccy)": "12075",
    "totalSettlAmt(bondccy)": "678825",
    settlementCcy: "USD",
    salesQuality: "Low Quality",
    riskSalesQuality: "Low Quality",
    totalCv: "0",
    totalCv$: "0",
    cv$: "0",
    riskFinalTotalCv: "0",
    riskFinalTotalCv$: "0",
    clientContact: "",
    salespersonName: "James O'Conner",
    jpmCrfle: "637",
    jpmLegalEntity: "JPMSI",
    cusip: "",
    instrumentCcy: "USD",
    distributionChannel: "E TRADING",
    clientName: "LORDSHIP LANE HOLDINGS LLC",
    isin: "US77578JAC27",
    "level(32nd)": "95-080",
    salesTeam: "NEW YORK",
  },
  {
    id: "2",
    traderName: "Robert Grass",
    securityType: "BOND",
    description: "HD 3.35 09/15/25",
    jpmDirection: "BUY",
    notional: "57000",
    "level(decimal)": "100.562",
    levelType: "Price",
    yield: "3.159036688",
    tradeDate: "19 Aug 22",
    settlementDate: "21 Aug 22",
    "principal(bondccy)": "57320.34",
    "accruedInterest(bondccy)": "710.76",
    "totalSettlAmt(bondccy)": "58031.1",
    settlementCcy: "USD",
    salesQuality: "",
    riskSalesQuality: "",
    totalCv: "6.247",
    totalCv$: "6.24745731",
    cv$: "6.25",
    riskFinalTotalCv: "6.247",
    riskFinalTotalCv$: "6.24745731",
    clientContact: "",
    salespersonName: "James O'Conner",
    jpmCrfle: "333",
    jpmLegalEntity: "JPMSI",
    cusip: "437076BK7",
    instrumentCcy: "USD",
    distributionChannel: "UNKNOWN",
    clientName: "MAGNUM PETERSON LIMITED",
    isin: "",
    "level(32nd)": "100-178",
    salesTeam: "NEW YORK",
  },
  {
    id: "3",
    traderName: "Robert Grass",
    securityType: "BOND",
    description: "MSFT 4.25 02/06/47",
    jpmDirection: "SELL",
    notional: "456000",
    "level(decimal)": "109.018",
    levelType: "Price",
    yield: "3.687891634",
    tradeDate: "19 Aug 22",
    settlementDate: "21 Aug 22",
    "principal(bondccy)": "497122.08",
    "accruedInterest(bondccy)": "9474.67",
    "totalSettlAmt(bondccy)": "506596.75",
    settlementCcy: "USD",
    salesQuality: "",
    riskSalesQuality: "",
    totalCv: "306.127",
    totalCv$: "306.1272646",
    cv$: "306.13",
    riskFinalTotalCv: "306.127",
    riskFinalTotalCv$: "306.1272646",
    clientContact: "",
    salespersonName: "James O'Conner",
    jpmCrfle: "333",
    jpmLegalEntity: "JPMSI",
    cusip: "594918CA0",
    instrumentCcy: "USD",
    distributionChannel: "UNKNOWN",
    clientName: "WALNUT & SONS. HOLDINGS S.A.",
    isin: "",
    "level(32nd)": "109-00+.75",
    salesTeam: "NEW YORK",
    benchmarkSecurity: "912810TD0",
  },
  {
    id: "4",
    traderName: "Robert Grass",
    securityType: "BOND",
    description: "QCOM 4.3 05/20/47",
    jpmDirection: "SELL",
    notional: "444000",
    "level(decimal)": "117.21",
    levelType: "Price",
    yield: "3.280571078",
    tradeDate: "19 Aug 22",
    settlementDate: "21 Aug 22",
    "principal(bondccy)": "520412.4",
    "accruedInterest(bondccy)": "3606.27",
    "totalSettlAmt(bondccy)": "524018.67",
    settlementCcy: "USD",
    salesQuality: "",
    riskSalesQuality: "",
    totalCv: "328.909",
    totalCv$: "328.9091974",
    cv$: "328.91",
    riskFinalTotalCv: "328.909",
    riskFinalTotalCv$: "328.9091974",
    clientContact: "",
    salespersonName: "James O'Conner",
    jpmCrfle: "333",
    jpmLegalEntity: "JPMSI",
    cusip: "747525AV5",
    instrumentCcy: "USD",
    distributionChannel: "UNKNOWN",
    clientName: "LORDSHIP LANE HOLDINGS LLC",
    isin: "",
    "level(32nd)": "117-066",
    salesTeam: "NEW YORK",
    benchmarkSecurity: "912810TD0",
  },
  {
    id: "5",
    traderName: "Robert Grass",
    securityType: "BOND",
    description: "AAPL 4.65 02/23/46",
    jpmDirection: "SELL",
    notional: "34000",
    "level(decimal)": "115.232",
    levelType: "Price",
    yield: "3.677500497",
    tradeDate: "19 Aug 22",
    settlementDate: "21 Aug 22",
    "principal(bondccy)": "39178.88",
    "accruedInterest(bondccy)": "711.45",
    "totalSettlAmt(bondccy)": "39890.329",
    settlementCcy: "USD",
    salesQuality: "",
    riskSalesQuality: "",
    totalCv: "23.114",
    totalCv$: "23.11443627",
    cv$: "23.11",
    riskFinalTotalCv: "23.114",
    riskFinalTotalCv$: "23.11443627",
    clientContact: "",
    salespersonName: "James O'Conner",
    jpmCrfle: "333",
    jpmLegalEntity: "JPMSI",
    cusip: "037833BX7",
    instrumentCcy: "USD",
    distributionChannel: "UNKNOWN",
    clientName: "JASMINE TRUST & CO. HOLDINGS S.A.",
    isin: "",
    "level(32nd)": "115-073.50",
    salesTeam: "NEW YORK",
  },
  {
    id: "6",
    traderName: "Huang Lu",
    securityType: "BOND",
    description: "OXY 5.875 09/01/25",
    jpmDirection: "SELL",
    notional: "20000",
    "level(decimal)": "103.625",
    levelType: "Price",
    yield: "4.59590128",
    tradeDate: "19 Aug 22",
    settlementDate: "21 Aug 22",
    "principal(bondccy)": "20725",
    "accruedInterest(bondccy)": "499.38",
    "totalSettlAmt(bondccy)": "21224.38",
    settlementCcy: "USD",
    salesQuality: "Risk",
    riskSalesQuality: "Risk",
    totalCv: "10",
    totalCv$: "10",
    cv$: "10",
    riskFinalTotalCv: "10",
    riskFinalTotalCv$: "10",
    clientContact: "",
    salespersonName: "James O'Conner",
    jpmCrfle: "333",
    jpmLegalEntity: "JPMSI",
    cusip: "674599EB7",
    instrumentCcy: "USD",
    distributionChannel: "E TRADING",
    clientName: "THE FINER THINGS TRUST",
    isin: "",
    "level(32nd)": "103-200",
    salesTeam: "NEW YORK",
  },
  {
    id: "7",
    traderName: "Millie Davis",
    securityType: "BOND",
    description: "T 2.0 04/30/24",
    jpmDirection: "BUY",
    notional: "22000000",
    "level(decimal)": "97.84375",
    levelType: "Price",
    yield: "3.296522377",
    tradeDate: "19 Aug 22",
    settlementDate: "21 Aug 22",
    "principal(bondccy)": "21525625",
    "accruedInterest(bondccy)": "121956.52",
    "totalSettlAmt(bondccy)": "21647581.52",
    settlementCcy: "USD",
    salesQuality: "",
    riskSalesQuality: "",
    totalCv: "643.5",
    totalCv$: "643.5",
    cv$: "429",
    riskFinalTotalCv: "643.5",
    riskFinalTotalCv$: "643.5",
    clientContact: "Ole Vedbrat",
    salespersonName: "James O'Conner",
    jpmCrfle: "333",
    jpmLegalEntity: "JPMSI",
    cusip: "912828X70",
    instrumentCcy: "USD",
    distributionChannel: "VOICE",
    clientName: "-",
    isin: "",
    "level(32nd)": "97-270",
    salesTeam: "NEW YORK",
  },
  {
    id: "8",
    traderName: "Huang Lu",
    securityType: "BOND",
    description: "BNP 4.375 12May26 144A",
    jpmDirection: "BUY",
    notional: "500000",
    "level(decimal)": "101.5",
    levelType: "Price",
    yield: "3.941935992",
    tradeDate: "19 Aug 22",
    settlementDate: "21 Aug 22",
    "principal(bondccy)": "507500",
    "accruedInterest(bondccy)": "4921.88",
    "totalSettlAmt(bondccy)": "512421.88",
    settlementCcy: "USD",
    salesQuality: "Risk",
    riskSalesQuality: "Risk",
    totalCv: "320.83",
    totalCv$: "320.83",
    cv$: "320.83",
    riskFinalTotalCv: "320.83",
    riskFinalTotalCv$: "320.83",
    clientContact: "",
    salespersonName: "James O'Conner",
    jpmCrfle: "863",
    jpmLegalEntity: "JPMSI",
    cusip: "",
    instrumentCcy: "USD",
    distributionChannel: "E TRADING",
    clientName: "LORDSHIP LANE HOLDINGS LLC",
    isin: "US05565AAR41",
    "level(32nd)": "101-160",
    salesTeam: "NEW YORK",
  },
  {
    id: "9",
    traderName: "Robert Grass",
    securityType: "BOND",
    description: "AMZN 5.2 12/03/25",
    jpmDirection: "SELL",
    notional: "1000000",
    "level(decimal)": "105.779",
    levelType: "Price",
    yield: "3.340224019",
    tradeDate: "19 Aug 22",
    settlementDate: "21 Aug 22",
    "principal(bondccy)": "105779",
    "accruedInterest(bondccy)": "982.22",
    "totalSettlAmt(bondccy)": "106761.22",
    settlementCcy: "USD",
    salesQuality: "",
    riskSalesQuality: "",
    totalCv: "11.975",
    totalCv$: "11.97574975",
    cv$: "11.98",
    riskFinalTotalCv: "11.975",
    riskFinalTotalCv$: "11.97574975",
    clientContact: "",
    salespersonName: "James O'Conner",
    jpmCrfle: "333",
    jpmLegalEntity: "JPMSI",
    cusip: "023135BN5",
    instrumentCcy: "USD",
    distributionChannel: "UNKNOWN",
    clientName: "SNAPSHOT INVESTRORS LLC",
    isin: "",
    "level(32nd)": "105-247.50",
    salesTeam: "NEW YORK",
    benchmarkSecurity: "US91282CEY30",
  },
  {
    id: "10",
    traderName: "Millie Davis",
    securityType: "BOND",
    description: "HLT 4.875 01/15/30",
    jpmDirection: "BUY",
    notional: "35000",
    "level(decimal)": "18",
    levelType: "Price",
    yield: "39.94208148",
    tradeDate: "19 Aug 22",
    settlementDate: "21 Aug 22",
    "principal(bondccy)": "6300",
    "accruedInterest(bondccy)": "75.83",
    "totalSettlAmt(bondccy)": "6375.83",
    settlementCcy: "USD",
    salesQuality: "",
    riskSalesQuality: "",
    totalCv: "7",
    totalCv$: "7",
    cv$: "7",
    riskFinalTotalCv: "7",
    riskFinalTotalCv$: "7",
    clientContact: "",
    salespersonName: "James O'Conner",
    jpmCrfle: "333",
    jpmLegalEntity: "JPMSI",
    cusip: "432833AF8",
    instrumentCcy: "USD",
    distributionChannel: "UNKNOWN",
    clientName: "SALAZAAR S.A.",
    isin: "",
    "level(32nd)": "18-000",
    salesTeam: "NEW YORK",
  },
];
export const TableExample5 = () => {
  return (
    <Table
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
