import createError from 'http-errors';
import express from 'express'
import cookieParser from 'cookie-parser';
import morgan from "morgan";
import FacadeController from "./controller/FacadeController";
import FacadeService from "./service/FacadeService";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

const facadeService = new FacadeService();
const facadeController = new FacadeController(facadeService);

app.use('/books/:id', facadeController.getBookById);

app.use(function (req, res, next) {
    next(createError(404));
});

export default app;

if (process.env.LOCAL_DEBUG === 'true') {
    module.exports = app;
}
