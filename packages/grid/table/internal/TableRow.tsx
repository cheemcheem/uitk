import { MouseEventHandler } from "react";
import "./TableRow.css";
import { BaseCell } from "../BaseCell";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import cn from "classnames";
import { TableColumnModel, TableRowModel } from "../Table";
import { FakeCell } from "./FakeCell";
import { DefaultCellValue } from "./DefaultCellValue";

const withBaseName = makePrefixer("uitkTableTableRow");

export interface TableRowProps {
  row: TableRowModel;
  isSelected?: boolean;
  isHoverOver?: boolean;
  zebra?: boolean;
  columns: TableColumnModel[];
  cursorColKey?: string;
  onMouseEnter?: MouseEventHandler<HTMLTableRowElement>;
  onMouseLeave?: MouseEventHandler<HTMLTableRowElement>;
  gap?: number;
  columnSeparators?: boolean;
}

export const TableRow = function TableRow(props: TableRowProps) {
  const {
    row,
    isSelected,
    zebra,
    isHoverOver,
    columns,
    onMouseEnter,
    onMouseLeave,
    cursorColKey,
    gap,
    columnSeparators,
  } = props;

  if (!row.key) {
    throw new Error(`Invalid row`);
  }

  return (
    <tr
      className={cn(withBaseName(), {
        [withBaseName("zebra")]: zebra,
        [withBaseName("hover")]: isHoverOver,
        [withBaseName("selected")]: isSelected,
      })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-row-index={row.index}
      data-row-key={row.key}
      role="row"
    >
      {columns.map((column, i) => {
        const Cell = column.info.props.cellComponent || BaseCell;
        const CellValue =
          column.info.props.cellValueComponent || DefaultCellValue;
        const value = column.info.props.getValue
          ? column.info.props.getValue(row.data)
          : null;
        const isFocused = cursorColKey === column.info.props.id;
        return (
          <Cell
            key={column.info.props.id}
            row={row}
            column={column}
            isFocused={isFocused}
            columnSeparator={columnSeparators}
          >
            <CellValue column={column} row={row} value={value} />
          </Cell>
        );
      })}
      {gap !== undefined && gap > 0 ? <FakeCell row={row} /> : null}
    </tr>
  );
};
