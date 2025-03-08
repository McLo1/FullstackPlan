const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const Math = require('./math');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Configuração do EJS
app.set('view engine', 'ejs');
// Rota inicial
app.get('/', (req, res) => {
    res.send('Bem-vindo à Aplicação de Restaurante!');
});
// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em <http://localhost>:${port}`);
});

console.log(Math.soma(2,2)); //4
console.log(Math.sub(5,2)); //3