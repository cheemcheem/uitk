import {
  Table,
  TableColumn,
  RowSelectionColumn,
} from "@jpmorganchase/uitk-grid/table";

export const questionText1 = [
  "You are about to see a screen with a equity trade blotter. When you do, and without interacting with the blotter; Can you tell me what price was executed for the Tesla stock? We will be timing you.",
];

export interface ExampleRow1 {
  id: string;
  rfeId: string;
  bookingStatus: string;
  orderId: string;
  traderId: string;
  send: string;
  modified: string;
  clientName: string;
  symbol: string;
  name: string;
  side: string;
  qty: string;
  exQty: string;
  remaining: string;
  cancelled: string;
  price: string;
  exAvgpx: string;
  orderStatus: string;
  comments: string;
  pos: string;
}

export const exampleRows1 = [
  {
    id: "1",
    rfeId: "179918311",
    bookingStatus: "",
    orderId: "DFGH-5655294",
    traderId: "roski",
    send: "10:42:14",
    modified: "11:02:59",
    clientName: "Blackrock",
    symbol: "MSFT",
    name: "Microsoft Corp",
    side: "Buy",
    qty: "110,308",
    exQty: "30000",
    remaining: "80,308",
    cancelled: "",
    price: "291.91",
    exAvgpx: "291.9",
    orderStatus: "Live",
    comments: "",
    pos: "Open",
  },
  {
    id: "2",
    rfeId: "188824436",
    bookingStatus: "",
    orderId: "DFGH-5498053",
    traderId: "lpaul",
    send: "10:41:50",
    modified: "10:41:50",
    clientName: "AQR Capital Management",
    symbol: "AAPL",
    name: "Apple Inc",
    side: "Buy",
    qty: "26,729",
    exQty: "0",
    remaining: "26,729",
    cancelled: "",
    price: "172.1",
    exAvgpx: "",
    orderStatus: "Live",
    comments: "TWAP please",
    pos: "Open",
  },
  {
    id: "3",
    rfeId: "371437824",
    bookingStatus: "",
    orderId: "DFGH-6342062",
    traderId: "rsmit",
    send: "10:39:33",
    modified: "10:39:33",
    clientName: "Bridgewater Associates",
    symbol: "TSLA",
    name: "Tesla Inc",
    side: "Buy",
    qty: "24,553",
    exQty: "0",
    remaining: "24,553",
    cancelled: "",
    price: "900.09",
    exAvgpx: "",
    orderStatus: "Live",
    comments: "",
    pos: "Open",
  },
  {
    id: "4",
    rfeId: "800121810",
    bookingStatus: "",
    orderId: "DFGH-4460948",
    traderId: "roski",
    send: "10:35:19",
    modified: "10:49:33",
    clientName: "Two Sigma Investments",
    symbol: "GOOG",
    name: "Alphabet Inc Class C",
    side: "Sell",
    qty: "107,623",
    exQty: "0",
    remaining: "107,623",
    cancelled: "",
    price: "122.65",
    exAvgpx: "",
    orderStatus: "Live",
    comments: "",
    pos: "Open",
  },
  {
    id: "5",
    rfeId: "809602188",
    bookingStatus: "",
    orderId: "DFGH-2880092",
    traderId: "rsmit",
    send: "10:34:08",
    modified: "10:34:08",
    clientName: "Two Sigma Investments",
    symbol: "AMZN",
    name: "Amazon.com Inc",
    side: "Buy",
    qty: "77,325",
    exQty: "0",
    remaining: "77,325",
    cancelled: "",
    price: "143.55",
    exAvgpx: "",
    orderStatus: "Rejected",
  },
  {
    id: "6",
    rfeId: "715017685",
    bookingStatus: "",
    orderId: "DFGH-7010380",
    traderId: "popet",
    send: "10:30:54",
    modified: "11:08:36",
    clientName: "Renaissance Technologies",
    symbol: "JPM",
    name: "JPMorgan Chase & Co",
    side: "Sell",
    qty: "420,863",
    exQty: "100000",
    remaining: "320,863",
    cancelled: "",
    price: "122.13",
    exAvgpx: "122.13",
    orderStatus: "Live",
    comments: "",
    pos: "Open",
  },
  {
    id: "7",
    rfeId: "274301779",
    bookingStatus: "Booked",
    orderId: "DFGH-5374603",
    traderId: "roski",
    send: "10:29:19",
    modified: "11:06:44",
    clientName: "Man Group",
    symbol: "NVDA",
    name: "NVIDIA Corp",
    side: "Sell",
    qty: "251,750",
    exQty: "0",
    remaining: "0",
    cancelled: "251,750",
    price: "187.09",
    exAvgpx: "",
    orderStatus: "Cancelled",
  },
  {
    id: "8",
    rfeId: "569684843",
    bookingStatus: "Booked",
    orderId: "DFGH-9063894",
    traderId: "roski",
    send: "10:24:47",
    modified: "10:24:47",
    clientName: "Elliott Management",
    symbol: "FB",
    name: "Facebook Inc A",
    side: "Buy",
    qty: "33,795",
    exQty: "33,795",
    remaining: "0",
    cancelled: "",
    price: "180.5",
    exAvgpx: "180.5",
    orderStatus: "Completed",
    comments: "",
    pos: "Close",
  },
  {
    id: "9",
    rfeId: "396830427",
    bookingStatus: "Booked",
    orderId: "DFGH-9234001",
    traderId: "jamoe",
    send: "10:24:34",
    modified: "10:24:34",
    clientName: "Two Sigma Investments",
    symbol: "TWTR",
    name: "Twitter Inc",
    side: "Sell",
    qty: "567,103",
    exQty: "567,103",
    remaining: "0",
    cancelled: "",
    price: "44.26",
    exAvgpx: "44.265",
    orderStatus: "Completed",
    comments: "",
    pos: "Close",
  },
  {
    id: "10",
    rfeId: "269760267",
    bookingStatus: "Booked",
    orderId: "DFGH-7591328",
    traderId: "zdans",
    send: "10:23:47",
    modified: "10:23:47",
    clientName: "Millennium Management",
    symbol: "NFLX",
    name: "Netflix Inc",
    side: "Buy",
    qty: "189,330",
    exQty: "189,330",
    remaining: "0",
    cancelled: "",
    price: "249.3",
    exAvgpx: "249",
    orderStatus: "Completed",
    comments: "",
    pos: "Open",
  },
];
export const TableExample1 = () => {
  return (
    <Table
      rowData={exampleRows1}
      rowKeyGetter={(x) => x.id}
      className={"exampleTable"}
      zebra={true}
    >
      <RowSelectionColumn id={"rowSelection"} />
      <TableColumn
        name="RFE ID"
        id="rfeId"
        defaultWidth={80}
        getValue={(x) => x.rfeId}
      />
      <TableColumn
        name="Booking Status"
        id="bookingStatus"
        defaultWidth={100}
        getValue={(x) => x.bookingStatus}
      />
      <TableColumn
        name="Order ID"
        id="orderId"
        defaultWidth={103}
        getValue={(x) => x.orderId}
      />
      <TableColumn
        name="Trader ID"
        id="traderId"
        defaultWidth={70}
        getValue={(x) => x.traderId}
      />
      <TableColumn
        name="Send"
        id="send"
        defaultWidth={65}
        getValue={(x) => x.send}
      />
      <TableColumn
        name="Modified"
        id="modified"
        defaultWidth={70}
        getValue={(x) => x.modified}
      />
      <TableColumn
        name="Client Name"
        id="clientName"
        defaultWidth={175}
        getValue={(x) => x.clientName}
      />
      <TableColumn
        name="Symbol"
        id="symbol"
        defaultWidth={60}
        getValue={(x) => x.symbol}
      />
      <TableColumn
        name="Name"
        id="name"
        defaultWidth={138}
        getValue={(x) => x.name}
      />
      <TableColumn
        name="Side"
        id="side"
        defaultWidth={45}
        getValue={(x) => x.side}
      />
      <TableColumn
        name="Qty"
        id="qty"
        defaultWidth={62}
        getValue={(x) => x.qty}
        align="right"
      />
      <TableColumn
        name="Ex Qty"
        id="exQty"
        defaultWidth={69}
        getValue={(x) => x.exQty}
        align="right"
      />
      <TableColumn
        name="Remaining"
        id="remaining"
        defaultWidth={77}
        getValue={(x) => x.remaining}
        align="right"
      />
      <TableColumn
        name="Cancelled"
        id="cancelled"
        defaultWidth={73}
        getValue={(x) => x.cancelled}
        align="right"
      />
      <TableColumn
        name="Price"
        id="price"
        defaultWidth={63}
        getValue={(x) => x.price}
        align="right"
      />
      <TableColumn
        name="Ex AvgPx"
        id="exAvgpx"
        defaultWidth={68}
        getValue={(x) => x.exAvgpx}
        align="right"
      />
      <TableColumn
        name="Order Status"
        id="orderStatus"
        defaultWidth={92}
        getValue={(x) => x.orderStatus}
      />
      <TableColumn
        name="Comments"
        id="comments"
        defaultWidth={93}
        getValue={(x) => x.comments}
      />
      <TableColumn
        name="Pos"
        id="pos"
        defaultWidth={56}
        getValue={(x) => x.pos}
      />
    </Table>
  );
};
