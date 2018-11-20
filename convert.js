let csvToJson = require('convert-csv-to-json');

let input = "light-loan.csv";
let output = "light-loan.json";


csvToJson.fieldDelimiter(',').formatValueByType().generateJsonFileFromCsv(input,output);
