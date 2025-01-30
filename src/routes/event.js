const express = require('express');
const { pool } = require('../models/event');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { name, date, venue, total_seats } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO events (name, date, venue, total_seats, available_seats) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, date, venue, total_seats, total_seats]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;