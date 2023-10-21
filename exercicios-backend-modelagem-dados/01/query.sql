CREATE TABLE categorias (
id SERIAL PRIMARY KEY,
  nome VARCHAR(50) NOT NULL
);
CREATE TABLE produtos (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	descricao TEXT,
	preco INT NOT NULL,
	quantidade_em_estoque INT,
	categoria_id INT REFERENCES categorias(id)
);

INSERT INTO categorias (nome)
VALUES ('frutas'),('verduras'),('massas'),('bebidas'),('utilidades');
ALTER TABLE produtos ALTER column quantidade_em_estoque SET DEFAULT 0;

INSERT INTO produtos (nome,descricao,preco,quantidade_em_estoque,categoria_id)
VALUES 
('Mamão','Rico em vitamina A, potássio e vitamina C',300,123,1),
('Maça','Fonte de potássio e fibras',90,34,1),('Cebola','Rico em quercetina, antocianinas, vitaminas do complexo B, C',50,76,2),
('Abacate','NÃO CONTÉM GLÚTEN',150,64,1),('Tomate','Rico em vitaminas A, B e C',125,88,2),
('Acelga','NÃO CONTÉM GLÚTEN',235,13,2),('Macarrão parafuso','Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais',690,5,3),
('Massa para lasanha','Uma reunião de família precisa ter comida boa e muita alegria',875,19,3),
('Refrigerante coca cola lata','Sabor original',350,189,4),
('Refrigerante Pepsi 2l','NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO.',700,12,4),
('Cerveja Heineken 600ml','Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado',1200,500,4),
('Agua mineral sem gás','Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.',130,478,4),
('Vassoura','Pigmento, matéria sintética e metal.',2350,30,5),
('Saco para lixo','Reforçado para garantir mais segurança',1340,90,5),
('Escova dental','Faça uma limpeza profunda com a tecnologia inovadora',1000,44,5),
('Balde para lixo 50l','Possui tampa e fabricado com material reciclado',2290,55,5),
('Manga','Rico em Vitamina A, potássio e vitamina C',198,176,1),
('Uva','NÃO CONTÉM GLÚTEN.',420,90,1);
CREATE TABLE clientes (
  cpf CHAR(14) unique NOT NULL,
  nome VARCHAR(150) NOT NULL
);
CREATE TABLE vendedores (
  cpf CHAR(14) unique NOT NULL,
  nome VARCHAR(150) NOT NULL
);
INSERT INTO clientes(cpf,nome)
VALUES
('803.713.500-42','José Augusto Silva'),
('676.428.690-61','Antonio Oliveira'),
('631.933.100-34','Ana Rodrigues'),
('756.705.050-18','Maria da Conceição');
INSERT INTO vendedores(cpf,nome)
VALUES
('825.398.410-31','Rodrigo Sampaio'),
('232.625.460-03','Beatriz Souza Santos'),
('280.071.550-23','Carlos Eduardo');
CREATE TABLE pedidos (
	id SERIAL PRIMARY KEY,
  valor INT,
  cliente_cpf CHAR(14) REFERENCES clientes(cpf),
  vendedor_cpf CHAR(14) REFERENCES vendedores(cpf)
);
CREATE TABLE itens_do_pedido (
id SERIAL PRIMARY KEY,
  pedido_id INT REFERENCES pedidos(id),
  quantidade INT,
  produto_id INT REFERENCES produtos(id)
);
INSERT INTO pedidos (valor, cliente_cpf, vendedor_cpf)
VALUES (0, '803.713.500-42', '280.071.550-23');

INSERT INTO itens_do_pedido (pedido_id, quantidade, produto_id)
VALUES 
   (currval('pedidos_id_seq'), 1, 1),    
   (currval('pedidos_id_seq'), 1, 9),    
   (currval('pedidos_id_seq'), 6, 11),   
   (currval('pedidos_id_seq'), 1, 15),    
   (currval('pedidos_id_seq'), 5, 2);
INSERT INTO pedidos (valor, cliente_cpf, vendedor_cpf)
VALUES (0, '631.933.100-34', '232.625.460-03');

INSERT INTO itens_do_pedido (pedido_id, quantidade, produto_id)
VALUES 
   (currval('pedidos_id_seq'), 10, 18),   
   (currval('pedidos_id_seq'), 3, 19),    
   (currval('pedidos_id_seq'), 5, 1),     
   (currval('pedidos_id_seq'), 10, 5),    
   (currval('pedidos_id_seq'), 2, 6);
INSERT INTO pedidos (valor, cliente_cpf, vendedor_cpf)
VALUES (0, '756.705.050-18', '232.625.460-03');

INSERT INTO itens_do_pedido (pedido_id, quantidade, produto_id)
VALUES 
   (currval('pedidos_id_seq'), 1, 10),     
   (currval('pedidos_id_seq'), 6, 12),     
   (currval('pedidos_id_seq'), 5, 17);
INSERT INTO pedidos (valor, cliente_cpf, vendedor_cpf)
VALUES (0, '756.705.050-18', '825.398.410-31');

INSERT INTO itens_do_pedido (pedido_id, quantidade, produto_id)
VALUES 
   (currval('pedidos_id_seq'), 1, 20),    
   (currval('pedidos_id_seq'), 6, 19),    
   (currval('pedidos_id_seq'), 1, 7),     
   (currval('pedidos_id_seq'), 3, 1),     
   (currval('pedidos_id_seq'), 20, 10),   
   (currval('pedidos_id_seq'), 2, 6);
INSERT INTO pedidos (valor, cliente_cpf, vendedor_cpf)
VALUES (0, '676.428.690-61', '825.398.410-31');

INSERT INTO itens_do_pedido (pedido_id, quantidade, produto_id)
VALUES 
   (currval('pedidos_id_seq'), 8, 19),    
   (currval('pedidos_id_seq'), 1, 8),     
   (currval('pedidos_id_seq'), 3, 17),    
   (currval('pedidos_id_seq'), 8, 10),    
   (currval('pedidos_id_seq'), 2, 11);

