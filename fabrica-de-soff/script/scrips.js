document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (usuario === '' || senha === '') {
        alert('Preencha todos os campos.');
    } else {
        alert('Login bem-sucedido!');
        // Aqui pode adicionar o código para processamento do login
    }
});