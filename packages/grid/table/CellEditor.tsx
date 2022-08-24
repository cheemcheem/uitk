import { FC } from "react";
import "./CellEditor.css";
import { makePrefixer } from "@jpmorganchase/uitk-core";

const withBaseName = makePrefixer("uitkTableCellEditor");

export interface CellEditorProps {}

export const CellEditor: FC<CellEditorProps> = (props) => {
  return (
    <td className={withBaseName()}>
      <input autoFocus={true} />
    </td>
  );
};
