const mariadb = require('mariadb');

let pool;

if(process.env.JAWSDB_MARIA_URL) {
    pool = mariadb.createPool(process.env.JAWSDB_MARIA_URL)
} else {
    pool = mariadb.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    })
}

pool.getConnection((err, connection) => {
    if(err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection lost')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connection')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused')
        }
    }
    if(connection) connection.release()

    return;
})

module.exports = pool;