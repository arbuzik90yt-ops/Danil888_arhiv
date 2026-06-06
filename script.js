function checkPassword() {
    const pass = document.getElementById('password-input').value;
    if (pass === 'Danil888_arhiv') {
        window.location.href = 'idiot.html';
    } else {
        alert('Неверный пароль');
    }
}