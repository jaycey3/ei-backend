const dbConfig = require('../dbConfig');
const mysql = require('mysql');

async function getHorses(req, res) {
    try {
        const connection = mysql.createConnection(dbConfig);
        connection.connect();

        connection.query('SELECT * FROM horses', (error, results) => {
            if (error) {
                console.error('Error fetching horses:', error);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.json(results);
        });

        connection.end();
    } catch (error) {
        console.error('Error fetching horses:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getHorses
}