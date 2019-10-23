import createError from 'http-errors';
import express from 'express'
import cookieParser from 'cookie-parser';
import morgan from "morgan";
import BookController from "./controller/BookController";
import BookService from "./service/BookService";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

const bookService = new BookService();
const bookController = new BookController(bookService);

app.use('/books/:id', bookController.getBookById);

app.use(function (req, res, next) {
    next(createError(404));
});

export default app;

if (process.env.LOCAL_DEBUG === 'true') {
    module.exports = app;
}
