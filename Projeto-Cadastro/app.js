const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurando o EJS como o motor de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Página inicial e formulário de contato
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Página Sobre
app.get('/sobre', (req, res) => {
    res.render('sobre');
});

// Página de Serviços
app.get('/servicos', (req, res) => {
    res.render('servicos');
});

// Rota POST para processar o formulário de contato
app.post('/contato', (req, res) => {
    const { nome, email, mensagem } = req.body;
    // Renderiza a página de confirmação com os dados do usuário
    res.render('confirmacao', { nome, email, mensagem });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
