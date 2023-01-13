const Pool = require('pg').Pool
const pool = new Pool({
    user: "hr_db_user",
    password: "dO0sDexYa9bFi1RBAGbZjGxVVi64E8dC",
    host: "dpg-cf01nv4gqg4cnpitd930-a",
    port: 5432,
    database: "hr_db"
})

module.exports = pool