let booksDiv = document.getElementById("books");
let btn = document.getElementById("addBook");
let btnSubmit = document.getElementById("submit");
let btnExit = document.getElementById("exit");
let container = document.getElementById("container");
let formInputs = document.querySelectorAll("form input");
let myLibrary = [{title: "Harry Potter", authro: "J. K. Rowlling", pages: 300, read: true}];

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

  myLibrary.forEach(i => {
    console.log(i);
    let bookDiv = document.createElement("div");
    bookDiv.innerHTML = i.title;
    booksDiv.append(bookDiv);
  })
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
  let props = [];

  formInputs.forEach(i => {
    props.push(i.value);
  })

  addBookToLibrary(...props);
  displayBooks();
  exitForm();

  e.preventDefault();
})

displayBooks();