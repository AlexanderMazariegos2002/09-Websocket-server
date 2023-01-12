require('dotenv').config();

const Server = require('./models/server');

//instancia servidor
const server = new Server();



server.listen();