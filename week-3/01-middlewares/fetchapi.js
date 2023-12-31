const express = require('express');
const cors = require('cors');
// stand for cross orgin resource sharing.

const jokes = {
    joke1: "Why don't scientists trust atoms? Because they make up everything!",
    joke2: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    joke3: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    joke4: "Parallel lines have so much in common. It's a shame they'll never meet.",
    joke5: "I only know 25 letters of the alphabet. I don't know y.",
}

// Create an Express app
const app = express();

// Enable CORS
app.use(cors());

// Handle GET requests
app.get('/', (req, res) => {
    res.send('This is a GET request');
});

// Handle GET request on /api/jokes
app.get('/api/jokes', (req, res) => {
    res.json(jokes);
});

// Handle POST requests
app.post('/', (req, res) => {
    res.send('This is a POST request');
});

// Handle other HTTP methods
app.all('/', (req, res) => {
    res.status(405).send('Method Not Allowed');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
