import {
  ColumnGroup,
  RowSelectionColumn,
  Table,
  TableColumn,
  TableProps,
} from "@jpmorganchase/uitk-grid/table";
import { exampleRows9 } from "./rowData9";

export const TableExample9 = (props: Partial<TableProps>) => {
  return (
    <Table
      {...props}
      rowData={exampleRows9}
      rowKeyGetter={(x) => x.id}
      className={"exampleTable"}
    >
      <ColumnGroup name="" id="selector" pinned={"left"}>
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
