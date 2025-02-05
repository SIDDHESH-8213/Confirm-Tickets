const express = require('express');
const { lockSeat, bookSeat } = require('../models/ticket');
const router = express.Router();
const redisClient = require('../config/redis');

router.post('/lock', async (req, res) => {
  const { eventId, seatNumber, userId } = req.body;
  try {
    if (!redisClient.isReady) await redisClient.connect();

    
    const lockKey = `event:${eventId}:seat:${seatNumber}`;
    const locked = await redisClient.set(lockKey, userId, { EX: 300, NX: true });

    if (locked === 'OK') {
      res.json({ message: "Seat locked! Proceed to payment." });
    } else {
      res.status(400).json({ error: "Seat already locked!" });
    }
  } catch (err) {
    console.error("Seat locking error:", err);
    res.status(500).json({ error: "Failed to lock seat." });
  }
});

router.post('/book', async (req, res) => {
  const { eventId, seatNumber, userId } = req.body;
  try {
    const booked = await bookSeat(eventId, seatNumber, userId);
    if (booked) {
      res.json({ message: 'Seat booked successfully' });
    } else {
      res.status(400).json({ error: 'Booking failed' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;