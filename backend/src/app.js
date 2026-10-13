const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (_request, response) => {
  response.json({ message: "Backend API is running" });
});

module.exports = app;
