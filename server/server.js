import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "sva_xxxx",
});

db.connect(err => {
  if (err) console.error("❌ Ошибка подключения:", err);
  else console.log("✅ Подключено к MySQL (perfume_shop)");
});

app.get("/perfumes", (req, res) => {
  db.query("SELECT * FROM perfumes", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});



app.listen(5000, () => console.log("🚀 Сервер запущен на http://localhost:5000"));
