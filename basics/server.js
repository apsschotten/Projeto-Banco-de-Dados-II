const express = require('express');
const { Pool } = require('pg');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "senha123",
    database: "postgres",
    port: 5432
});

app.use(express.static(path.join('')));

app.get('/criptideos', (req, res) => {
    const query = 'SELECT * FROM cryptids;';

    pool.query(query, (error, result) => {
        if (error) {
            console.error('Error occurred:', error);
            res.status(500).send('An error occurred while retrieving data from the database.');
        } else {
            const cptds = result.rows;
            res.json(cptds);
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });