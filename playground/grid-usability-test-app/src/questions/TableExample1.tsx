import {
  Table,
  TableColumn,
  RowSelectionColumn,
} from "@jpmorganchase/uitk-grid/table";
import { ExampleRow1, exampleRows1 } from "./rowData1";

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
