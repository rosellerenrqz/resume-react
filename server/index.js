import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "panini6143",
  database: "test1",
});

app.get("/", (req, res) => {
  res.json("Welcome to Portfolio server");
});

app.get("/client", (req, res) => {
  const q = "SELECT * FROM client";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/client", (req, res) => {
  const q = "INSERT INTO client (`name`, `email`, `message`) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.message];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Message has been sent");
  });
});

app.get("/client", (req, res) => {
  const q = "SELECT * FROM client";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend");
});
