// Use the MariaDB Node.js Connector
var mariadb = require("mariadb");

// Create a new (connection) Pool
var pool = 
  mariadb.createPool({
    host: "127.0.0.1", 
    port: 3306,
    user: "root", 
    password: "",
    database: "meapp_db"
  });

// Expose the Pool object within this module
module.exports = Object.freeze({
  pool: pool
});