import {
  Table,
  TableColumn,
  RowSelectionColumn,
} from "@jpmorganchase/uitk-grid/table";
import { ExampleRow3, exampleRows3 } from "./rowData3";

export const TableExample3 = () => {
  return (
    <Table
      rowData={exampleRows3}
      rowKeyGetter={(x) => x.id}
      className={"exampleTable"}
    >
      <RowSelectionColumn id={"rowSelection"} />
      <TableColumn
        name="Trade Id"
        id="tradeId"
        defaultWidth={98}
        getValue={(x) => x.tradeId}
      />
      <TableColumn
        name="Source"
        id="source"
        defaultWidth={72}
        getValue={(x) => x.source}
      />
      <TableColumn
        name="Origination"
        id="origination"
        defaultWidth={79}
        getValue={(x) => x.origination}
      />
      <TableColumn
        name="Market"
        id="market"
        defaultWidth={80}
        getValue={(x) => x.market}
      />
      <TableColumn
        name="Matching Trade Id"
        id="matchingTradeId"
        defaultWidth={118}
        getValue={(x) => x.matchingTradeId}
      />
      <TableColumn
        name="Match Time"
        id="matchTime"
        defaultWidth={82}
        getValue={(x) => x.matchTime}
      />
      <TableColumn
        name="Booking Status"
        id="bookingStatus"
        defaultWidth={100}
        getValue={(x) => x.bookingStatus}
      />
      <TableColumn
        name="Client Account Name"
        id="clientAccountName"
        defaultWidth={192}
        getValue={(x) => x.clientAccountName}
      />
      <TableColumn
        name="JPM Direction"
        id="jpmDirection"
        defaultWidth={92}
        getValue={(x) => x.jpmDirection}
      />
      <TableColumn
        name="Notional"
        id="notional"
        defaultWidth={74}
        getValue={(x) => x.notional}
        align="right"
      />
      <TableColumn
        name="Description"
        id="description"
        defaultWidth={164}
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
        name="Level Type"
        id="levelType"
        defaultWidth={100}
        getValue={(x) => x.levelType}
      />
    </Table>
  );
};
