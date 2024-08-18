/* 
Task 03
Write a program that will use a combination of command line arguments and reading files. Your task is to
create a program that will allow the user to input two command line arguments:
fileToSearch - this will be a string that will match to a file
searchString - this is a string that will be searched in the file
You will need to open the file for reading and search it line by line. For every line, check to see
if it matches the search string.
Create test cases for this task using xargs and .out files to quickly test.
*/

const fs = require('fs');
const readline = require('readline');

// Store command line args.
const fileToSearch = process.argv[2];
const searchString = process.argv[3];



const searchInFile = (filePath, searchStr) => {
    const rl = readline.createInterface({
        input: fs.createReadStream(filePath),
        output: process.stdout,
        terminal: false
    });

    rl.on('line', (line) => {
        if (line.includes(searchStr)) {
            console.log(line);
        }
    });

    rl.on('close', () => {
        console.log('Search completed.');
    });
};


if (!fileToSearch || !searchString) {
    console.error("Please provide a file to search and a search string as arguments.");
    process.exit(1);
}

if (!fs.existsSync(fileToSearch)) {
    console.error(`File not found: ${fileToSearch}`);
    process.exit(1);
}

searchInFile(fileToSearch, searchString);