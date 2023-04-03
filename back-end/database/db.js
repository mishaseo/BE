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

// require("dotenv").config();
// const Pool = require("pg").Pool;
// const databaseConfig = { connectionString: process.env.DATABASE_URL };
// const pool = new Pool(databaseConfig);
// module.exports = pool;
