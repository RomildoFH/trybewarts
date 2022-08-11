const login = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('senha');

function verificarLogin () {
    if(email.value == 'tryber@teste.com' && password.value == '123456') {
    alert('Olá, Tryber!');
    } else alert('Email ou senha inválidos.'); 
}
login.addEventListener('click', verificarLogin)
