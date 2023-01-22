let booksDiv = document.getElementById("books");
let btn = document.getElementById("addBook");
let btnSubmit = document.getElementById("submit");
let btnExit = document.getElementById("exit");
let container = document.getElementById("container");
let form = document.getElementById("form");
let formInputs = document.querySelectorAll("form input");
let myLibrary = [{title: "Harry Potter", author: "J. K. Rowlling", pages: 300, read: true},{title: "Harry Potter", author: "J. K. Rowlling", pages: 300, read: true},{title: "Harry Potter", author: "J. K. Rowlling", pages: 300, read: true},{title: "Harry Potter", author: "J. K. Rowlling", pages: 300, read: true}];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = parseInt(pages);
  this.read = Boolean(read);
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayBooks() {
  booksDiv.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    currentBook = myLibrary[i];

    let bookDiv = document.createElement("div");

    bookDiv.classList.add("book");

    let title = document.createElement("h1");
    title.innerHTML = currentBook.title;

    let author = document.createElement("h3");
    author.innerHTML = currentBook.author;

    let pages = document.createElement("p");
    pages.innerHTML = `${currentBook.pages} pages`;
    
    let read = document.createElement("p");
    if(read) read.innerHTML = "The book is read.";
    else read.innerHTML = "The book is not read.";

    //TODO: create a x (delete) button and make it work (deletes the book)

    let exit = document.createElement("button");
    exit.innerHTML = "X";
    exit.classList.add("exit");

    exit.addEventListener('click', e => {
      index = e.composedPath()[1].id;

      newLibrary = [];

      for(let i = 0; i < myLibrary.length; i++) {
        if(i == index) continue;
        newLibrary.push(myLibrary[i]);
      }

      console.log(newLibrary);

      myLibrary = newLibrary;

      console.log(myLibrary);

      displayBooks();
    });

    bookDiv.append(title);
    bookDiv.append(author);
    bookDiv.append(pages);
    bookDiv.append(read);
    bookDiv.append(exit);

    bookDiv.id = `${i}`

    booksDiv.append(bookDiv);
  }
}

function exitForm() {
  container.classList.toggle("show");

  formInputs.forEach(i => {
    i.value = "";
    i.checked = false;
  })
}

btn.addEventListener('click', () => {
  container.classList.toggle("show");
})

btnExit.addEventListener('click', exitForm);

btnSubmit.addEventListener('click', e => {
  if(!form.checkValidity()) return;
  let props=[];

  formInputs.forEach(i => {
    props.push(i.value);
  })
  
  addBookToLibrary(...props);
  displayBooks();
  exitForm();

  e.preventDefault();
})

displayBooks();