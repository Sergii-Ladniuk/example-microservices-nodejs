module.exports = {
    apps: [
        {
            name: 'book-svc',
            cwd: 'book-svc',
            script: 'dist/server.js',
            instances: 1,
            autorestart: true,
            watch: true,
            max_memory_restart: '512M',
            instances: 4
        },
        {
            name: 'user-svc',
            cwd: 'user-svc',
            script: 'dist/server.js',
            instances: 1,
            autorestart: true,
            watch: true,
            max_memory_restart: '512M',
            instances: 4
        },
        {
            name: 'facade-svc',
            cwd: 'facade-svc',
            script: 'dist/server.js',
            instances: 1,
            autorestart: true,
            watch: true,
            max_memory_restart: '512M',
            instances: 4
        },
    ]
};
