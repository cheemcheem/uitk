import {
  Table,
  TableColumn,
  RowSelectionColumn,
} from "@jpmorganchase/uitk-grid/table";

export const questionText7 = [
  "This time I want you to identify and update the content in the blotter.",
  "Now can you find the order row for user “Joe Johnson”?",
  "Can you navigate around and tell me which cells on this row are editable?",
  "Now edit the “Filled Amount” to “1,000,000” please?",
];

export interface ExampleRow7 {
  id: string;
  tradeId: string;
  tradeDate: string;
  bookingStatus: string;
  tradeAction: string;
  salespersonName: string;
  jpmDirection: string;
  instrument: string;
  issuer: string;
  notional: string;
  ccy: string;
  price: string;
  upfrontFee: string;
  cpn: string;
  counterparty: string;
  cptySpn: string;
  cv: string;
  clientContact: string;
  traderName: string;
}

export const exampleRows7 = [
  {
    id: "1",
    tradeId: "SMFC-1789",
    tradeDate: "19 Aug 22",
    bookingStatus: "LIVE STATUS",
    tradeAction: "OPEN",
    salespersonName: "Nicholas Atherton",
    jpmDirection: "BUY",
    instrument: "VOD",
    issuer: "VODAFONE GROUP PUBLIC LIMITED COMPANY",
    notional: "31,800,000",
    ccy: "GBP",
    price: "100.9238",
    upfrontFee: "12,000",
    cpn: "1.75",
    counterparty: "CITIBANK NA",
    cptySpn: "1638716",
    cv: "1,800",
    clientContact: "Beulah Bates",
    traderName: "Izabelle Mcphee",
  },
  {
    id: "2",
    tradeId: "IABF-3716",
    tradeDate: "19 Aug 22",
    bookingStatus: "LIVE STATUS",
    tradeAction: "OPEN",
    salespersonName: "Damian Hanson",
    jpmDirection: "BUY",
    instrument: "IBM",
    issuer: "INTERNATIONAL BUSINESS MACHINES CORPORATION",
    notional: "14,200,000",
    ccy: "USD",
    price: "102.0621",
    upfrontFee: "19,330",
    cpn: "3.625",
    counterparty: "ALLIANZ GLOBAL INVESTORS GMBH",
    cptySpn: "6172936",
    cv: "2,900",
    clientContact: "Jax May",
    traderName: "Ruairidh Lancaster",
  },
  {
    id: "3",
    tradeId: "EOJR-610510",
    tradeDate: "19 Aug 22",
    bookingStatus: "LIVE STATUS",
    tradeAction: "CLEAR",
    salespersonName: "Halimah Hanna",
    jpmDirection: "SELL",
    instrument: "WMT",
    issuer: "WALMART INC.",
    notional: "14,500,000",
    ccy: "USD",
    price: "100.6563",
    upfrontFee: "16,670",
    cpn: "5.625",
    counterparty: "SANTANDER ASSET MGMT, S.A. SGIC",
    cptySpn: "3194643",
    cv: "2,500",
    clientContact: "Nolan Bradford",
    traderName: "Zoha Chung",
  },
  {
    id: "4",
    tradeId: "ZPQC-1588",
    tradeDate: "19 Aug 22",
    bookingStatus: "LIVE STATUS",
    tradeAction: "BREAK PARENT",
    salespersonName: "Diego Bryan",
    jpmDirection: "BUY",
    instrument: "CSCO",
    issuer: "CISCO SYSTEMS, INC.",
    notional: "27,200,000",
    ccy: "USD",
    price: "97.0393",
    upfrontFee: "32,000",
    cpn: "3.625",
    counterparty: "GOLDMAN SACHS ASSET MGMT LP",
    cptySpn: "1234143",
    cv: "4,800",
    clientContact: "Nolan Bradford",
    traderName: "Zoha Chung",
  },
  {
    id: "5",
    tradeId: "FDVJ-8324",
    tradeDate: "19 Aug 22",
    bookingStatus: "LIVE STATUS",
    tradeAction: "CANCELLED",
    salespersonName: "Jamil Major",
    jpmDirection: "SELL",
    instrument: "AAPL",
    issuer: "APPLE INC",
    notional: "1,290,000",
    ccy: "USD",
    price: "115.5164",
    upfrontFee: "4,000",
    cpn: "3.2",
    counterparty: "HENDERSON FUND MANAGEMENT LIMITED (AGT)",
    cptySpn: "5631452",
    cv: "600",
    clientContact: "Shaunie Kennedy",
    traderName: "Ayra Campos",
  },
  {
    id: "6",
    tradeId: "OMCY-102510",
    tradeDate: "19 Aug 22",
    bookingStatus: "BROKEN",
    tradeAction: "-",
    salespersonName: "Melvin Oconnor",
    jpmDirection: "BUY",
    instrument: "COST",
    issuer: "COSTCO WHOLESALE CORPORATION",
    notional: "15,200,000",
    ccy: "USD",
    price: "103.3927",
    upfrontFee: "28,670",
    cpn: "3.625",
    counterparty: "BLACKROCK JAPAN CO LTD",
    cptySpn: "8962476",
    cv: "4,300",
    clientContact: "Conah Alfaro",
    traderName: "Dianne Lennon",
  },
  {
    id: "7",
    tradeId: "UTUW-3448",
    tradeDate: "19 Aug 22",
    bookingStatus: "LIVE STATUS",
    tradeAction: "OPEN",
    salespersonName: "Michaela Hernandez",
    jpmDirection: "SELL",
    instrument: "T",
    issuer: "AT&T INC.",
    notional: "3,100,000",
    ccy: "USD",
    price: "102.769",
    upfrontFee: "25,330",
    cpn: "3.2",
    counterparty: "MANDALAY CORPORATE ENTERPRISES, LLC",
    cptySpn: "7984722",
    cv: "3,800",
    clientContact: "Gabriella Marks",
    traderName: "Ruairidh Lancaster",
  },
  {
    id: "8",
    tradeId: "YNDM-1667",
    tradeDate: "19 Aug 22",
    bookingStatus: "LIVE STATUS",
    tradeAction: "OPEN",
    salespersonName: "Joe Johnson",
    jpmDirection: "SELL",
    instrument: "CVX",
    issuer: "CHEVRON CORPORATION",
    notional: "990,000",
    ccy: "USD",
    price: "100.9659",
    upfrontFee: "28,000",
    cpn: "2.8",
    counterparty: "LLOYDS BANK PLC-NEW YORK",
    cptySpn: "9125402",
    cv: "4,200",
    clientContact: "Millie-Mae Mercer",
    traderName: "Ayra Campos",
  },
  {
    id: "9",
    tradeId: "YMTM-4252",
    tradeDate: "19 Aug 22",
    bookingStatus: "LIVE STATUS",
    tradeAction: "CLOSED",
    salespersonName: "Gruffydd Dickerson",
    jpmDirection: "SELL",
    instrument: "XOM",
    issuer: "EXXON MOBILE CORPORATION",
    notional: "41,700,000",
    ccy: "USD",
    price: "100.1665",
    upfrontFee: "13,330",
    cpn: "3.625",
    counterparty: "CHINA WEALTH INVESTMENT I LIMITED",
    cptySpn: "7371732",
    cv: "2,000",
    clientContact: "Gabriella Marks",
    traderName: "Zoha Chung",
  },
  {
    id: "10",
    tradeId: "KESS-3728",
    tradeDate: "19 Aug 22",
    bookingStatus: "LIVE STATUS",
    tradeAction: "CLOSED",
    salespersonName: "Aria Mcneill",
    jpmDirection: "SELL",
    instrument: "MSFT",
    issuer: "Microsoft Corporation",
    notional: "29,800,000",
    ccy: "USD",
    price: "99.8033",
    upfrontFee: "10,670",
    cpn: "2.3",
    counterparty: "MORGAN STANLEY INVESTMENT MGMT INC",
    cptySpn: "2903717",
    cv: "1,600",
    clientContact: "Caelan Brook",
    traderName: "Dianne Lennon",
  },
];
export const TableExample7 = () => {
  return (
    <Table
      rowData={exampleRows7}
      rowKeyGetter={(x) => x.id}
      className={"exampleTable"}
    >
      <RowSelectionColumn id={"rowSelection"} />
      <TableColumn
        name="Trade ID"
        id="tradeId"
        defaultWidth={98}
        getValue={(x) => x.tradeId}
      />
      <TableColumn
        name="Trade Date"
        id="tradeDate"
        defaultWidth={81}
        getValue={(x) => x.tradeDate}
      />
      <TableColumn
        name="Booking Status"
        id="bookingStatus"
        defaultWidth={100}
        getValue={(x) => x.bookingStatus}
      />
      <TableColumn
        name="Trade Action"
        id="tradeAction"
        defaultWidth={112}
        getValue={(x) => x.tradeAction}
      />
      <TableColumn
        name="Salesperson Name"
        id="salespersonName"
        defaultWidth={142}
        getValue={(x) => x.salespersonName}
      />
      <TableColumn
        name="JPM Direction"
        id="jpmDirection"
        defaultWidth={90}
        getValue={(x) => x.jpmDirection}
      />
      <TableColumn
        name="Instrument"
        id="instrument"
        defaultWidth={79}
        getValue={(x) => x.instrument}
      />
      <TableColumn
        name="Issuer"
        id="issuer"
        defaultWidth={324}
        getValue={(x) => x.issuer}
      />
      <TableColumn
        name="Notional"
        id="notional"
        defaultWidth={82}
        getValue={(x) => x.notional}
        align="right"
      />
      <TableColumn
        name="CCY"
        id="ccy"
        defaultWidth={46}
        getValue={(x) => x.ccy}
      />
      <TableColumn
        name="Price"
        id="price"
        defaultWidth={71}
        getValue={(x) => x.price}
        align="right"
      />
      <TableColumn
        name="Upfront Fee"
        id="upfrontFee"
        defaultWidth={87}
        getValue={(x) => x.upfrontFee}
        align="right"
      />
      <TableColumn
        name="CPN"
        id="cpn"
        defaultWidth={57}
        getValue={(x) => x.cpn}
        align="right"
      />
      <TableColumn
        name="Counterparty"
        id="counterparty"
        defaultWidth={301}
        getValue={(x) => x.counterparty}
      />
      <TableColumn
        name="Cpty SPN"
        id="cptySpn"
        defaultWidth={75}
        getValue={(x) => x.cptySpn}
      />
      <TableColumn
        name="CV"
        id="cv"
        defaultWidth={54}
        getValue={(x) => x.cv}
        align="right"
      />
      <TableColumn
        name="Client Contact"
        id="clientContact"
        defaultWidth={117}
        getValue={(x) => x.clientContact}
      />
      <TableColumn
        name="Trader name"
        id="traderName"
        defaultWidth={150}
        getValue={(x) => x.traderName}
      />
    </Table>
  );
};
