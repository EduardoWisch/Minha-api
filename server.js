const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir requisições JSON
app.use(express.json());

// Dados fictícios de usuários
const usuarios = [
    { id: 1, nome: 'Alice', email: 'alice@example.com' },
    { id: 2, nome: 'Bob', email: 'bob@example.com' },
    { id: 3, nome: 'Charlie', email: 'charlie@example.com' }
];

// Rota para obter todos os usuários
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

// Rota para obter um usuário específico por ID
app.get('/usuarios/:id', (req, res) => {
    const usuarioId = parseInt(req.params.id);
    const usuario = usuarios.find(u => u.id === usuarioId);

    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
});