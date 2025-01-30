const { pool } = require('./event');
const redisClient = require('../config/redis');

const lockSeat = async (eventId, seatNumber, userId) => {
  const lockKey = `event:${eventId}:seat:${seatNumber}`;
  const lockValue = userId;
  const lockDuration = 300; 

  const result = await redisClient.set(lockKey, lockValue, 'EX', lockDuration, 'NX');
  return result === 'OK';
};

const { processPayment } = require('../services/payment');

const bookSeat = async (eventId, seatNumber, userId) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const seatCheck = await client.query(
      'SELECT available_seats FROM events WHERE id = $1',
      [eventId]
    );
    if (seatCheck.rows[0].available_seats <= 0) {
      throw new Error('No seats available');
    }

    const paymentResult = await processPayment(userId, 1000); 
    if (!paymentResult.success) {
      throw new Error('Payment failed');
    }

    await client.query(
      'INSERT INTO tickets (event_id, seat_number, user_id, transaction_id) VALUES ($1, $2, $3, $4)',
      [eventId, seatNumber, userId, paymentResult.transactionId]
    );

    await client.query(
      'UPDATE events SET available_seats = available_seats - 1 WHERE id = $1',
      [eventId]
    );

    await client.query('COMMIT');
    return true;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
};

module.exports = { lockSeat, bookSeat };