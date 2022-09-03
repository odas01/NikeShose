// const app = require('./app');
// const config = require('./app/config');
// const MongoDB = require('./app/utils/mongodb.util');
import app from './app.js';
import config from './app/config/index.js';
import MongoDB from './app/utils/mongodb.util.js';

// connect to MongoDB
async function startServer() {
    try {
        await MongoDB.connect(config.db.uri);
        console.log('Connected to MongoDB');

        const PORT = config.app.port;
        console.log(PORT);
        app.listen(PORT, () => {
            console.log('Server is running on port ' + PORT);
        });
    } catch (error) {
        console.log('Cannot connect to MongoDB', error);
        process.exit();
    }
}

startServer();
