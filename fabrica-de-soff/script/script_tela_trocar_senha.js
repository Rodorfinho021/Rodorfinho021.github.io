document.getElementById('resetForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    const email = document.getElementById('email').value;
    if (email) {
        alert("Código de confirmação enviado para: ",email);
    } else {
        alert('Por favor, insira um email válido.');
    }
});