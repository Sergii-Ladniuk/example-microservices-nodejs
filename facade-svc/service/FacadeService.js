import axios from "axios";

class FacadeService {

    constructor() {
        const Agent = require('agentkeepalive');
        const keepAliveAgent = new Agent({
            maxSockets: 100,
            maxFreeSockets: 10,
            timeout: 60000, // active socket keepalive for 60 seconds
            freeSocketTimeout: 30000, // free socket keepalive for 30 seconds
        });
        this.axiosInstance = axios.create({httpAgent: keepAliveAgent})
    }

    async getBookById(id) {
        const bookResponse = await this.axiosInstance(`http://localhost:8002/books/${id}`);
        const book = bookResponse.data;
        const authorResponse = await this.axiosInstance(`http://localhost:8001/users/${book.authorId}`);
        const author = authorResponse.data;
        return {
            id: book.id,
            title: book.title,
            author
        };
    }
}

export default FacadeService;