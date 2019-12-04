use cadastro;

create table usuario(
nome_usuario varchar(50),
login varchar(30),
senha varchar(20)

);

insert into usuario(nome_usuario,login,senha) values
("Vinicius Sobral de Araújo","vinisobral","vini123");

select * from usuario;

create table contato(
nome varchar (50),
email varchar(50),
mensagem varchar (255)

);

insert into contato(nome,email,mensagem) values
("João Pedro","joao@gmail.com","Eu gostei muito do site, amei as funcionalidades e gostaria de receber novas atualizações");

select * from contato;

