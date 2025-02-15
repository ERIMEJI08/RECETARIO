document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verificar si ya existe un usuario con el mismo correo
    const existingUser = localStorage.getItem('user');
    if (existingUser) {
        alert('Ya tienes una cuenta registrada con ese correo.');
        return;
    }

    // Crear un objeto usuario
    const newUser = {
        name: name,
        email: email,
        password: password
    };

    // Guardar usuario en localStorage
    localStorage.setItem('user', JSON.stringify(newUser));

    // Redirigir al login después del registro exitoso
    alert('Registro exitoso');
    window.location.href = 'login.html'; // Redirigir a la página de login
});
