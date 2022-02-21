const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();

// midle wares
app.use(cors());
app.use(express.json());

// mongo uri and client
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mas8d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    // connect with mongodb
    await client.connect();
    const database = client.db("bike-zone");
    const bikeCollection = database.collection("bikes");

    app.get("/bikes", async (req, res) => {
      const cursor = bikeCollection.find({});
      const bikes = await cursor.toArray();
      res.json(bikes);
    });
  } finally {
    // close connection
    // client.close();
  }
}
run().catch(console.dir());

app.get("/", (req, res) => {
  res.send("bike zone server is running");
  console.log("bike zone server is running");
});
app.listen(port, () => {
  console.log(`bike zone server running at port ${port}`);
});
