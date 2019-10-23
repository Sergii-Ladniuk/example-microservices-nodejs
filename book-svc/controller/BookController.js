import {errorHandler} from "../util/errorHandler";

class BookController {

    constructor(bookService) {
        this.bookService = bookService;
        this.getBookById = errorHandler(this.getBookById.bind(this));
    }

    getBookById(req, res) {
        let books = this.bookService.getBookById(req.params.id);
        res.json(books);
    }


}

export default BookController;
