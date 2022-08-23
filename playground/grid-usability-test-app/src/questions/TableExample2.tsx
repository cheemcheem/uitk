import {
  Table,
  TableColumn,
  RowSelectionColumn,
} from "@jpmorganchase/uitk-grid/table";
import { ExampleRow2, exampleRows2 } from "./rowData2";

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
