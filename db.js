// const Pool = require('pg').Pool
// const pool = new Pool({
//     user: "hr_db_user",
//     password: "dO0sDexYa9bFi1RBAGbZjGxVVi64E8dC",
//     host: "dpg-cf01nv4gqg4cnpitd930-a.oregon-postgres.render.com",
//     port: 5432,
//     database: "hr_db"
// })

// module.exports = pool
// ___________________________________

const pg = require('pg');

const config = {
    host: 'dpg-cf01nv4gqg4cnpitd930-a.oregon-postgres.render.com',
    // Do not hard code your username and password.
    // Consider using Node environment variables.
    user: 'hr_db_user',     
    password: 'dO0sDexYa9bFi1RBAGbZjGxVVi64E8dC',
    database: 'hr_db',
    port: 5432,
    ssl: true
};

const client = new pg.Client(config);

client.connect()

// function queryDatabase() {

//     console.log(`Running query to PostgreSQL server: ${config.host}`);

//     const query = 'SELECT * FROM person;';

//     client.query(query);
// }
module.exports = client
