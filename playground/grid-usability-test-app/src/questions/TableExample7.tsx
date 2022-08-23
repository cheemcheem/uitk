import {
  Table,
  TableColumn,
  RowSelectionColumn,
} from "@jpmorganchase/uitk-grid/table";
import { ExampleRow7, exampleRows7 } from "./rowData7";

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
