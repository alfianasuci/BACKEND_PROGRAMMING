// import express
const express = require("express");
const router = require("./routes/api.js");

// membuat object express
const app = express();

// Menggunakan middleware
app.use(express.json());

// Menggunakan routing (router)
app.use(router);

// mendefinisikan port
app.listen(3000);