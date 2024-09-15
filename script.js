function createAccount() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        document.getElementById('displayUsername').textContent = username;
        document.getElementById('displayPassword').textContent = password;

        document.getElementById('accountInfo').style.display = 'block';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
