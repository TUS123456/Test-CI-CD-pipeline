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
  console.log("/api/health....");
  res.json({ status: 'OK', environment: ENV });
});


app.get("/api", (req, res) => {
  console.log("Req from Client", req);
  res.status(200).json({ status: "OK", environment: ENV });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT} in ${ENV} mode`);
});