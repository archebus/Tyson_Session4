 
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
 
Task 05
With your WebAPI that you created two weeks ago, create a configuration file and load it.
This configuration file should will be a json object that will contain two fields.
port - The network port that the express application will listen on
logdirectory - the directory that it will place log files
In your express application, your program should create a log file in the format:
${logdirectory}/log_${date}.log
Once created, your program should be able to write to it.
Before calling listen, create a function that you can use with app.use that will get the ip
from the req and write it to a log file.
Hints:
Use fs/promises and use await on open and appendFile when writing to it.
Consider the open handles w, a, r.
 