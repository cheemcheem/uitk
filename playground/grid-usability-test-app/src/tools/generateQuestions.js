const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "../data");
const destFolder = path.join(__dirname, "../questions");

if (!fs.existsSync(dataFolder)) {
  console.log(`Data folder not found: "${dataFolder}"`);
  return 1;
}

async function processFile(fileName) {
  const data = fs.readFileSync(fileName);
  const lines = data.toString().split("\n");
  const questionText = lines[0];
  const rxQuote = /(?<=^|\t)([^\t\n]*)(?=$|\t)/g;
  const rxTab = /\s+/g;
  const rxTrailComma = /,(?=$)/g;

  if (lines.length < 3) {
    return;
  }

  const output = [];

  let propNames = lines[2].split("\t");
  propNames = propNames.map((s) => {
    const words = s
      .trim()
      .split(/\s/)
      .map((x) => x.trim());
    const b = [words[0].toLowerCase()];
    for (let i = 1; i < words.length; ++i) {
      let w = words[i];
      w = [w[0].toUpperCase(), w.slice(1).toLowerCase()].join("");
      b.push(w);
    }
    return b.join("");
  });
  console.log(propNames);

  for (let i = 3; i < lines.length; ++i) {
    const rowText = lines[i].trim();
    if (rowText.length === 0) {
      continue;
    }
    let row = rowText.replaceAll(rxQuote, '"$1",');
    row = row.replaceAll(rxTab, " ");
    row = row.replaceAll(rxTrailComma, "");
    row = ["[", row, "]"].join("");
    console.log(`${row}`);
  }
  // txt = fs.readFileSync(fileName);
  // console.log(`${txt}`);
}

const fileNames = fs.readdirSync(dataFolder);
for (let i = 0; i < fileNames.length; ++i) {
  const fileName = path.join(dataFolder, fileNames[i]);
  console.log(`Processing "${fileName}"`);
  processFile(fileName);
}

console.log("Done");
return 0;
