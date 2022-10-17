const pool = require("../../helpers/database");

const addClient = async (req, res) => {
    const { name, mail, message } = req.body;
    const sqlQuery = 'INSERT INTO test (name, mail, message) VALUES(?, ?, ?)';
    const result  = await pool.query(sqlQuery, [name, mail, message]);

    res.status(201).json({
    status: 'success',
    code: 201,
    data: {
       clientId: Number(result.insertId),
       warnings: result.warningStatus,
       affectedRows: result.affectedRows
    },
    });
};
    
module.exports = addClient;