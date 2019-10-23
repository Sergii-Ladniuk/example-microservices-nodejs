class UserService {

    constructor() {
        this.users = {
            1: {
                'id': 1,
                'name': 'F. Scott Fitzgerald'
            },
            2: {
                'id': 2,
                'authorId': 2,
                'name': 'Harper Lee'
            },
            3: {
                'id': 3,
                'authorId': 3,
                'name': 'J.K. Rowling'
            },
            4: {
                'id': 4,
                'authorId': 4,
                'name': 'George Orwell'
            },
            5: {
                'id': 5,
                'authorId': 5,
                'name': 'J.D. Salinger'
            },
        }
    }

    getUserById(id) {
        return this.users[id];
    }

    saveUser(user) {
        this.users[user.id] = user;
    }
}


export default UserService;