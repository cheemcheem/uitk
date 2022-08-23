import {
  Table,
  TableColumn,
  RowSelectionColumn,
} from "@jpmorganchase/uitk-grid/table";

export const questionText2 = [
  "You are about to see a different trade blotter, the columns have been moved around. This time, can you tell me what stock name was executed after the Walmart trade?",
];

export interface ExampleRow2 {
  id: string;
  timestamp: string;
  jpmDirection: string;
  notional: string;
  ccy: string;
  instrument: string;
  issuer: string;
  matDate: string;
  spread: string;
  price: string;
  upfrontFee: string;
  cpn: string;
  counterparty: string;
  cptySpn: string;
  cv: string;
  clientContact: string;
}

export const exampleRows2 = [
  {
    id: "1",
    timestamp: "10:40",
    jpmDirection: "BUY",
    notional: "14,100,000",
    ccy: "GBP",
    instrument: "VOD",
    issuer: "VODAFONE GROUP PUBLIC LIMITED COMPANY",
    matDate: "Dec 22",
    spread: "",
    price: "100.9238",
    upfrontFee: "10,000",
    cpn: "1.75",
    counterparty: "CITIBANK NA",
    cptySpn: "1638716",
    cv: "1,500",
    clientContact: "Beulah Bates",
  },
  {
    id: "2",
    timestamp: "10:39",
    jpmDirection: "BUY",
    notional: "41,200,000",
    ccy: "USD",
    instrument: "IBM",
    issuer: "INTERNATIONAL BUSINESS MACHINES CORPORATION",
    matDate: "Jun 23",
    spread: "",
    price: "102.0621",
    upfrontFee: "18,670",
    cpn: "3.625",
    counterparty: "ALLIANZ GLOBAL INVESTORS GMBH",
    cptySpn: "6172936",
    cv: "2,800",
    clientContact: "Jax May",
  },
  {
    id: "3",
    timestamp: "10:38",
    jpmDirection: "SELL",
    notional: "13,600,000",
    ccy: "USD",
    instrument: "WMT",
    issuer: "WALMART INC.",
    matDate: "Jun 27",
    spread: "85",
    price: "100.6563",
    upfrontFee: "24,670",
    cpn: "5.625",
    counterparty: "SANTANDER ASSET MGMT, S.A. SGIC",
    cptySpn: "3194643",
    cv: "3,700",
    clientContact: "Nolan Bradford",
  },
  {
    id: "4",
    timestamp: "10:37",
    jpmDirection: "BUY",
    notional: "35,600,000",
    ccy: "USD",
    instrument: "CSCO",
    issuer: "CISCO SYSTEMS, INC.",
    matDate: "Jan 23",
    spread: "",
    price: "97.0393",
    upfrontFee: "19,330",
    cpn: "3.625",
    counterparty: "GOLDMAN SACHS ASSET MGMT LP",
    cptySpn: "1234143",
    cv: "2,900",
    clientContact: "Nolan Bradford",
  },
  {
    id: "5",
    timestamp: "10:36",
    jpmDirection: "SELL",
    notional: "41,200,000",
    ccy: "USD",
    instrument: "AAPL",
    issuer: "APPLE INC",
    matDate: "Jun 27",
    spread: "123",
    price: "115.5164",
    upfrontFee: "16,000",
    cpn: "3.2",
    counterparty: "HENDERSON FUND MANAGEMENT LIMITED (AGT)",
    cptySpn: "5631452",
    cv: "2,400",
    clientContact: "Shaunie Kennedy",
  },
  {
    id: "6",
    timestamp: "10:35",
    jpmDirection: "BUY",
    notional: "700,000",
    ccy: "USD",
    instrument: "COST",
    issuer: "COSTCO WHOLESALE CORPORATION",
    matDate: "Jun 27",
    spread: "111",
    price: "103.3927",
    upfrontFee: "22,670",
    cpn: "3.625",
    counterparty: "BLACKROCK JAPAN CO LTD",
    cptySpn: "8962476",
    cv: "3,400",
    clientContact: "Conah Alfaro",
  },
  {
    id: "7",
    timestamp: "10:34",
    jpmDirection: "SELL",
    notional: "18,200,000",
    ccy: "USD",
    instrument: "T",
    issuer: "AT&T INC.",
    matDate: "Jan 25",
    spread: "",
    price: "102.769",
    upfrontFee: "27,330",
    cpn: "3.2",
    counterparty: "MANDALAY CORPORATE ENTERPRISES, LLC",
    cptySpn: "7984722",
    cv: "4,100",
    clientContact: "Gabriella Marks",
  },
  {
    id: "8",
    timestamp: "10:33",
    jpmDirection: "SELL",
    notional: "3,700,000",
    ccy: "USD",
    instrument: "CVX",
    issuer: "CHEVRON CORPORATION",
    matDate: "Jun 27",
    spread: "",
    price: "100.9659",
    upfrontFee: "20,670",
    cpn: "",
    counterparty: "LLOYDS BANK PLC-NEW YORK",
    cptySpn: "9125402",
    cv: "3,100",
    clientContact: "Millie-Mae Mercer",
  },
  {
    id: "9",
    timestamp: "10:32",
    jpmDirection: "SELL",
    notional: "8,300,000",
    ccy: "USD",
    instrument: "XOM",
    issuer: "EXXON MOBILE CORPORATION",
    matDate: "Dec 22",
    spread: "",
    price: "100.1665",
    upfrontFee: "18,670",
    cpn: "3.625",
    counterparty: "CHINA WEALTH INVESTMENT I LIMITED",
    cptySpn: "7371732",
    cv: "2,800",
    clientContact: "Gabriella Marks",
  },
  {
    id: "10",
    timestamp: "10:31",
    jpmDirection: "SELL",
    notional: "900,000",
    ccy: "USD",
    instrument: "MSFT",
    issuer: "Microsoft Corporation",
    matDate: "Jun 27",
    spread: "",
    price: "99.8033",
    upfrontFee: "31,330",
    cpn: "",
    counterparty: "MORGAN STANLEY INVESTMENT MGMT INC",
    cptySpn: "2903717",
    cv: "4,700",
    clientContact: "Caelan Brook",
  },
];
export const TableExample2 = () => {
  return (
    <Table
      rowData={exampleRows2}
      rowKeyGetter={(x) => x.id}
      className={"exampleTable"}
      columnSeparators={true}
      zebra={true}
    >
      <RowSelectionColumn id={"rowSelection"} />
      <TableColumn
        name="Timestamp"
        id="timestamp"
        defaultWidth={79}
        getValue={(x) => x.timestamp}
      />
      <TableColumn
        name="JPM Direction"
        id="jpmDirection"
        defaultWidth={89}
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
        name="CCY"
        id="ccy"
        defaultWidth={43}
        getValue={(x) => x.ccy}
      />
      <TableColumn
        name="Instrument"
        id="instrument"
        defaultWidth={81}
        getValue={(x) => x.instrument}
      />
      <TableColumn
        name="Issuer"
        id="issuer"
        defaultWidth={320}
        getValue={(x) => x.issuer}
      />
      <TableColumn
        name="Mat Date"
        id="matDate"
        defaultWidth={66}
        getValue={(x) => x.matDate}
      />
      <TableColumn
        name="Spread"
        id="spread"
        defaultWidth={59}
        getValue={(x) => x.spread}
        align="right"
      />
      <TableColumn
        name="Price"
        id="price"
        defaultWidth={70}
        getValue={(x) => x.price}
        align="right"
      />
      <TableColumn
        name="Upfront Fee"
        id="upfrontFee"
        defaultWidth={83}
        getValue={(x) => x.upfrontFee}
        align="right"
      />
      <TableColumn
        name="CPN"
        id="cpn"
        defaultWidth={47}
        getValue={(x) => x.cpn}
        align="right"
      />
      <TableColumn
        name="Counterparty"
        id="counterparty"
        defaultWidth={297}
        getValue={(x) => x.counterparty}
      />
      <TableColumn
        name="Cpty SPN"
        id="cptySpn"
        defaultWidth={69}
        getValue={(x) => x.cptySpn}
      />
      <TableColumn
        name="CV"
        id="cv"
        defaultWidth={53}
        getValue={(x) => x.cv}
        align="right"
      />
      <TableColumn
        name="Client Contact"
        id="clientContact"
        defaultWidth={100}
        getValue={(x) => x.clientContact}
      />
    </Table>
  );
};
