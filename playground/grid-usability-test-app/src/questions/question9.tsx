import {
  Table,
  TableColumn,
  RowSelectionColumn,
  ColumnGroup,
} from "@jpmorganchase/uitk-grid/table";

export const questionText9 = [
  "Finally without scrolling can you tell me which columns are pinned?",
  "Now scroll, was that what you expected?",
];

export interface ExampleRow9 {
  id: string;
  orderId: string;
  side: string;
  qty: string;
  symbol: string;
  name: string;
  clientName: string;
  status: string;
  execQty: string;
  remaining: string;
  cancelled: string;
  price: string;
  execAvgpx: string;
  comments: string;
  traderId: string;
  modified: string;
}

export const exampleRows9 = [
  {
    id: "1",
    orderId: "DFGH-5655294",
    side: "Buy",
    qty: "110,308",
    symbol: "MSFT",
    name: "Microsoft Corp",
    clientName: "Blackrock",
    status: "Live",
    execQty: "30000",
    remaining: "80,308",
    cancelled: "",
    price: "291.91",
    execAvgpx: "291.9",
    comments: "",
    traderId: "roski",
    modified: "11:02:59",
  },
  {
    id: "2",
    orderId: "DFGH-5498053",
    side: "Buy",
    qty: "26,729",
    symbol: "AAPL",
    name: "Apple Inc",
    clientName: "AQR Capital Management",
    status: "Live",
    execQty: "0",
    remaining: "26,729",
    cancelled: "",
    price: "172.1",
    execAvgpx: "",
    comments: "TWAP please",
    traderId: "lpaul",
    modified: "10:41:50",
  },
  {
    id: "3",
    orderId: "DFGH-6342062",
    side: "Buy",
    qty: "24,553",
    symbol: "TSLA",
    name: "Tesla Inc",
    clientName: "Bridgewater Associates",
    status: "Live",
    execQty: "0",
    remaining: "24,553",
    cancelled: "",
    price: "900.09",
    execAvgpx: "",
    comments: "",
    traderId: "rsmit",
    modified: "10:39:33",
  },
  {
    id: "4",
    orderId: "DFGH-4460948",
    side: "Sell",
    qty: "107,623",
    symbol: "GOOG",
    name: "Alphabet Inc Class C",
    clientName: "Two Sigma Investments",
    status: "Live",
    execQty: "0",
    remaining: "107,623",
    cancelled: "",
    price: "122.65",
    execAvgpx: "",
    comments: "",
    traderId: "roski",
    modified: "10:49:33",
  },
  {
    id: "5",
    orderId: "DFGH-2880092",
    side: "Buy",
    qty: "77,325",
    symbol: "AMZN",
    name: "Amazon.com Inc",
    clientName: "Two Sigma Investments",
    status: "Rejected",
    execQty: "0",
    remaining: "77,325",
    cancelled: "",
    price: "143.55",
    execAvgpx: "",
    comments: "",
    traderId: "rsmit",
    modified: "10:34:08",
  },
  {
    id: "6",
    orderId: "DFGH-7010380",
    side: "Sell",
    qty: "420,863",
    symbol: "JPM",
    name: "JPMorgan Chase & Co",
    clientName: "Renaissance Technologies",
    status: "Live",
    execQty: "100000",
    remaining: "320,863",
    cancelled: "",
    price: "122.13",
    execAvgpx: "122.13",
    comments: "",
    traderId: "popet",
    modified: "11:08:36",
  },
  {
    id: "7",
    orderId: "DFGH-5374603",
    side: "Sell",
    qty: "251,750",
    symbol: "NVDA",
    name: "NVIDIA Corp",
    clientName: "Man Group",
    status: "Cancelled",
    execQty: "0",
    remaining: "0",
    cancelled: "251,750",
    price: "187.09",
    execAvgpx: "",
    comments: "",
    traderId: "roski",
    modified: "11:06:44",
  },
  {
    id: "8",
    orderId: "DFGH-9063894",
    side: "Buy",
    qty: "33,795",
    symbol: "FB",
    name: "Facebook Inc A",
    clientName: "Elliott Management",
    status: "Completed",
    execQty: "33,795",
    remaining: "0",
    cancelled: "",
    price: "180.5",
    execAvgpx: "180.5",
    comments: "",
    traderId: "roski",
    modified: "10:24:47",
  },
  {
    id: "9",
    orderId: "DFGH-9234001",
    side: "Sell",
    qty: "567,103",
    symbol: "TWTR",
    name: "Twitter Inc",
    clientName: "Two Sigma Investments",
    status: "Completed",
    execQty: "567,103",
    remaining: "0",
    cancelled: "",
    price: "44.26",
    execAvgpx: "44.265",
    comments: "",
    traderId: "jamoe",
    modified: "10:24:34",
  },
  {
    id: "10",
    orderId: "DFGH-7591328",
    side: "Buy",
    qty: "189,330",
    symbol: "NFLX",
    name: "Netflix Inc",
    clientName: "Millennium Management",
    status: "Completed",
    execQty: "189,330",
    remaining: "0",
    cancelled: "",
    price: "249.3",
    execAvgpx: "249",
    comments: "",
    traderId: "zdans",
    modified: "10:23:47",
  },
];
export const TableExample9 = () => {
  return (
    <Table
      rowData={exampleRows9}
      rowKeyGetter={(x) => x.id}
      className={"exampleTable"}
    >
      <ColumnGroup name="" id="selector">
        <RowSelectionColumn id={"rowSelection"} />
      </ColumnGroup>
      <ColumnGroup name="Order Summary" id="orderSummary">
        <TableColumn
          name="Order ID"
          id="orderId"
          defaultWidth={110}
          getValue={(x) => x.orderId}
        />
        <TableColumn
          name="Side"
          id="side"
          defaultWidth={43}
          getValue={(x) => x.side}
        />
        <TableColumn
          name="Qty"
          id="qty"
          defaultWidth={64}
          getValue={(x) => x.qty}
          align="right"
        />
        <TableColumn
          name="Symbol"
          id="symbol"
          defaultWidth={62}
          getValue={(x) => x.symbol}
        />
        <TableColumn
          name="Name"
          id="name"
          defaultWidth={146}
          getValue={(x) => x.name}
        />
        <TableColumn
          name="Client Name"
          id="clientName"
          defaultWidth={173}
          getValue={(x) => x.clientName}
        />
      </ColumnGroup>
      <ColumnGroup name="Order Flow" id="orderFlow">
        <TableColumn
          name="Status"
          id="status"
          defaultWidth={79}
          getValue={(x) => x.status}
        />
        <TableColumn
          name="Exec. Qty"
          id="execQty"
          defaultWidth={75}
          getValue={(x) => x.execQty}
          align="right"
        />
        <TableColumn
          name="Remaining"
          id="remaining"
          defaultWidth={80}
          getValue={(x) => x.remaining}
          align="right"
        />
        <TableColumn
          name="Cancelled"
          id="cancelled"
          defaultWidth={72}
          getValue={(x) => x.cancelled}
          align="right"
        />
        <TableColumn
          name="Price"
          id="price"
          defaultWidth={57}
          getValue={(x) => x.price}
          align="right"
        />
        <TableColumn
          name="Exec. AvgPx"
          id="execAvgpx"
          defaultWidth={79}
          getValue={(x) => x.execAvgpx}
          align="right"
        />
      </ColumnGroup>
      <ColumnGroup name="Order Management" id="orderManagement">
        <TableColumn
          name="Comments"
          id="comments"
          defaultWidth={92}
          getValue={(x) => x.comments}
        />
        <TableColumn
          name="Trader ID"
          id="traderId"
          defaultWidth={70}
          getValue={(x) => x.traderId}
        />
        <TableColumn
          name="Modified"
          id="modified"
          defaultWidth={73}
          getValue={(x) => x.modified}
        />
      </ColumnGroup>
    </Table>
  );
};
