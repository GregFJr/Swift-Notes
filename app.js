const express = require('express'); 
const fs = require('fs');
const app = express();
const path = require('path');
const port = process.env.PORT||3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

let notes = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'landing.html'));
});

app.get('/notes', (req, res) => {
    res.render('notes', { notes });
});


app.post('/add', (req, res) => {
    const { title, note } = req.body;
    notes.push({ title, note });


  fs.writeFile('db.json', JSON.stringify(notes) + '\n', (err) => {
    if (err) throw err;
        console.log('The file has been saved!');
});
    console.log(req.body);
    res.redirect('/notes');
});


app.get('/delete/:noteId', (req, res) => {
    const { noteId } = req.params;
    if (notes[noteId]) {
        // Remove the note from the notes array
        notes.splice(noteId, 1);
    
        fs.writeFile('db.json', JSON.stringify(notes), (err) => {
          if (err) {
            console.error('Error writing to db.json:', err);
          } else {
            console.log('The file has been saved!');
          }
        });
      }

    res.redirect('/notes');
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})