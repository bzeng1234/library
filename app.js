let myLibrary = [];

function Book(title, author, numOfPages) { 
    this.title = title,
    this.author = author,
    this.numOfPages = numOfPages
    this.read = false
}

function addBookToLibrary(title, author, numOfPages) {
    let newBook = new Book(title, author, numOfPages)
    myLibrary.push(newBook);
}

function updateTable() {
    let table = document.querySelector(".table-body");

    while(table.firstChild) {
        table.removeChild(table.firstChild);
    }

    updateLibraryDisplay();
}

function updateLibraryDisplay() {
    let table = document.querySelector(".table-body");

    for(let i = 0; i < myLibrary.length; i++ ) {
        let newTableRow = document.createElement("tr");
        newTableRow.classList.add = "book";
        newTableRow.id = i;

        let currTitle = document.createElement("td");
        currTitle.textContent = myLibrary[i].title;
        newTableRow.appendChild(currTitle);

        let currAuthor = document.createElement("td");
        currAuthor.textContent = myLibrary[i].author;
        newTableRow.appendChild(currAuthor);

        let currPage = document.createElement("td");
        currPage.textContent = myLibrary[i].numOfPages;
        newTableRow.appendChild(currPage);

        let currReadStatus = document.createElement("td");
        currReadStatus.textContent = myLibrary[i].read;
        newTableRow.appendChild(currReadStatus);

        let btnTd = document.createElement("td");
        let readBtn = document.createElement("button");
        readBtn.classList.add("read-btn");
        readBtn.type = "button";
        readBtn.textContent = "Read";
        readBtn.addEventListener("click", (e) => {
            let index = e.target.parentElement.parentElement.getAttribute("id");
            let readStatus = e.target.parentElement.previousSibling.textContent;
            e.target.parentElement.previousSibling.textContent = (readStatus === "true") ? false : true;
            myLibrary[index].read = e.target.parentElement.previousSibling.textContent;
        });
        btnTd.appendChild(readBtn);
        newTableRow.appendChild(btnTd);

        let btnTd2 = document.createElement("td");
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.type = "button";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", (e) => {
            let index = e.target.parentElement.parentElement.getAttribute("id");
            myLibrary.splice(index,1);
            updateTable();
    });
    btnTd2.appendChild(deleteBtn);
    newTableRow.appendChild(btnTd2);

    table.appendChild(newTableRow);
    }

}

let newBookBtn = document.querySelector(".new-book-btn");

newBookBtn.addEventListener("click", (e) => {

    let popUpForm = document.querySelector(".form-container");
    popUpForm.style.display = "flex";
});

let loginForm = document.querySelector(".book-form");
    
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let bookTitle = document.getElementById("title");
  let bookAuthor = document.getElementById("author");
  let numOfPages = document.getElementById("pages");

  addBookToLibrary(bookTitle.value, bookAuthor.value, numOfPages.value);

  bookTitle.value = "";
  bookAuthor.value = "";
  numOfPages.value = "";

  updateTable();
});

let closeFormBtn = document.querySelector(".close-form-btn");

closeFormBtn.addEventListener("click", (e) => {

    let popUpForm = document.querySelector(".form-container");
    popUpForm.style.display = "none";
});