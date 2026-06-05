'use strict';

/**
 * server.js — Express.js application entry point for the April17Sec_1 tutorial.
 *
 * This minimal HTTP server adopts the Express.js web framework as its routing
 * and request/response layer (replacing the raw Node.js `http` module pattern).
 * It exposes two GET endpoints that return plaintext-style greetings:
 *
 *   GET /              -> "Hello world"   (the original, preserved endpoint)
 *   GET /good-evening  -> "Good evening"  (the new, additive endpoint)
 *
 * Any other route/method falls through to Express's built-in 404 handler
 * (e.g. "Cannot GET /unknown"), so no manual 404 branch is required.
 *
 * Module system: CommonJS (`require`) — package.json does not set
 * `"type": "module"`. Runtime: Node.js >= 18 (Express 5 floor).
 *
 * Run:  npm start            (defined in package.json as `node server.js`)
 *   or: node server.js
 */

// Import the Express framework (declared in package.json as `express@^5.2.1`).
const express = require('express');

// Create the Express application instance — the single front controller that
// receives every incoming HTTP request and dispatches it to a matching route.
const app = express();

// Listening port. `process.env.PORT` keeps the server twelve-factor friendly
// for different environments; it defaults to 3000, the tutorial convention.
const PORT = process.env.PORT || 3000;

/**
 * Route 1 — GET /
 *
 * Preserves the original tutorial behavior: respond with the exact body
 * "Hello world". `res.send` terminates the request/response cycle and sets
 * HTTP 200 plus Content-Length automatically.
 */
app.get('/', (req, res) => {
  res.send('Hello world');
});

/**
 * Route 2 — GET /good-evening
 *
 * The new, additive endpoint: respond with the exact body "Good evening".
 * Declared with the same declarative `app.get` pattern as the root route.
 */
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// Start the HTTP server and log a startup message once it is listening.
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
