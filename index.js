require("dotenv").config();
const fs = require("fs");
const PDFParser = require("pdf2json");

let pdfParser = new PDFParser();

pdfParser.loadPDF(process.env.LOCAL_PDF_FILE);

pdfParser.on("pdfParser_dataError", err => console.error(err));
pdfParser.on("pdfParser_dataReady", function(data) {
  fs.writeFile("./pdf2json.json", JSON.stringify(data), err => {
    if (err) console.log("File was not saved");
  });
});
