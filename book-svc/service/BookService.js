class BookService {

    constructor() {
        this.books = {
            1: {
                'id': 1,
                'authorId': 1,
                'title': 'The Great Gatsby'
            },
            2: {
                'id': 2,
                'authorId': 2,
                'title': 'To Kill a Mockingbird'
            },
            3: {
                'id': 3,
                'authorId': 3,
                'title': 'Harry Potter and the Sorcerer\'s Stone'
            },
            4: {
                'id': 4,
                'authorId': 4,
                'title': '1984'
            },
            5: {
                'id': 5,
                'authorId': 5,
                'title': 'The Catcher in the Rye'
            },
        }
    }

    getBookById(id) {
        return this.books[id];
    }

    saveBook(book) {
        this.books[book.id] = book;
    }
}


export default BookService;