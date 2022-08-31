const express = require('express');
const app = express();

// Execute the webpackRunner.js script.
// It spawns a child process to run webpack with its --watch option
require('./webpackRunner');

app.use(express.static('public'));

const PORT = 1234; // Use any port you want
// NOTE: This port is internal to the container running the replit.
// Replit magic will make the replit accessible externally
// on port 443 at your replit's HTTPS URL.
// Consequences of this approach is that 1) a replit can have at most 
// one listening port, and 2) only HTTP protocol is supported, although
// WebWorkers, after an initial HTTP handshake, can be used to implement
// custom protocols beyond HTTP.

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Express server started on port ${PORT}`);
});