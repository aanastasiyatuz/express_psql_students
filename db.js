const Pool = require("pg").Pool;

const pool = new Pool({
    user: "nastya",
    host: "127.0.0.1",
    database: "students",
    password: "1",
    port: 5432
})

module.exports = pool;
