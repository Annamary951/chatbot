const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, '..', 'build')));

// Define a route for POST requests to /reproduce
app.post('/reproduce', (req, res) => {
  const { input } = req.body;
  res.json({ response: `You entered: ${input}` });
});

// Handle any other requests by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
