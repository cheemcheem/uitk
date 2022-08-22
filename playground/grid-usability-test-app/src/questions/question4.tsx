import {
  Table,
  TableColumn,
  RowSelectionColumn,
} from "@jpmorganchase/uitk-grid/table";

export const questionText4 = [
  "This time you will see a grid with a number of selected rows, can you hover over the 5th row and (without clicking or selecting) tell me the notional amount of the trade?",
];

export interface ExampleRow4 {
  id: string;
  account: string;
  userId: string;
  tradeId: string;
  tradeDate: string;
  status: string;
  lastUpdated: string;
  cashType: string;
  ccyPair: string;
  "direction(dealtCcy)": string;
  valueDate: string;
  dealtCcy: string;
  amount: string;
  baseCcy: string;
  baseAmt: string;
  termCcy: string;
  termAmt: string;
  spotRate: string;
}

export const exampleRows4 = [
  {
    id: "1",
    account: "ABCD - LDN",
    userId: "O678541",
    tradeId: "1H4-X7Y2EC",
    tradeDate: "2022-08-15",
    status: "Booked",
    lastUpdated: "2022-08-15 10:47:14.397",
    cashType: "Spot",
    ccyPair: "GBPUSD",
    "direction(dealtCcy)": "Buy (GBP)",
    valueDate: "2022-08-17",
    dealtCcy: "GBP",
    amount: "1,000,000.00",
    baseCcy: "GBP",
    baseAmt: "1,000,000.00",
    termCcy: "USD",
    termAmt: "1,206,650",
    spotRate: "1.20665",
  },
  {
    id: "2",
    account: "ABCD - LDN",
    userId: "O678541",
    tradeId: "1H4-X7Y2EB",
    tradeDate: "2022-08-15",
    status: "Booked",
    lastUpdated: "2022-08-15 10:47:11.631",
    cashType: "Spot",
    ccyPair: "USDCHF",
    "direction(dealtCcy)": "Buy (USD)",
    valueDate: "2022-08-17",
    dealtCcy: "USD",
    amount: "5,000,000.00",
    baseCcy: "USD",
    baseAmt: "5,000,000.00",
    termCcy: "CHF",
    termAmt: "4,727,300",
    spotRate: "0.94546",
  },
  {
    id: "3",
    account: "ABCD - LDN",
    userId: "O678541",
    tradeId: "1H4-X7Y2EA",
    tradeDate: "2022-08-15",
    status: "Booked",
    lastUpdated: "2022-08-15 10:47:10.082",
    cashType: "Spot",
    ccyPair: "AUDUSD",
    "direction(dealtCcy)": "Buy (AUD)",
    valueDate: "2022-08-17",
    dealtCcy: "AUD",
    amount: "3,000,000.00",
    baseCcy: "AUD",
    baseAmt: "3,000,000.00",
    termCcy: "USD",
    termAmt: "2,109,330",
    spotRate: "0.70311",
  },
  {
    id: "4",
    account: "ABCD - LDN",
    userId: "O678541",
    tradeId: "1H4-X7Y2E9",
    tradeDate: "2022-08-15",
    status: "Booked",
    lastUpdated: "2022-08-15 10:47:07.879",
    cashType: "Spot",
    ccyPair: "USDJPY",
    "direction(dealtCcy)": "Buy (USD)",
    valueDate: "2022-08-17",
    dealtCcy: "USD",
    amount: "6,000,000.00",
    baseCcy: "USD",
    baseAmt: "6,000,000.00",
    termCcy: "JPY",
    termAmt: "801,726,000",
    spotRate: "133.621",
  },
  {
    id: "5",
    account: "ABCD - LDN",
    userId: "O678541",
    tradeId: "1H4-X7Y2E7",
    tradeDate: "2022-08-15",
    status: "Booked",
    lastUpdated: "2022-08-15 10:47:05.679",
    cashType: "Fwd",
    ccyPair: "EURUSD",
    "direction(dealtCcy)": "Sell (EUR)",
    valueDate: "2022-08-18",
    dealtCcy: "EUR",
    amount: "7,000,000.00",
    baseCcy: "EUR",
    baseAmt: "7,000,000.00",
    termCcy: "USD",
    termAmt: "7,137,222",
    spotRate: "1.01954",
  },
  {
    id: "6",
    account: "ABCD - LDN",
    userId: "O678541",
    tradeId: "1H4-X7Y2E8",
    tradeDate: "2022-08-15",
    status: "Booked",
    lastUpdated: "2022-08-15 10:47:02.521",
    cashType: "Spot",
    ccyPair: "USDCAD",
    "direction(dealtCcy)": "Sell (USD)",
    valueDate: "2022-08-16",
    dealtCcy: "USD",
    amount: "8,000,000.00",
    baseCcy: "USD",
    baseAmt: "8,000,000.00",
    termCcy: "CAD",
    termAmt: "10,320,560",
    spotRate: "1.29007",
  },
  {
    id: "7",
    account: "ABCD - LDN",
    userId: "O678541",
    tradeId: "1H4-X7Y2E5",
    tradeDate: "2022-08-15",
    status: "Booked",
    lastUpdated: "2022-08-15 10:46:53.324",
    cashType: "Spot",
    ccyPair: "USDCHF",
    "direction(dealtCcy)": "Sell (USD)",
    valueDate: "2022-08-17",
    dealtCcy: "USD",
    amount: "2,000,000.00",
    baseCcy: "USD",
    baseAmt: "2,000,000.00",
    termCcy: "CHF",
    termAmt: "1,890,880",
    spotRate: "0.94544",
  },
  {
    id: "8",
    account: "ABCD - LDN",
    userId: "O678541",
    tradeId: "1H4-X7Y2E6",
    tradeDate: "2022-08-15",
    status: "Booked",
    lastUpdated: "2022-08-15 10:46:53.316",
    cashType: "Spot",
    ccyPair: "EURGBP",
    "direction(dealtCcy)": "Buy (EUR)",
    valueDate: "2022-08-17",
    dealtCcy: "EUR",
    amount: "4,000,000.00",
    baseCcy: "EUR",
    baseAmt: "4,000,000.00",
    termCcy: "GBP",
    termAmt: "3,381,040",
    spotRate: "0.84526",
  },
  {
    id: "9",
    account: "ABCD - LDN",
    userId: "O678541",
    tradeId: "1H4-X7X32X",
    tradeDate: "2022-08-15",
    status: "Booked",
    lastUpdated: "2022-08-15 10:45:56.575",
    cashType: "Swap",
    ccyPair: "EURUSD",
    "direction(dealtCcy)": "Buy (EUR)",
    valueDate: "2022-08-16",
    dealtCcy: "EUR",
    amount: "9,000,000.00",
    baseCcy: "EUR",
    baseAmt: "9,000,000.00",
    termCcy: "USD",
    termAmt: "9,177,449",
    spotRate: "1.01978",
  },
  {
    id: "10",
    account: "ABCD - LDN",
    userId: "O678541",
    tradeId: "1H4-X7X32X",
    tradeDate: "2022-08-15",
    status: "Booked",
    lastUpdated: "2022-08-15 10:45:56.575",
    cashType: "Swap",
    ccyPair: "EURUSD",
    "direction(dealtCcy)": "Sell (EUR)",
    valueDate: "2022-08-17",
    dealtCcy: "EUR",
    amount: "10,000,000.00",
    baseCcy: "EUR",
    baseAmt: "10,000,000.00",
    termCcy: "USD",
    termAmt: "10,197,800",
    spotRate: "1.01978",
  },
];
export const TableExample4 = () => {
  return (
    <Table
      rowData={exampleRows4}
      rowKeyGetter={(x) => x.id}
      className={"exampleTable"}
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
