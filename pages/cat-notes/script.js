let noteList = document.querySelector('.cat-notes__notes-hld');

function formResults(form) {
    let catNoteTitle = form.catNoteTitle.value;
    let catNoteMessage = form.catNoteMessage.value;

    if (catNoteTitle === '' || catNoteMessage === '') {
        alert('Enter the title and/or content of the note!');
        return;
    }

    const noteDiv = document.createElement('div');
    noteDiv.classList.add('cat-notes__notes--note');
    noteDiv.innerHTML = `
        <span class="note-title" contenteditable="true">${catNoteTitle}</span>
        <span class="note-message" contenteditable="true">${catNoteMessage}</span>
        <button class="note-delete-button" onclick="deleteNote(this)">X</button>
    `; 

    noteList.appendChild(noteDiv);
}

function deleteNote(button) {
    const noteDiv = button.parentElement;
    noteList.removeChild(noteDiv);
}

textarea = document.querySelector("textarea");
textarea.addEventListener('input', autoResize, false);

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}
