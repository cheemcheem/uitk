const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "../data");
const destFolder = path.join(__dirname, "../questions");

if (!fs.existsSync(dataFolder)) {
  console.log(`Data folder not found: "${dataFolder}"`);
  return 1;
}

let questIndex = 1;
function processFile(fileName) {
  const data = fs.readFileSync(fileName);
  const lines = data.toString().split("\n");
  const output = [];

  const questionText = [];

  let lineIndex = 0;
  while (lines[lineIndex] !== "") {
    questionText.push(lines[lineIndex]);
    lineIndex++;
  }
  output.push(`export const questionText${questIndex} = [`);
  questionText.forEach((s, j) => {
    s = s.split("\t")[0];
    s = s.replace('"', '\\"');
    output.push(`\t"${s}"${j < questionText.length - 1 ? "," : ""}`);
  });
  output.push(`];`);
  output.push("");

  while (lines[lineIndex] === "") {
    lineIndex++;
  }

  const rxQuote = /(?<=^|\t)([^\t\n]*)(?=$|\t)/g;
  const rxTab = /\s+/g;
  const rxTrailComma = /,(?=$)/g;
  const rxValidPropName = /^\w[\w\d]*$/;

  let propNames = lines[lineIndex].split("\t");
  lineIndex++;
  propNames = propNames.map((s) => {
    const words = s
      .trim()
      .split(/\s/)
      .map((x) => x.trim());
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

  output.push(`export interface ExampleRow${questIndex} {`);
  output.push(`\tid: string,`);
  propNames.forEach((p) => {
    output.push(`\t${p}: string,`);
  });
  output.push(`}`);
  output.push("");

  output.push(`export const exampleRows${questIndex} = [`);
  let rowId = 1;
  while (lineIndex < lines.length) {
    const rowText = lines[lineIndex].trim();
    if (rowText.length === 0) {
      lineIndex++;
      continue;
    }
    output.push(`\t{`);
    let row = rowText.trim().split("\t");
    row = row.map((v) => `"${v.trim()}"`);
    output.push(`\t\tid: "${rowId}",`);
    rowId++;
    for (let i = 0; i < row.length; i++) {
      output.push(`\t\t${propNames[i]}: ${row[i]},`);
    }
    output.push(`\t},`);
    lineIndex++;
  }
  output.push(`];`);
  questIndex++;
  return output;
}

const indexTs = [];

const fileNames = fs.readdirSync(dataFolder);
for (let i = 0; i < fileNames.length; ++i) {
  const fileName = path.join(dataFolder, fileNames[i]);
  console.log(`Processing "${fileName}"`);
  const ts = processFile(fileName);
  const tsFileName = path.join(
    destFolder,
    fileNames[i].replace(/\.txt$/g, ".ts")
  );
  fs.writeFileSync(tsFileName, ts.join("\n"));
  indexTs.push(`export * from "./${fileNames[i].replace(/\.txt$/g, "")}";`);
}

fs.writeFileSync(path.join(destFolder, "index.ts"), indexTs.join("\n"));

console.log("Done");
return 0;
