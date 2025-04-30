create database hackathon;
use hackathon;

create table usuarios(
    nome varchar(100) not null,
    email varchar(100) primary key not null unique,
    senha varchar(100) not null unique,
    criado_em timestamp default current_timestamp
);

create table Dev(
	email_user varchar(100),
	texto text,
    imagem text,
    criado_em timestamp default current_timestamp,
    
    foreign key (email_user) references usuarios(email)
);
create table Designers(
	email_user varchar(100),
	texto text,
    imagem text,
    criado_em timestamp default current_timestamp,
    
    foreign key (email_user) references usuarios(email)
);
create table Projetos(
	email_user varchar(100),
	texto text,
    imagem text,
    criado_em timestamp default current_timestamp,
    
    foreign key (email_user) references usuarios(email)
);


SELECT nome,email,senha FROM usuarios WHERE email = '11@11';
drop table usuarios;
select * from usuarios;
DELETE FROM usuarios WHERE email = 'teste@teste';