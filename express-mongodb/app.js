const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 3000;

// create the connection to database
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

client.connect().then(() => {
  console.log("connect to mongodb");
});

const db = client.db("skilvul"); // databse yg dituju
const User = db.collection("user"); // collection yg dituju

app.get("/", (req, res) => {
  res.json("form express");
});

app.get("/user", async (req, res) => {
  const users = await User.find().toArray()

  console.log(users);
  res.json({
    message: "success get data user",
    data: users,
  });
});

app.get("/user/:id", async (req, res) => {
  const { id } = req.params
  const user = await User.findOne({ nama: id})

  res.json({
    message: "success get data user",
    data: user,
  });
});

app.listen(PORT, () => {
  console.log("server running...");
});
