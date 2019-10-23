import {errorHandler} from "../util/errorHandler";

class FacadeController {

    constructor(facadeService) {
        this.facadeService = facadeService;
        this.getBookById = errorHandler(this.getBookById.bind(this));
    }

    async getBookById(req, res) {
        let books = await this.facadeService.getBookById(req.params.id);
        res.json(books);
    }


}

export default FacadeController;
