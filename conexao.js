const Sequelize = require('sequelize');
const sequelize = new Sequelize('site', 'root', 'password', {
    host: "localhost",
    dialect: 'mysql'
});


const Cadastrar = sequelize.define('cadastros', {

    nome_usuario: {
        type: Sequelize.STRING

    },
    login: {
        type: Sequelize.STRING

    },
    senha: {

        type: Sequelize.STRING
    }

});

Cadastrar.create({
    nome_usuario: "Vinicius Sobral de Araújo",
    login: "vinisobral",
    senha: "vini123"


})

const Contato = sequelize.define('contatos', {

    nome: {
        type: Sequelize.STRING

    },
    email: {
        type: Sequelize.STRING

    },
    mensagem: {

        type: Sequelize.TEXT
    }

});

Contato.create({
    nome: "João Pedro",
    email: "joao@gmail.com",
    mensagem: "Eu gostei muito do site, amei as funcionalidades e gostaria de receber novas atualizações"


});



