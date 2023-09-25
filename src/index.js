const express = require('express');
const setupRoutes = require('./routes');


const app = express();

setupRoutes(app);

const startServer = async () => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
}

startServer();