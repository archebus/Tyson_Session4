/*
Task 01
Write a program that will allow the user to input their Full Name into command line arguments and output:
Example output format:
Happy Birthday! ${name}
Example when command line argument is “Jeff”
Happy Birthday! Jeff
Variation: As demonstrated in the lesson today, get the data from standard input instead of command line arguments.
*/

const fs = require('fs');

// Get 3rd argument
const input = process.argv[2];

// Console output.
const outputBirthdayMessage = (name) => {
    console.log(`Happy Birthday! ${name}`);
};


if (input) {
    // Check valid filepath.
    if (fs.existsSync(input)) {
        fs.readFile(input, 'utf8', (err, data) => {
            if (err) {
                console.error("Error reading the file:", err);
                return;
            }
            const name = data.trim();
            outputBirthdayMessage(name);
        });
    } else {
        // If not file, use argument directly.
        outputBirthdayMessage(input.trim());
    }
} else {
    console.error("Please provide a name or a file path as an argument.");
}