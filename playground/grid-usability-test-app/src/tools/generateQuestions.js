const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "../data");
const destFolder = path.join(__dirname, "../questions");

if (!fs.existsSync(dataFolder)) {
  console.log(`Data folder not found: "${dataFolder}"`);
  return 1;
}

function generateTable(questIndex, columnNames, propNames) {
  const tabOutput = [];

  const addImport = (what, source) => {
    tabOutput.push(`import {${what.join(", ")}} from "${source}";`);
  };

  addImport(
    ["Table", "TableColumn", "RowSelectionColumn"],
    "@jpmorganchase/uitk-grid/table"
  );
  addImport(
    [`ExampleRow${questIndex}`, `exampleRows${questIndex}`],
    `./rowData${questIndex}`
  );

  tabOutput.push(``);

  tabOutput.push(`export const TableExample${questIndex} = () => {`);
  tabOutput.push(`\treturn (`);
  tabOutput.push(`\t\t<Table`);
  tabOutput.push(`\t\t\trowData={exampleRows${questIndex}}`);
  tabOutput.push(`\t\t\trowKeyGetter={(x) => x.id}`);
  tabOutput.push(`\t\t\tclassName={"exampleTable"}`);
  tabOutput.push(`\t\t>`);

  tabOutput.push(`\t\t\t<RowSelectionColumn id={"rowSelection"} />`);
  propNames.forEach((p, i) => {
    tabOutput.push(`\t\t\t<TableColumn`);
    tabOutput.push(`\t\t\t\tname="${columnNames[i]}"`);
    tabOutput.push(`\t\t\t\tid=${p.startsWith('"') ? p : `"${p}"`}`);
    tabOutput.push(`\t\t\t\tdefaultWidth={100}`);
    tabOutput.push(
      `\t\t\t\tgetValue={(x) => x${p.startsWith('"') ? `[${p}]` : `.${p}`}}`
    );
    tabOutput.push(`\t\t\t/>`);
  });

  tabOutput.push(`\t\t</Table>`);
  tabOutput.push(`\t);`);
  tabOutput.push(`}`);
  tabOutput.push("");
  return tabOutput;
}

function generateRows(questionText, propNames, lines, lineIndex) {
  const rowsOutput = [];

  rowsOutput.push(`export const questionText${questIndex} = [`);
  questionText.forEach((s, j) => {
    s = s.split("\t")[0];
    s = s.replace('"', '\\"');
    rowsOutput.push(`\t"${s}"${j < questionText.length - 1 ? "," : ""}`);
  });
  rowsOutput.push(`];`);
  rowsOutput.push("");

  rowsOutput.push(`export interface ExampleRow${questIndex} {`);
  rowsOutput.push(`\tid: string,`);
  propNames.forEach((p) => {
    rowsOutput.push(`\t${p}: string,`);
  });
  rowsOutput.push(`}`);
  rowsOutput.push("");

  rowsOutput.push(`export const exampleRows${questIndex} = [`);
  let rowId = 1;
  while (lineIndex < lines.length) {
    const rowText = lines[lineIndex].trim();
    if (rowText.length === 0) {
      lineIndex++;
      continue;
    }
    rowsOutput.push(`\t{`);
    let row = rowText.trim().split("\t");
    row = row.map((v) => `"${v.trim()}"`);
    rowsOutput.push(`\t\tid: "${rowId}",`);
    rowId++;
    for (let i = 0; i < row.length; i++) {
      rowsOutput.push(`\t\t${propNames[i]}: ${row[i]},`);
    }
    rowsOutput.push(`\t},`);
    lineIndex++;
  }
  rowsOutput.push(`];`);
  return rowsOutput;
}

function readInputFile(fileName) {
  const data = fs.readFileSync(fileName);
  const lines = data.toString().split("\n");

  const questionText = [];
  let lineIndex = 0;
  while (lines[lineIndex] !== "") {
    questionText.push(lines[lineIndex]);
    lineIndex++;
  }
  while (lines[lineIndex] === "") {
    lineIndex++;
  }
  const rxValidPropName = /^\w[\w\d]*$/;

  const columnNames = lines[lineIndex].split("\t").map((n) => n.trim());
  let propNames = columnNames;
  lineIndex++;
  propNames = propNames.map((s) => {
    const words = s.split(/\s/).map((x) => x.trim());
    const b = [words[0].toLowerCase()];
    for (let j = 1; j < words.length; ++j) {
      let w = words[j];
      w = [w[0].toUpperCase(), w.slice(1).toLowerCase()].join("");
      b.push(w);
    }
    let propName = b.join("").replace(".", "");
    if (!rxValidPropName.test(propName)) {
      propName = `"${propName}"`;
    }
    return propName;
  });

  return { questionText, columnNames, propNames, lines, lineIndex };
}

function processFile(index, fileName, doRows, doTab) {
  const inputFileName = path.join(dataFolder, fileName);
  console.log(`Processing "${inputFileName}"`);
  const rowsFileName = path.join(destFolder, `rowData${index}.tsx`);
  const tabFileName = path.join(destFolder, `TableExample${index}.tsx`);

  const { questionText, columnNames, propNames, lines, lineIndex } =
    readInputFile(inputFileName);

  if (doRows) {
    const ts = generateRows(questionText, propNames, lines, lineIndex);
    fs.writeFileSync(rowsFileName, ts.join("\n"));
  }

  if (doTab) {
    const ts = generateTable(questIndex, columnNames, propNames);
    fs.writeFileSync(tabFileName, ts.join("\n"));
  }
}

const indexTs = [];
let questIndex = 1;

const fileNames = fs.readdirSync(dataFolder);
for (let i = 0; i < fileNames.length; ++i) {
  processFile(questIndex, fileNames[i], true, false);
  indexTs.push(`export * from "./TableExample${questIndex}";`);
  indexTs.push(`export * from "./rowData${questIndex}";`);
  questIndex++;
}

fs.writeFileSync(path.join(destFolder, "index.ts"), indexTs.join("\n"));

console.log("Done");
return 0;
