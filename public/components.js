document.addEventListener('DOMContentLoaded', () => {

    const save = document.getElementById('save-icon');
    const form = document.getElementById('noteForm');
    

        save.addEventListener('click', () => {
            form.submit();
        });

});

// Fucntion to display the saved button when the title input has a value

const displaySaved = () => {
    const title = document.getElementById('titleInput');
    const save = document.getElementById('save-icon');

    if (title.value) {
        save.style.display = 'block';
    } else {
        save.style.display = 'none';    
    };
}


document.getElementById('titleInput').addEventListener('keyup', displaySaved);


// Get all the notes from the left-hand column
const notesElements = document.querySelectorAll('.note-storage .note');

// Add event listeners to each note
notesElements.forEach((noteElement) => {
    noteElement.addEventListener('click', () => {
        // Fetch the JSON data from the data attribute of the clicked note
        const noteData = JSON.parse(noteElement.getAttribute('data-note-json'));

        // Populate the input and textarea fields on the right side
        document.getElementById('titleInput').value = noteData.title;
        document.getElementById('noteInput').value = noteData.note;
    });
});





displaySaved();
    