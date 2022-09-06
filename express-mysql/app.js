const express = require('express');
const mysql = require('mysql2');

const app = express()
const PORT = process.env.PORT || 3000

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "root",
  database: 'skilvul'
});

app.get("/", (req, res) => {
  res.json("form express")
})

app.get("/user", (req, res) => {
  connection.query(
    'SELECT * FROM user',
    function(err, results, fields) {
      // console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available
      res.json({
        message: "success get data user",
        data: results
      })
    }
  );
})

app.get("/user/:id", (req, res) => {
  const { id } = req.params
  connection.query(
    `SELECT * FROM user where id = ${id}`,
    function(err, results, fields) {
      // console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available
      res.json({
        message: "success get data user",
        data: results
      })
    }
  );
})

app.listen(PORT, () => {
  console.log("server running...");
})










