console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

class Book {
  constructor(Title, Author, Read, Id) {
    this.Title = Title;
    this.Author = Author;
    this.Read = Read;
    this.Id = Id;
  }
}

class Library {
  constructor(bookCount, Books) {
    this.bookCount = bookCount;
    this.Books = Books;
  }

  markRead(checkBox, Id) {
    for (let i = 0; i < this.Books.length; i++) {
      const element = this.Books[i];

      console.log(element);
      if (element != Id) {
        return false;
      } else{
        checkBox == true;
      };
    };

   
  }
  addBook(titleVal, authorVal, readVal, idVal){
Book(titleVal, authorVal, readVal, idVal)
  }
}
let lib = new Library(2, [new Book("test", "author", "1 million", "1")]);
lib.markRead(null, 3);
// for(let i = 0; i < Book.length; i++){

// }
const newBook = document.getElementById("");
document.cr