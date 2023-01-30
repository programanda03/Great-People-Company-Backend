--Insert Modalidade
insert into tb_modalidade values (1,'PRESENCIAL');
insert into tb_modalidade values (2,'HIBRIDO');
insert into tb_modalidade values (3,'HOME OFFICE');
--Insert Turnos
insert into tb_turno values (1,'MANHÃ');
insert into tb_turno values (2,'TARDE');
insert into tb_turno values (3,'NOITE');
insert into tb_turno values (4,'INTEGRAL');
--Insert Beneficios
insert into tb_beneficio values (1,'VALE TRANSPORTE');
insert into tb_beneficio values (2,'VALE REFEIÇÃO');
insert into tb_beneficio values (3,'VALE ALIMENTAÇÃO');
insert into tb_beneficio values (4,'CONVÊNIO MÉDICO');
insert into tb_beneficio values (5,'CONVÊNIO ODONTOLÓGICO');
--Insert Escolaridade
insert into tb_escolaridade values (1,'ENSINO FUNDAMENTAL INCOMPLETO');
insert into tb_escolaridade values (2,'ENSINO FUNDAMENTAL COMPLETO');
insert into tb_escolaridade values (3,'ENSINO MÉDIO INCOMPLETO');
insert into tb_escolaridade values (4,'ENSINO MÉDIO COMPLETO');
insert into tb_escolaridade values (5,'ENSINO SUPERIOR INCOMPLETO');
insert into tb_escolaridade values (6,'ENSINO SUPERIOR COMPLETO');
insert into tb_escolaridade values (7,'PÓS GRADUAÇÃO');
insert into tb_escolaridade values (8,'MESTRADO');
insert into tb_escolaridade values (9,'DOUTORADO');
--Insert Sexo
insert into tb_sexo values (1,'MASCULINO');
insert into tb_sexo values (2,'FEMININO');
insert into tb_sexo values (3,'INDEFINIDO');
insert into tb_sexo values (4,'OUTROS');
--Insert Endereço
insert into tb_endereco values (1,'Rua São Benedito','04849329','São Paulo','SP',50);
insert into tb_endereco values (2,'Rua Nilo Bruzzi','02988080','São Paulo','SP',7);
insert into tb_endereco values (3,'Travessa Cachoeira da Fartura','05574200','São Paulo','SP',110);
insert into tb_endereco values (4,'Rua Luiz Alves','79052400','Campo Grande','MS',125);
insert into tb_endereco values (5,'Rua Amaçarí','79065634','Campo Grande','MS',7);
insert into tb_endereco values (6,'Rua Iguaraçu','79034012','Campo Grande','MS',154);
insert into tb_endereco values (7,'Avenida Anastácio Braga 478','62500970','Itapipoca','CE',478);
insert into tb_endereco values (8,'Rua Ademar Fontes, s/n','48460970','Nova Soure','BA',1);
insert into tb_endereco values (9,'Rua Joaquim Manoel de Macedo','16401443','Lins','SP',510);
--Insert Empresa
insert into tb_empresa values (1,2,'Impacta S A Industria e Comercio','IMPACTA','61194494000187','1138256968','www.impacta.com.br');
insert into tb_empresa values (2,4,'SCANIA TRUCKS & BUSES AKTIEBOLAG','SCANIA AB','28023846000166','1125154215','www.scania.com.br');
insert into tb_empresa values (3,6,'GELATERIA PARMALAT LTDA','PARMALAT','01752639000196','1130772057','www.parmalat.com.br');
insert into tb_empresa values (4,8,'UNILEVER BRASIL HIGIENE PESSOAL E LIMPEZA LTDA','ELIDA PONDS INDUSTRIAL LTDA.','03085759000102','1137412767','www.unilever.com.br');
--Insert Candidato
insert into tb_candidato values (1,1,6,1,'Mark Zuckerberg','36614272020','1984-05-14','11981245124','mark.zuckerberg.@.teste.com.br');
insert into tb_candidato values (2,3,8,1,'James Gosling','03185145089','1955-05-19','11955545124','James.Gosling@teste.com.br');
insert into tb_candidato values (3,5,9,2,'Mae Jemison','64195410002','1956-10-17','19981874124','Mae.Jemison@teste.com.br');
insert into tb_candidato values (4,7,7,2,'Beyoncé Giselle Knowles-Carter','12215540001','1981-09-04','67984785124','Beyonce.Carter@teste.com.br');
insert into tb_candidato values (5,9,9,2,'Roberta Williams','66131725020','1953-02-16','35974848724','Roberta.Williams@teste.com.br');
--Insert Vaga
insert into tb_vaga values (1,4,3,5,'ANALISTA DE SISTEMAS JUNIOR','Por conseguinte, a necessidade de renovação processual causa impacto indireto na reavaliação do orçamento setorial. O empenho em analisar o fenômeno da Internet é uma das consequências do fluxo de informações. Assim mesmo, o comprometimento entre as equipes prepara-nos para enfrentar situações atípicas decorrentes do sistema de participação geral.',1000.32,'2023-01-01T00:00:00Z',999);
insert into tb_vaga values (2,2,2,3,7,'COORDENADOR DE VENDAS','A certificação de metodologias que nos auxiliam a lidar com a determinação clara de objetivos cumpre um papel essencial na formulação do processo de comunicação como um todo. Acima de tudo, é fundamental ressaltar que o comprometimento entre as equipes deve passar por modificações independentemente dos métodos utilizados na avaliação de resultados. A prática cotidiana prova que o consenso sobre a necessidade de qualificação acarreta um processo de reformulação e modernização dos níveis de motivação departamental. Por outro lado, o aumento do diálogo entre os diferentes setores produtivos nos obriga à análise das direções preferenciais no sentido do progresso. É importante questionar o quanto o novo modelo estrutural aqui preconizado estimula a padronização de alternativas às soluções ortodoxas.',9541.25,'2022-12-25T00:00:00Z',1000);
insert into tb_vaga values (3,3,1,1,6,'ANALISTA DE SISTEMAS SENIOR','Por conseguinte, a necessidade de renovação processual causa impacto indireto na reavaliação do orçamento setorial. O empenho em analisar o fenômeno da Internet é uma das consequências do fluxo de informações. Assim mesmo, o comprometimento entre as equipes prepara-nos para enfrentar situações atípicas decorrentes do sistema de participação geral.',4500.25,'2022-12-31T00:00:00Z',450);
insert into tb_vaga values (4,3,1,1,6,'GERENTE DE PROJETO','Por conseguinte, a necessidade de renovação processual causa impacto indireto na reavaliação do orçamento setorial. O empenho em analisar o fenômeno da Internet é uma das consequências do fluxo de informações. Assim mesmo, o comprometimento entre as equipes prepara-nos para enfrentar situações atípicas decorrentes do sistema de participação geral.',3000.27,'2022-12-31T00:00:00Z',5);
insert into tb_vaga values (5,4,3,2,4,'MENOR APRENDIZ',' Desta maneira, o consenso sobre a necessidade de qualificação oferece uma interessante oportunidade para verificação dos índices pretendidos. O empenho em analisar o surgimento do comércio virtual auxilia a preparação e a composição do sistema de participação geral. Todavia, a complexidade dos estudos efetuados pode nos levar a considerar a reestruturação das diversas correntes de pensamento. Caros amigos, o julgamento imparcial das eventualidades estimula a padronização dos procedimentos normalmente adotados. Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a crescente influência da mídia maximiza as possibilidades por conta das condições financeiras e administrativas exigidas.',950.00,'2023-02-28T00:00:00Z',12);
--Insert beneficio vaga
insert into tb_beneficiovagas values (1,1,1);
insert into tb_beneficiovagas values (2,1,2);
insert into tb_beneficiovagas values (3,2,3);
insert into tb_beneficiovagas values (4,3,1);
insert into tb_beneficiovagas values (5,4,4);
insert into tb_beneficiovagas values (6,1,4);
insert into tb_beneficiovagas values (7,2,5);
insert into tb_beneficiovagas values (8,3,2);
--Insert Inscricao candidato
insert into tb_inscricao_candidato values (1,1,1,'2023-01-01T00:00:00Z');
insert into tb_inscricao_candidato values (2,1,3,'2023-01-01T00:00:00Z');
insert into tb_inscricao_candidato values (3,2,4,'2023-01-01T00:00:00Z');
insert into tb_inscricao_candidato values (4,3,2,'2023-01-01T00:00:00Z');
insert into tb_inscricao_candidato values (5,4,5,'2023-01-01T00:00:00Z');
insert into tb_inscricao_candidato values (6,5,1,'2023-01-01T00:00:00Z');


/*
drop table tb_beneficiovagas;
drop table tb_beneficio;
drop table tb_inscricao_candidato;
drop table tb_candidato;
--drop table tb_ofertavagas;
drop table tb_vaga;
drop table tb_empresa;
drop table tb_sexo;
drop table tb_escolaridade;
drop table tb_endereco;
drop table tb_modalidade;
drop table tb_turno;*/