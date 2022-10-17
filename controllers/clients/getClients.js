const pool = require("../../helpers/database");

const getClients = async (req, res) => {
    const sqlQuery = 'SELECT id, createdAt, updatedAt, name, mail, message FROM test';
    const rows  = await pool.query(sqlQuery)
    res.json({
        status: 'success',
        code: 200,
        data: {
            rows
        },
      });
};
    
module.exports = getClients;