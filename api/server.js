const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;
const path = '/';

server.listen()
server.use(middlewares);
server.use(path, router);

server.listen(port);