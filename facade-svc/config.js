const convict = require('convict');

const config = convict({
    http: {
        port: {
            doc: 'The port to listen on',
            default: 8000,
            env: 'BOOK_SVC_PORT'
        }
    }
});

config.validate();

export default config;

exports.config = config;