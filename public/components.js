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



displaySaved();
    