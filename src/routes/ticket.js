const express = require('express');
const { lockSeat, bookSeat } = require('../models/ticket');
const router = express.Router();

// Lock a seat
router.post('/lock', async (req, res) => {
  const { eventId, seatNumber, userId } = req.body;
  try {
    const locked = await lockSeat(eventId, seatNumber, userId);
    if (locked) {
      res.json({ message: 'Seat locked successfully' });
    } else {
      res.status(400).json({ error: 'Seat already locked' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Book a seat
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