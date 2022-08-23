import {
  Table,
  TableColumn,
  RowSelectionColumn,
} from "@jpmorganchase/uitk-grid/table";

export const questionText8 = [
  "Same here can you tell me which columns are editable?",
  "Can you change the 4th row’s status to “Complete” please?",
];

export interface ExampleRow8 {
  id: string;
  source: string;
  origination: string;
  clientAccountName: string;
  jpmDirection: string;
  notional: string;
  description: string;
  "level(decimal)": string;
  tradeDate: string;
  tradeId: string;
  settlementDate: string;
  bookingStatus: string;
  traderName: string;
  "principal(bondccy)": string;
  "accruedInterest(bondccy)": string;
  "totalSettlAmt(bondccy)": string;
  settlementCcy: string;
  salesQuality: string;
  riskSalesQuality: string;
  totalCv: string;
  totalCv$: string;
  riskFinalTotalCv: string;
  riskFinalTotalCv$: string;
}

export const exampleRows8 = [
  {
    id: "1",
    source: "SALES",
    origination: "SalesOMS",
    clientAccountName: "SNAPSHOT INVESTORS",
    jpmDirection: "SELL",
    notional: "1000000",
    description: "AMZN 5.2 12/03/25",
    "level(decimal)": "105.779",
    tradeDate: "19 Aug 22",
    tradeId: "MOCV-6688",
    settlementDate: "21 Aug 22",
    bookingStatus: "COMPLETE",
    traderName: "Robert Grass",
    "principal(bondccy)": "105779",
    "accruedInterest(bondccy)": "982.22",
    "totalSettlAmt(bondccy)": "106761.22",
    settlementCcy: "USD",
    salesQuality: "",
    riskSalesQuality: "",
    totalCv: "11.975",
    totalCv$: "11.97574975",
    riskFinalTotalCv: "11.975",
    riskFinalTotalCv$: "11.97574975",
  },
  {
    id: "2",
    source: "SALES",
    origination: "SalesOMS",
    clientAccountName: "-",
    jpmDirection: "BUY",
    notional: "22000000",
    description: "T 2.0 04/30/24",
    "level(decimal)": "97.84375",
    tradeDate: "19 Aug 22",
    tradeId: "MGDE-9449",
    settlementDate: "21 Aug 22",
    bookingStatus: "PENDING",
    traderName: "Millie Davis",
    "principal(bondccy)": "21525625",
    "accruedInterest(bondccy)": "121956.52",
    "totalSettlAmt(bondccy)": "21647581.52",
    settlementCcy: "USD",
    salesQuality: "",
    riskSalesQuality: "",
    totalCv: "643.5",
    totalCv$: "643.5",
    riskFinalTotalCv: "643.5",
    riskFinalTotalCv$: "643.5",
  },
  {
    id: "3",
    source: "TRADING",
    origination: "SalesOMS",
    clientAccountName: "JASMINE TRUST (TOP, US)",
    jpmDirection: "SELL",
    notional: "34000",
    description: "AAPL 4.65 02/23/46",
    "level(decimal)": "115.232",
    tradeDate: "19 Aug 22",
    tradeId: "PWVA-3523",
    settlementDate: "21 Aug 22",
    bookingStatus: "PENDING",
    traderName: "Robert Grass",
    "principal(bondccy)": "39178.88",
    "accruedInterest(bondccy)": "711.45",
    "totalSettlAmt(bondccy)": "39890.329",
    settlementCcy: "USD",
    salesQuality: "",
    riskSalesQuality: "",
    totalCv: "23.114",
    totalCv$: "23.11443627",
    riskFinalTotalCv: "23.114",
    riskFinalTotalCv$: "23.11443627",
  },
  {
    id: "4",
    source: "SALES",
    origination: "SalesOMS",
    clientAccountName: "THE FINER THINGS (TOP, US)",
    jpmDirection: "SELL",
    notional: "20000",
    description: "OXY 5.875 09/01/25",
    "level(decimal)": "103.625",
    tradeDate: "19 Aug 22",
    tradeId: "VLZZ-4876",
    settlementDate: "21 Aug 22",
    bookingStatus: "PENDING",
    traderName: "Huang Lu",
    "principal(bondccy)": "20725",
    "accruedInterest(bondccy)": "499.38",
    "totalSettlAmt(bondccy)": "21224.38",
    settlementCcy: "USD",
    salesQuality: "Risk",
    riskSalesQuality: "Risk",
    totalCv: "10",
    totalCv$: "10",
    riskFinalTotalCv: "10",
    riskFinalTotalCv$: "10",
  },
  {
    id: "5",
    source: "SALES",
    origination: "SalesOMS",
    clientAccountName: "LORDSHIP LANE HLDGS (TOP)",
    jpmDirection: "SELL",
    notional: "700000",
    description: "ROLLS 5.75 15Oct27 144A",
    "level(decimal)": "95.25",
    tradeDate: "19 Aug 22",
    tradeId: "IKUJ-48510",
    settlementDate: "21 Aug 22",
    bookingStatus: "PENDING",
    traderName: "Thomas Spence",
    "principal(bondccy)": "666750",
    "accruedInterest(bondccy)": "12075",
    "totalSettlAmt(bondccy)": "678825",
    settlementCcy: "USD",
    salesQuality: "Low Quality",
    riskSalesQuality: "Low Quality",
    totalCv: "0",
    totalCv$: "0",
    riskFinalTotalCv: "0",
    riskFinalTotalCv$: "0",
  },
  {
    id: "6",
    source: "SALES",
    origination: "SalesOMS",
    clientAccountName: "LORDSHIP LANE HLDGS (TOP)",
    jpmDirection: "BUY",
    notional: "500000",
    description: "BNP 4.375 12May26 144A",
    "level(decimal)": "101.5",
    tradeDate: "19 Aug 22",
    tradeId: "DQLI-9673",
    settlementDate: "21 Aug 22",
    bookingStatus: "PENDING",
    traderName: "Huang Lu",
    "principal(bondccy)": "507500",
    "accruedInterest(bondccy)": "4921.88",
    "totalSettlAmt(bondccy)": "512421.88",
    settlementCcy: "USD",
    salesQuality: "Risk",
    riskSalesQuality: "Risk",
    totalCv: "320.83",
    totalCv$: "320.83",
    riskFinalTotalCv: "320.83",
    riskFinalTotalCv$: "320.83",
  },
  {
    id: "7",
    source: "TRADING",
    origination: "SalesOMS",
    clientAccountName: "WALNUT & SONS",
    jpmDirection: "SELL",
    notional: "456000",
    description: "MSFT 4.25 02/06/47",
    "level(decimal)": "109.018",
    tradeDate: "19 Aug 22",
    tradeId: "ISGE-5754",
    settlementDate: "21 Aug 22",
    bookingStatus: "COMPLETE",
    traderName: "Robert Grass",
    "principal(bondccy)": "497122.08",
    "accruedInterest(bondccy)": "9474.67",
    "totalSettlAmt(bondccy)": "506596.75",
    settlementCcy: "USD",
    salesQuality: "",
    riskSalesQuality: "",
    totalCv: "306.127",
    totalCv$: "306.1272646",
    riskFinalTotalCv: "306.127",
    riskFinalTotalCv$: "306.1272646",
  },
  {
    id: "8",
    source: "TRADING",
    origination: "SalesOMS",
    clientAccountName: "SALAZAAR",
    jpmDirection: "BUY",
    notional: "35000",
    description: "HLT 4.875 01/15/30",
    "level(decimal)": "18",
    tradeDate: "19 Aug 22",
    tradeId: "UYCW-61038",
    settlementDate: "21 Aug 22",
    bookingStatus: "COMPLETE",
    traderName: "Millie Davis",
    "principal(bondccy)": "6300",
    "accruedInterest(bondccy)": "75.83",
    "totalSettlAmt(bondccy)": "6375.83",
    settlementCcy: "USD",
    salesQuality: "",
    riskSalesQuality: "",
    totalCv: "7",
    totalCv$: "7",
    riskFinalTotalCv: "7",
    riskFinalTotalCv$: "7",
  },
  {
    id: "9",
    source: "SALES",
    origination: "SalesOMS",
    clientAccountName: "MAGNUM PETERSON LTD",
    jpmDirection: "BUY",
    notional: "57000",
    description: "HD 3.35 09/15/25",
    "level(decimal)": "100.562",
    tradeDate: "19 Aug 22",
    tradeId: "QPIY-7114",
    settlementDate: "21 Aug 22",
    bookingStatus: "COMPLETE",
    traderName: "Robert Grass",
    "principal(bondccy)": "57320.34",
    "accruedInterest(bondccy)": "710.76",
    "totalSettlAmt(bondccy)": "58031.1",
    settlementCcy: "USD",
    salesQuality: "",
    riskSalesQuality: "",
    totalCv: "6.247",
    totalCv$: "6.24745731",
    riskFinalTotalCv: "6.247",
    riskFinalTotalCv$: "6.24745731",
  },
  {
    id: "10",
    source: "SALES",
    origination: "SalesOMS",
    clientAccountName: "LORDSHIP LANE HLDGS (TOP)",
    jpmDirection: "SELL",
    notional: "444000",
    description: "QCOM 4.3 05/20/47",
    "level(decimal)": "117.21",
    tradeDate: "19 Aug 22",
    tradeId: "XUXD-5177",
    settlementDate: "21 Aug 22",
    bookingStatus: "COMPLETE",
    traderName: "Robert Grass",
    "principal(bondccy)": "520412.4",
    "accruedInterest(bondccy)": "3606.27",
    "totalSettlAmt(bondccy)": "524018.67",
    settlementCcy: "USD",
    salesQuality: "",
    riskSalesQuality: "",
    totalCv: "328.909",
    totalCv$: "328.9091974",
    riskFinalTotalCv: "328.909",
    riskFinalTotalCv$: "328.9091974",
  },
];
export const TableExample8 = () => {
  return (
    <Table
      rowData={exampleRows8}
      rowKeyGetter={(x) => x.id}
      className={"exampleTable"}
      zebra={true}
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
