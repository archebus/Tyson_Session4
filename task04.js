/* 
Task 04
You will be writing a program that will read a csv file.
This csv file stands for command-separated values (You can think of it like an excel spreadsheet).
Your task is to accept two command line arguments:
csvFile - Path to the csv file
column - Column that will be outputted. Specifically, we want to only output values all on one column.
Example CSV
Jeff,1981,Admin
Bob,1956,Mechanic
Alice,1983,Developer
Example of running the program
node cutcsv.js ppl.csv 1
1981
1956
1983
*/

const fs = require('fs');
const path = require('path');

// Store args
const [,, csvFile, column] = process.argv;

// Convert column arg to int.
const columnIndex = parseInt(column) - 1;

// Path to CSV
const filePath = path.resolve(csvFile);

// Check file exists & column is valid.
if (!csvFile || isNaN(columnIndex)) {
    console.error('Usage: node task04.js <csvFile> <column>');
    process.exit(1);
}

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading the file: ${err.message}`);
        process.exit(1);
    }

    const lines = data.split('\n');

    lines.forEach(line => {
        const values = line.split(',');

        if (values[columnIndex] !== undefined) {
            console.log(values[columnIndex].trim());
        }
    });
});
