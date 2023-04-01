// installed package pg
const Pool = require("pg").Pool;

//pool class
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "fetchapet",
    password: "password",
    port: "5432",
});

module.exports = pool;
