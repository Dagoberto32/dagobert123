document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const correo = document.getElementById('correo').value;

    if (!correo.includes('@')) {
        alert('Ingresa un correo válido.');
    } else {
        // Redirigir al catálogo si el correo es válido
        window.location.href = 'catalogo.html';
    }
});
