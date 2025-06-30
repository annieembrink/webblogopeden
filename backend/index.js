// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('API is running 🎉');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
