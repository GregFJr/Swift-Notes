const express = require('express'); 
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'landing.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'notes.html'));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})