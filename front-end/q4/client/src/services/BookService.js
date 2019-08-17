import * as api from '../apis';

class BookService {
  static getBooks() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await api.getBookList();
        const data = res.data;
        const books = data.books.map((book,idx)=>{
          book.seq = idx + 1;
          return book;
        });
        resolve({ ...data, books });
      } catch (err) {
        reject(err);
      }
    });
  }

  static getBook(slug) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await api.getBookInfo(slug);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default BookService;