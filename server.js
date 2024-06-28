const express = require('express');
const app = express();
const port = 3000;

let seats = Array(30).fill(false); // Mock data for 30 seats, initially all available (false)

app.use(express.json());
app.use(express.static('public'));

// Endpoint to get seat status
app.get('/seats', (req, res) => {
    res.json(seats);
});

// Endpoint to update seat status
app.post('/seats', (req, res) => {
    const { index, status } = req.body;
    if (index >= 0 && index < seats.length) {
        seats[index] = status;
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
