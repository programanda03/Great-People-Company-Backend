create table if not exists tb_nivel(
	id serial,
	descricao varchar(30) not null,
	constraint pk_nivel primary key (id),
	constraint uq_descricao unique (descricao)
);

create table if not exists tb_usuarios(
	nome varchar(14), 
	senha varchar(32) not null,
	nivel integer not null,
	constraint pk_nome primary key (nome),
	constraint fk_nivel foreign key (nivel) references tb_nivel (id)
);

insert into tb_nivel (descricao) values ('admininstrador'), ('empresa');

select * from tb_nivel;
select * from tb_usuarios;
select * from tb_empresa order by id asc;

insert into tb_usuarios (nome, senha, nivel) values 
('61194494000187', 'impacta', 2),
('28023846000166', 'scania', 2),
('01752639000196', 'parmalat', 2),
('03085759000102', 'unilever', 2),
('82921998000121', 'uvasaguiar', 2)

insert into tb_usuarios (nome, senha, nivel) values 
('142264', 'admin', 1)
