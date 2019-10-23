import {errorHandler} from "../util/errorHandler";

class UserController {

    constructor(userService) {
        this.userService = userService;
        this.getUserById = errorHandler(this.getUserById.bind(this));
    }

    getUserById(req, res) {
        let user = this.userService.getUserById(req.params.id);
        res.json(user);
    }


}

export default UserController;
