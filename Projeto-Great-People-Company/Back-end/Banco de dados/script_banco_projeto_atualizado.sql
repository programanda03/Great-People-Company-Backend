-- Script do banco de dados do Projeto final - Recursos Humanos

--CREATE database dbrecursoshumanos;

create table if not EXISTS tb_modalidade(
	id serial,
  	descricao varchar(11) not NULL,
  	CONSTRAINT pk_modalidade PRIMARY KEY(id)
);
create table if not EXISTS tb_turno(
	id serial,
  	descricao varchar(8) not NULL,
  	CONSTRAINT pk_turno PRIMARY KEY(id)
);
create table if not EXISTS tb_beneficio(
	id serial,
  	descricao varchar(30) not NULL,
  	CONSTRAINT pk_beneficio PRIMARY KEY(id)
);
create table if not EXISTS tb_escolaridade(
	id serial,
  	descricao varchar(30) not NULL,
  	CONSTRAINT pk_escolaridade PRIMARY KEY(id)
);
create table if not EXISTS tb_sexo(
	id serial,
  	descricao varchar(11) not NULL,
  	CONSTRAINT pk_sexo PRIMARY KEY(id)
);
create table if not EXISTS tb_endereco(
	id serial,
  	logradouro varchar(60) not null,
	cep char(8) not null,
	cidade varchar(30) not null,
	uf char(2) not null,
	numero integer not NULL,
	CONSTRAINT pk_endereco PRIMARY KEY(id),
	CONSTRAINT ck_cep check(LENGTH(cep) = 8),
	CONSTRAINT ck_uf CHECK (LENGTH(uf) = 2)
);
create table if not exists tb_empresa(
	id serial,
	idendereco int NOT null,
	nome varchar(50) NOT null,
	razaosocial varchar(50) NOT null,
	cnpj char(14) NOT NULL,
	telefone varchar(11),
	site varchar(100),
	CONSTRAINT pk_empresa PRIMARY KEY(id),
	CONSTRAINT fk_idendereco_tbempresa FOREIGN KEY (idendereco) REFERENCES tb_endereco (id) on delete cascade on update cascade,
	CONSTRAINT ck_cnpj check (length(cnpj) = 14),
	CONSTRAINT uq_cnpj unique(cnpj),
	CONSTRAINT ck_telefone check (length(telefone) = 11 or length(telefone) = 10)
);
create table if not exists tb_candidato(
	id serial,
	idendereco int not null,
	idescolaridade int not null,
	idsexo int not null,
	nome varchar(50) not null,
	cpf char(11) not null,
	datanascimento date not null,
	telefone varchar(11),
	email varchar(60),
	CONSTRAINT pk_candidato PRIMARY KEY(id),
	CONSTRAINT fk_idendereco_tbcandidato FOREIGN KEY (idendereco) REFERENCES tb_endereco (id) on delete cascade on update cascade,
	CONSTRAINT fk_idescolaridade_tbcandidato FOREIGN KEY (idescolaridade) REFERENCES tb_escolaridade (id),
	CONSTRAINT fk_idsexo_tbcandidato FOREIGN KEY (idsexo) REFERENCES tb_sexo (id),
	CONSTRAINT ck_cpf check (length(cpf) = 11),
	CONSTRAINT uq_cpf unique(cpf),
	CONSTRAINT ck_telefone check (length(telefone) = 11 or length(telefone) = 10),
	CONSTRAINT ck_email check(email like '%@%')
);

CREATE TABLE IF NOT EXISTS tb_vaga (
	id serial,
	idempresa 			int not null,
	idturno 			int not null,
	idmodalidade 		int not null,
	idescolaridade 	int not null,
	titulo_vaga 		VARCHAR(100) NOT NULL,
	descricao 			text NOT NULL,
	salario 			DECIMAL(11,2) NOT NULL,
	data_limite_inscricao TIMESTAMP NOT NULL,
	quantidade_vaga int	NOT NULL,
	CONSTRAINT pk_vaga PRIMARY KEY(id),
	CONSTRAINT fk_idempresa_tbvagas FOREIGN KEY (idempresa) REFERENCES tb_empresa(id) on delete cascade on update cascade,
	CONSTRAINT fk_idturno_tbvagas FOREIGN KEY (idturno) REFERENCES tb_turno (id),
	CONSTRAINT fk_idmodalidade_tbvagas FOREIGN KEY (idmodalidade) REFERENCES tb_modalidade (id),
	CONSTRAINT fk_idescolaridade_tbvagas FOREIGN KEY (idescolaridade) REFERENCES tb_escolaridade (id)
);

CREATE TABLE IF NOT EXISTS tb_beneficiovagas (
	id serial,
	idvaga 		int not null,
	idbeneficio 	int not null,
	CONSTRAINT pk_beneficiovagas PRIMARY KEY(id),
	CONSTRAINT fk_idvaga_tbvagas FOREIGN KEY (idvaga) REFERENCES tb_vaga(id) on delete cascade on update cascade,
	CONSTRAINT fk_idbeneficio_tbvagas FOREIGN KEY (idbeneficio) REFERENCES tb_beneficio(id)
);

CREATE TABLE IF NOT EXISTS tb_inscricao_candidato (
	id serial,
	idcandidato 	int not null,
	idvaga 		int not null,
	datainscricao 	TIMESTAMP NOT NULL,
	CONSTRAINT pk_inscricao_candidato PRIMARY KEY(id),
	CONSTRAINT fk_idvaga_tbvagas FOREIGN KEY (idvaga) REFERENCES tb_vaga(id) on delete cascade on update cascade,
	CONSTRAINT fk_idcandidato FOREIGN KEY (idcandidato) REFERENCES tb_candidato(id) on delete cascade on update cascade
);

