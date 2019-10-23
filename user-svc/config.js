const convict = require('convict');

const config = convict({
    http: {
        port: {
            doc: 'The port to listen on',
            default: 8001,
            env: 'USER_SVC_PORT'
        }
    }
});

config.validate();

export default config;

exports.config = config;