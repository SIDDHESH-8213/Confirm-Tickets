const redis = require('redis');

const redisClient = redis.createClient({
  socket: {
    reconnectStrategy: retries => Math.min(retries * 50, 1000), 
  },
});

redisClient.on('connect', () => console.log('Redis: Connected'));
redisClient.on('error', err => console.error('Redis error:', err));

redisClient.connect();

module.exports = redisClient;