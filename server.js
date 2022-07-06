const express = require("express")
//calls in express

const app = express()
//calls an instance of express

app.use(express.json());
//tells your app to use .json

app.use(express.static(`${__dirname}/public/`));
//tells the backend to serve the UI

module.exports = app;