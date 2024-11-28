const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const { readdirSync } = require('fs');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000; // Use 5000 as default if PORT is not set

// Middleware
app.use(express.json());
app.use(cors());

// Routes
// Dynamically load all routes from the routes folder
readdirSync('./routes').map((route) => {
  app.use('/api/v1', require('./routes/' + route));
});

// Server function
const server = () => {
  db(); // Initialize database connection
  app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
  });
};

// Start the server
server();
