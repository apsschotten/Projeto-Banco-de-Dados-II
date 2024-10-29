const { error } = require('console');
const { Client } = require('pg')
const express = require('express');
const app = express();
const port = 5000;

const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "senha123",
    database: "postgres",
    port: 5432
})

client.connect();

client.query(`SELECT * FROM cryptids`, (err, res) => {
    if (!err) {
        const entrada = res.rows;
        console.log(entrada);
    } else {
        alert("Ocorreu um erro: ", error);
    }
    client.end;
})

app.listen(port, () => {
    console.log(`Server rodando no port ${port}`);
});