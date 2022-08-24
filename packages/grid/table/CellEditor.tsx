import { ChangeEventHandler, CSSProperties, FC, ReactNode } from "react";
import "./CellEditor.css";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import { TableColumnModel, TableRowModel } from "./Table";
import { useEditorContext } from "./EditorContext";

const withBaseName = makePrefixer("uitkTableCellEditor");

export interface CellEditorProps {}

export const CellEditor: FC<CellEditorProps> = (props) => {
  const { editorText, setEditorText } = useEditorContext();

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditorText(e.target.value);
  };

  return (
    <td className={withBaseName()}>
      <input autoFocus={true} value={editorText} onChange={onChange} />
    </td>
  );
};
