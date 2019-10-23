module.exports = {
    apps: [
        {
            name: 'book-svc',
            cwd: 'book-svc',
            script: 'dist/server.js',
            instances: 2,
            autorestart: true,
            watch: true,
            max_memory_restart: '512M'
        },
        {
            name: 'user-svc',
            cwd: 'user-svc',
            script: 'dist/server.js',
            autorestart: true,
            watch: true,
            max_memory_restart: '512M',
            instances: 2
        },
        {
            name: 'facade-svc',
            cwd: 'facade-svc',
            script: 'dist/server.js',
            autorestart: true,
            watch: true,
            max_memory_restart: '512M',
            instances: 8
        },
    ]
};
