document.getElementById('contactForm').addEventListener('submit', function(event) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !mensagem) {
        event.preventDefault();
        alert('Por favor, preencha todos os campos.');
    }
});
