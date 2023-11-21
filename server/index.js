// const path = require("path");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { pool } = require("../dbconfig");
const app = express();

const port = process.env.PORT || 8000;

// app.use(express.static(path.resolve(__dirname, "../client/build")));

// CORS configuration
const corsOptions = {
  origin: `${process.env.FRONTEND_ORIGIN}`, // or your specific origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Enable preflight requests for all routes
app.options("*", cors(corsOptions));

// Enable CORS for all responses
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/test", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/rooms", (req, res) => {
  if (req.query.type && req.query.search && req.query.capacity) {
    console.log("111");
    pool.query(
      "SELECT * FROM rooms WHERE type = $1 AND name = $2 AND capacity = $3",
      [req.query.type, req.query.search, req.query.capacity],
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
  } else if (req.query.type && req.query.search && !req.query.capacity) {
    console.log("110");
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
  } else if (req.query.type && !req.query.search && req.query.capacity) {
    console.log("101");
    pool.query(
      "SELECT * FROM rooms WHERE type = $1 AND capacity = $2",
      [req.query.type, req.query.capacity],
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
  } else if (req.query.type && !req.query.search && !req.query.capacity) {
    console.log("100");
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
  } else if (!req.query.type && req.query.search && req.query.capacity) {
    console.log("011");
    pool.query(
      "SELECT * FROM rooms WHERE name = $1 AND capacity = $2",
      [req.query.search, req.query.capacity],
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
  } else if (!req.query.type && req.query.search && !req.query.capacity) {
    console.log("010");
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
  } else if (!req.query.type && !req.query.search && req.query.capacity) {
    console.log("001");
    pool.query(
      "SELECT * FROM rooms WHERE capacity = $1",
      [req.query.capacity],
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
    console.log("000");
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

app.post("/api/rooms/:id/book", (req, res) => {
  const id = req.params.id;
  let { day } = req.body;

  if (!day) {
    res.status(400).send("Error");
  } else {
    pool.query(
      `SELECT * FROM booked
       WHERE room_id = $1 AND day = $2`,
      [id, day],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        if (result.rows.length === 0) {
          pool.query(
            `INSERT INTO booked (day, room_id) 
             VALUES ($1, $2)
             RETURNING id`,
            [day, id],
            (err, r) => {
              if (err) {
                console.log(err);
              }
              res.status(200).send({
                message: "xona muvaffaqiyatli band qilindi",
              });
            }
          );
        } else {
          res.status(410).send({
            error: "uzr, siz tanlagan vaqtda xona band",
          });
        }
      }
    );
  }
});

app.post("/api/rooms/:id/booktest", (req, res) => {
  const id = req.params.id;
  let { resident, day, start, end } = req.body;
  if (!resident || !day || !start || !end) {
    res.status(400).send("Error");
  } else {
    pool.query(
      `SELECT * FROM booked
       WHERE room_id = $1`,
      [id],
      async (err, result) => {
        if (err) {
          console.log(err);
        }

        if (result.rows.length > 0) {
          let list = result.rows.filter((el) => {
            if (
              (day === el.day && start == el.start_time) ||
              end == el.end_time
            ) {
              return el;
            }
          });
          console.log(list);
          if (list.length === 0) {
            pool.query(
              `INSERT INTO booked (day, start_time, end_time, room_id) 
               VALUES ($1, $2, $3, $4)
               RETURNING id`,
              [day, start, end, Number(id)],
              (err, r) => {
                if (err) {
                  console.log(err);
                }
                res.status(200).send("Ok");
              }
            );
          } else {
            res.status(410).send({
              error: "uzr, siz tanlagan vaqtda xona band",
            });
          }
        } else {
        }
      }
    );
  }
});

app.get("/api/rooms/:id/booked", (req, res) => {
  const id = req.params.id;
  pool.query(
    `SELECT *
     FROM booked
     WHERE room_id = $1;
    `,
    [id],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.rows.length > 0) {
        console.log(result.rows);
        res.status(200).send(result.rows);
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
