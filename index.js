const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();

// midle wares
app.use(cors());
app.use(express.json());

async function run() {}
run().catch(console.log(dir));

app.get("/", (req, res) => {
  res.send("bike zone server is ready");
});
app.listen(port, () => {
  console.log(`bike zone server running at port ${port}`);
});
