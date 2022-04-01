const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db/db-connection.js");

const app = express();

const PORT = 4000;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get("/", (req, res) => {
  res.json({ message: "Hello from My ExpressJS" });
});

// create the get request
app.get("/api/scores", cors(), async (req, res) => {
  // const mockPlayers = [
  //   { id: 1, nickname: "Eileen", highscore: "3/6" },
  //   { id: 2, nickname: "Tzima", highscore: "6/6" },
  //   { id: 3, nickname: "Coleen", highscore: "1/6" },
  // ];
  // console.log(mockPlayers);
  // res.send(mockPlayers);
  try {
    const { rows: players } = await db.query("SELECT * FROM players");
    res.send(players);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// create the POST request
// app.post("/api/students", cors(), async (req, res) => {
//   const newUser = {
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//   };
//   console.log([newUser.firstname, newUser.lastname]);
//   const result = await db.query(
//     "INSERT INTO students(firstname, lastname) VALUES($1, $2) RETURNING *",
//     [newUser.firstname, newUser.lastname]
//   );
//   console.log(result.rows[0]);
//   res.json(result.rows[0]);
// });

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
