// api/json-server.js

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./data.json");
const middlewares = jsonServer.defaults();

console.log("Before router.use");
server.use(router);

// Insert console log for debugging
console.log("Before module.exports");
module.exports = server;
