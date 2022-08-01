const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(express.json());

const users = [
  {
    username: "thoriq",
    password: "password123",
  },
  {
    username: "auzan",
    password: "password123",
  },
  {
    username: "dila",
    password: "password123",
  },
  {
    username: "dolton",
    password: "password123",
  },
];

const accessTokenSecret = "verysecretpassword456";

app.get("/", (req, res) => {
  res.send("success");
});

app.post("/login", (req, res) => {
  // untuk membaca input body yang dikirim user
  // console.log("req", req);
  const { username, password } = req.body;
  console.log("body", username, password);

  // mencocokan data dari body user kedalam array users
  const user = users.find((item) => {
    return item.username === username && item.password === password;
  });

  if (user) {
    const accessToken = jwt.sign(
      {
        username: user.username,
      },
      accessTokenSecret
    );

    res.json({
      accessToken,
    });
  } else {
    res.send("username atau password anda salah");
  }
});

app.listen(PORT, () => {
  console.log("running on port " + PORT);
});
