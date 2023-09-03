const express = require('express'); 
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

let notes = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'landing.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'notes.html'));
});

app.post('/add', (req, res) => {
    const { title, note } = req.body;
    notes.push({ title, note });

    console.log(req.body);
    res.redirect('/');
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})