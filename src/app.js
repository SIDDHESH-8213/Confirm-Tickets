const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const eventRoutes = require('./routes/event');
const ticketRoutes = require('./routes/ticket');
const { createUserTable } = require('./models/user');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

createUserTable();

app.use(cors());
app.use(express.json());

app.use('/api/events', eventRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
  res.send('Testing');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});