import mock from "../../mock/mock.json";

class BookRepository {
  bookList=[];

  constructor() {
    mock.data.books.map((values) => this.bookList.push(values));
  }

  list() {
    return this.bookList;
  }

  findByName(name) {
    const bookList = this.bookList.find(
      (book) => book.data.books.name === name
    );

    return bookList;
  }
}

export { BookRepository };
