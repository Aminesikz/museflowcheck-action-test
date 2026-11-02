const express = require("express");
const db = require("../db");

const router = express.Router();

// Product search API.
router.get("/search", async (req, res) => {
  const pattern = `%${req.query.q ?? ""}%`;
  const { rows } = await db.query("SELECT id, name, price FROM products WHERE name ILIKE $1", [pattern]);
  res.json({ query: req.query.q, results: rows });
});

module.exports = router;
