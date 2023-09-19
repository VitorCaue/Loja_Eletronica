CREATE DATABASE IF NOT EXISTS loja;
USE loja;

CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL
);

GRANT INSERT ON loja.produtos TO 'root'@'localhost';