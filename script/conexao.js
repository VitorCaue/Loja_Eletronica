const mysql = require('mysql');

// Configurações da conexão com o banco de dados
const dbConfig = {
    host: 'localhost',  
    user: 'root', 
    password: '', 
    database: 'loja' 
};

// Cria uma conexão com o banco de dados
const connection = mysql.createConnection(dbConfig);

// Conecta ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro na conexão com o banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL.');
});

// Array de produtos a serem inseridos
const produtos = [
    {
        nome: 'Mouse Gamer Novinho',
        descricao: 'Mouse de alto calibre e excelente para jogar CS',
        preco: 49.99
    },
    {
        nome: 'SSD M2 500 GB',
        descricao: 'SSD M2 da Kington com leitura de 3500 Mb/s e 2100 Mb/s',
        preco: 149.99
    },
    {
        nome: 'Head Seat gamer',
        descricao: 'Melhor qualidade de som, além de ser flexível e de excelente conforto',
        preco: 89.99
    }
];

// Loop para inserir todos os produtos
produtos.forEach((produto) => {
    connection.query('INSERT INTO produtos SET ?', produto, (err, result) => {
        if (err) {
            console.error('Erro ao adicionar o produto:', err);
            return;
        }
        console.log('Produto adicionado com sucesso. ID:', result.insertId);
    });
});

// Encerra a conexão com o banco de dados após a operação
connection.end((err) => {
    if (err) {
        console.error('Erro ao encerrar a conexão com o banco de dados:', err);
        return;
    }
    console.log('Conexão com o banco de dados encerrada.');
});
