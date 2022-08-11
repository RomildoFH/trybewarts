const login = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('senha');
const botaoEnviar = document.getElementById('submit-btn');
const aceitar = document.getElementById('agreement');
let caracteres = document.getElementById('counter');
let comentarioCampo = document.getElementById('area-texto');

function verificarLogin() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else alert('Email ou senha inválidos.');
}
login.addEventListener('click', verificarLogin);
<<<<<<< HEAD
=======

aceitar.addEventListener('click', function () {
    if (aceitar.checked) {
        botaoEnviar.disabled = false
    } else {
        botaoEnviar.disabled = true;
    }
});

window.onload = function() {
    //Colcoar a fonte onde foi descoberto o código
    botaoEnviar.disabled = true;
}

function contagem () {
    comentarioCampo.addEventListener('keyup', function () {
        if (comentarioCampo.value.length !== 0) {
            let sub = 500 - comentarioCampo.value.length
            caracteres.innerHTML = sub
        } 
        else {
            caracteres.innerHTML = "500"
        }
    });    
}
contagem ()
>>>>>>> 5448ddff7639537580b37debd28afafc14b7e356
