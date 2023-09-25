const express = require('express');
const setupRoutes = require('./routes');
const app = express();


setupRoutes(app);


/**
 * Starts the server and listens on port 3000.
 * 
 * @returns {void} - While the function does not return any value, it starts the server and listens on port 3000.
 */

const startServer = async () => {
    await app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
}

startServer();