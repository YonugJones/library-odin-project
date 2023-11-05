const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {

}

let newBookBtn = document.getElementById('new-book-btn');
newBookBtn.addEventListener('click', function() {
    let newBookForm = document.getElementById('new-book-form');
    newBookForm.style.display = 'flex';
});

document.getElementById('submit-btn').addEventListener('click', function(e) {
    e.preventDefault();
    addBookToLibrary();
});

document.getElementById('cancel-btn').addEventListener('click', function(e) {
    e.preventDefault();
    let newBookForm = document.getElementById('new-book-form');
    newBookForm.style.display = 'none';
});