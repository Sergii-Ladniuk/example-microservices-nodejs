function processError(e, res, name) {
    let msg = (name ? `Failed to execute ${name}.\n` : `Error occurred.\n`);
    if (msg.includes('connect ECONNREFUSED')) {
        msg += 'Database is not available.\n'
    }
    msg += `. ${e.message}`;
    const canRetry = e.hasOwnProperty('canRetry')
        ? e.canRetry
        : true;
    if (e.response) {
        const answer = e.response || {};
        console.error(
            msg +
            `Status: ${answer.status} - ${answer.statusText}.\n` +
            `Message: ${JSON.stringify(answer.data)}`);
        if (answer.data) {
            res.status(500).send(answer.data);
        } else {
            res.status(500).send({
                status: {
                    message: 'Internal Server Error',
                    canRetry: true
                }
            });
        }
    } else {
        console.error(e);
        res.status(500).send({
            status: {
                message: 'Internal Server Error',
                details: msg,
                canRetry: true
            }
        });
    }
}

export function errorHandler(middleware, name) {
    return async (req, res) => {
        try {
            await middleware(req, res);
        } catch (e) {
            processError(e, res, name);
        }
    };
}