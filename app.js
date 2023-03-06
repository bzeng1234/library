let myLibrary = [];

function Book(title, author, numOfPages) { 
    this.title = title,
    this.author = author,
    this.numOfPages = numOfPages
}

function addBookToLibrary(title, author, numOfPages) {
    myLibrary.push(Book(title, author, numOfPages));
}

let btn = document.querySelector(".new-book-btn");
btn.addEventListener('click', );
console.log(btn);
