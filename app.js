require('dotenv').config();
const express = require('express');

const app = express();

// Middleware
app.use(express.json());

// Environment detection
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';

// Simple route
app.get('/', (req, res) => {
  res.send(`Server is running in ${ENV} mode on port ${PORT}`);
});

// Example API route
app.get('/api/health', (req, res) => {
  console.logs("/api/health....");
  res.json({ status: 'OK', environment: ENV });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${ENV} mode`);
});
