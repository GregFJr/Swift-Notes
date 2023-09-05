document.addEventListener('DOMContentLoaded', () => {

    const save = document.getElementById('save-btn');
    const form = document.getElementById('noteForm');
    

        save.addEventListener('click', () => {
            form.submit();
        });

});