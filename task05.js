/*
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
*/

// -----------> THIS IS THE SERVER CODE COPY PASTED FOR PROOF OF TASK 5 <----------------- //
// To actually run this you will need to get the latest version of Tyson session 3.


// Dependencies
const express = require('express');
const cors = require('cors');
const { sequelize, Books, Reviews } = require('./models');
const path = require('path');
const fs = require('fs/promises');
const { format } = require('date-fns');
const config = require('./config.json');

const bookRoutes = require('./routes/books');
const reviewRoutes = require('./routes/reviews');

// Express App
const app = express();
app.use(express.json());
app.use(cors());

// Static HTML from public
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to log IP addresses
app.use(async (req, res, next) => {
  const logDirectory = config.logdirectory;
  const date = format(new Date(), 'yyyy-MM-dd');
  const logFile = path.join(logDirectory, `log_${date}.log`);
  
  try {
    await fs.mkdir(logDirectory, { recursive: true }); // Ensure log directory exists
    const logEntry = `${new Date().toISOString()} - IP: ${req.ip}\n`;
    await fs.appendFile(logFile, logEntry);
  } catch (error) {
    console.error('Error writing to log file:', error);
  }
  
  next();
});

// Define Routes
app.use('/books', bookRoutes);
app.use('/reviews', reviewRoutes);

// Start the Server
app.listen(config.port, async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
    
    // Sync database models
    await sequelize.sync({ alter: true });
    console.log('Database synced!');
    console.log(`Server up on http://localhost:${config.port}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});