import axios from "axios";

class FacadeService {

    constructor() {
    }

    async getBookById(id) {
        const bookResponse = await axios(`http://localhost:8002/books/${id}`);
        const book = bookResponse.data;
        const authorResponse = await axios(`http://localhost:8001/users/${book.authorId}`);
        const author = authorResponse.data;
        return {
            id: book.id,
            title: book.title,
            author
        };
    }
}

export default FacadeService;