process.env.NODE_ENV = 'production';
// criando a path require(path)
const path = require('path');
// criando a const require(express)
const express = require("express");
// criando a const app que vai pegar tudo que está no express
const app = express();
// criando a const app que vai pegar tudo que está no body-parser
const bodyParser = require('body-parser');
// está usando a pasta public e tudoque tem dentro dela
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// // requisisaõ de paramêtros
// app.get('/ola/:cargo/:nome/:cor', function(req,res){

// res.send(" <h2> Ola "+req.params.nome + " </h2>" + " O seu cargo é "+req.params.cargo + " <b> Sua cor favorita é "+req.params.cor + '</b>');

// })

app.post('/cadastro', function (req, res, next) {

    res.send("nome_usuario: " + req.body.name_user)
})





// a função app e colocar a porta do servidor 
// ela tem que ser sempre a ultima
app.listen(8081, function () {

    console.log('Servidor rodando na url http://localhost:8081');
});


