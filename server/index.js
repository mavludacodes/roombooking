const path = require("path");
const express = require("express");
require("dotenv").config();
const { pool } = require("../dbconfig");
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader(
    "Access-Control-Allow-Origin",
    `${process.env.FRONTEND_ORIGIN}`
  );

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, auth-token"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/rooms", (req, res) => {
  if (req.query.type && req.query.search) {
    pool.query(
      "SELECT * FROM rooms WHERE type = $1 AND name = $2",
      [req.query.type, req.query.search],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send({
          count: result.rows.length,
          results: result.rows,
        });
      }
    );
  } else if (req.query.type) {
    pool.query(
      "SELECT * FROM rooms WHERE type = $1",
      [req.query.type],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send({
          count: result.rows.length,
          results: result.rows,
        });
      }
    );
  } else if (req.query.search) {
    pool.query(
      "SELECT * FROM rooms WHERE name = $1",
      [req.query.search],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send({
          count: result.rows.length,
          results: result.rows,
        });
      }
    );
  } else {
    pool.query("SELECT * FROM rooms", (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send({
        count: result.rows.length,
        results: result.rows,
      });
    });
  }
});

app.get("/api/rooms/:id", (req, res) => {
  const id = req.params.id;
  pool.query(
    `SELECT *
     FROM rooms
     WHERE id = $1;
    `,
    [id],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.rows.length > 0) {
        console.log(result.rows);
        res.status(200).send(result.rows[0]);
      } else {
        res.status(404).send({ error: "topilmadi" });
      }
    }
  );
});

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
