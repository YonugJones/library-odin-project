const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pagesInput = document.getElementById('pages').value;
    let pages = parseInt(pagesInput);
    let read = document.getElementById('read').value;

    if (isNaN(pages) || pages <= 0) {
        alert('Please enter a valid number')
        return;
    }

    let newBookForm = document.getElementById('new-book-form');
    newBookForm.style.display = 'none';

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    updateDisplay();
};

function updateDisplay() {
    let bookShelf = document.getElementById('book-shelf');

    while(bookShelf.firstChild) {
        bookShelf.removeChild(bookShelf.firstChild);
    }

    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];

        let bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        let cardTitle = document.createElement('h2');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = `${book.title}`;

        let cardAuthor = document.createElement('p');
        cardAuthor.classList.add('card-author');
        cardAuthor.textContent = `${book.author}`;

        let cardPages = document.createElement('p');
        cardPages.classList.add('p');
        cardPages.textContent = `${book.pages} pages`;

        let cardRead = document.createElement('p');
        cardRead.classList.add('card-read');
        cardRead.textContent = `${book.read ? 'Completed' : 'Not yet completed'}`;

        cardRead.addEventListener('click', function() {
            book.read = !book.read;
            updateDisplay();
        });

        let removeBookBtn = document.createElement('button');
        removeBookBtn.id = 'remove-book-button';
        
        let trashIcon = document.createElement('img');
        trashIcon.classList.add('remove-book-btn');
        trashIcon.src = 'img/trash.png';
        trashIcon.alt = 'trash can image';

        let buttonText = document.createTextNode('Remove Book');

        removeBookBtn.appendChild(trashIcon);
        removeBookBtn.appendChild(buttonText);

        trashIcon.addEventListener('click', function() {
            const index = myLibrary.indexOf(book);
            bookShelf.removeChild(bookCard);
            myLibrary.splice(index, 1);
            updateDisplay();
        })

        bookCard.appendChild(cardTitle);
        bookCard.appendChild(cardAuthor);
        bookCard.appendChild(cardPages);
        bookCard.appendChild(cardRead);
        bookCard.appendChild(trashIcon);

        bookShelf.appendChild(bookCard);
    }
};

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