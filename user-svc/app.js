import createError from 'http-errors';
import express from 'express'
import cookieParser from 'cookie-parser';
import UserController from "./controller/UserController";
import UserService from "./service/UserService";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

const userService = new UserService();
const userController = new UserController(userService);

app.use('/users/:id', userController.getUserById);

app.use(function (req, res, next) {
    next(createError(404));
});

export default app;

if (process.env.LOCAL_DEBUG === 'true') {
    module.exports = app;
}
