const login = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('senha');
const botaoEnviar = document.getElementById('submit-btn');
const aceitar = document.getElementById('agreement');

function verificarLogin() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else alert('Email ou senha inválidos.');
}
login.addEventListener('click', verificarLogin);

// function desabilitar(event) {
//     if (aceitar.checked !== true) {
//         event.preventDefault();
//     }
// }
// desabilitar();

// botaoEnviar.addEventListener('click', function (event) {
//     if (aceitar.checked !== true) {
//         event.preventDefault();
//     }
// });