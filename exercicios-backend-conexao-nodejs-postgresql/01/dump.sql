CREATE TABLE autores (
    id serial PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    idade INT
);

CREATE TABLE livros (
    id serial PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    genero VARCHAR(255),
    editora VARCHAR(255),
    data_publicacao DATE,
    autor_id INT REFERENCES autores(id)
);
INSERT INTO autores (nome,idade)
VALUES
('Guido Cerqueira',32);