// Create web server application with Express.js
// To run: node comments.js

const express = require("express");
const app = express();

// Set up the port number
const port = 3000;

// Set up the route for the root
app.get("/", (req, res) => {
  res.send("Welcome to the comments web service");
});

// Set up the route for the comments
app.get("/comments", (req, res) => {
  res.send("Welcome to the comments web service");
});

// Set up the route for the comments with a parameter
app.get("/comments/:year/:month", (req, res) => {
  res.send(req.params);
});

// Set up the route for the comments with a query string
app.get("/comments/:year/:month", (req, res) => {
  res.send(req.query);
});

// Set up the route for the comments with a query string
app.get("/comments/:year/:month", (req, res) => {
  res.send(req.query);
});

// Set up the route for the comments with a query string
app.get("/comments/:year/:month", (req, res) => {
  res.send(req.query);
});

// Set up the route for the comments with a query string
app.get("/comments/:year/:month", (req, res) => {
  res.send(req.query);
});

// Set up the route for the comments with a query string
app.get("/comments/:year/:month", (req, res) => {
  res.send(req.query);
});

// Set up the route for the comments with a query string
app.get("/comments/:year/:month", (req, res) => {
  res.send(req.query);
});

// Set up the route for the comments with a query string
app.get("/comments/:year/:month", (req, res) => {
  res.send(req.query);
});

// Set up the route for the comments with a query string
app.get("/comments/:year/:month", (req, res) => {
  res.send(req.query);
});

// Listen on the port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
