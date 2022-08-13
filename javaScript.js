const login = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('senha');
const botaoEnviar = document.getElementById('submit-btn');
const aceitar = document.getElementById('agreement');
const caracteres = document.getElementById('counter');
const comentarioCampo = document.getElementById('textarea');
const evaluationForm = document.getElementById('evaluation-form');
const formData = document.getElementById('form-data');

function verificarLogin() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else alert('Email ou senha inválidos.');
}
login.addEventListener('click', verificarLogin);

aceitar.addEventListener('click', () => {
  if (aceitar.checked) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
});

window.onload = function carregamento() {
  // Colcoar a fonte onde foi descoberto o código
  botaoEnviar.disabled = true;
  formData.style.display = 'none';
};

function contagem() {
  comentarioCampo.addEventListener('keyup', () => {
    if (comentarioCampo.value.length !== 0) {
      const sub = 500 - comentarioCampo.value.length;
      caracteres.innerHTML = sub;
    } else {
      caracteres.innerHTML = '500';
    }
  });
}
contagem();

const dataObject = {
  nome: '',
  email: '',
  casa: '',
  familia: '',
  materias: [],
  avaliacao: '',
  observacoes: '',
};

function gerarNome() {
// Criando valor para propriedade nome
  const inputName = document.getElementById('input-name').value;
  const inputSobrenome = document.getElementById('input-lastname').value;
  dataObject.nome = `${inputName} ${inputSobrenome}`;
}

function gerarEmail() {
// Criando valor para email
  const inputEmail = document.getElementById('input-email').value;
  dataObject.email = inputEmail;
}

function gerarCasa() {
// Criando valor para casa
  const inputHouse = document.getElementById('house').value;
  dataObject.casa = inputHouse;
}

function gerarFamilia() {
// Criando valor para a propriedade familia quando apenas um é selecionado
  const inputFrontend = document.getElementById('frontend');
  const inputBackend = document.getElementById('backend');
  const inputFullstack = document.getElementById('fullstack');
  if (inputFrontend.checked) {
    dataObject.familia = 'Frontend';
  } else if (inputBackend.checked) {
    dataObject.familia = 'Backend';
  } else if (inputFullstack.checked) {
    dataObject.familia = 'Fullstack';
  }
}

// Criando valor para materias quando podem ser selecionadas 1 ou mais.
const arrayMaterias = document.querySelectorAll('.subject');
const arrayMateriasSelecionadas = [];
function gerarArrayMaterias() {
  for (let index = 0; index < arrayMaterias.length; index += 1) {
    if (arrayMaterias[index].checked) {
      arrayMateriasSelecionadas.push(arrayMaterias[index]);
    }
  }
}

function gerarMaterias() {
  for (let index = 0; index < arrayMateriasSelecionadas.length; index += 1) {
    if (index < arrayMateriasSelecionadas.length - 1) {
      dataObject.materias += `${arrayMateriasSelecionadas[index].value}, `;
    } else {
      dataObject.materias += `${arrayMateriasSelecionadas[index].value}`;
    }
  }
}

function gerarAvaliacao() {
// Criando valor para avaliacao quando apenas um pode ser selecionado
  const arrayAvaliacao = document.querySelectorAll('.nota');
  for (let index = 0; index < arrayAvaliacao.length; index += 1) {
    if (arrayAvaliacao[index].checked) {
      dataObject.avaliacao = arrayAvaliacao[index].value;
    }
  }
// console.log(arrayAvaliacao);
}

function gerarObservacao() {
// Criando valor para observação que é digitada no textarea
  dataObject.observacoes = comentarioCampo.value;
}

function packFuncoes() {
  gerarNome();
  gerarEmail();
  gerarCasa();
  gerarFamilia();
  gerarArrayMaterias();
  gerarMaterias();
  gerarAvaliacao();
  gerarObservacao();
  // console.log(dataObject);
}

const nomeCadastrado = document.getElementById('nome-cadastrado');
const emailCadastrado = document.getElementById('email-cadastrado');
const casaCadastrada = document.getElementById('casa-cadastrada');
const familiaCadastrada = document.getElementById('familia-cadastrada');
const materiasCadastradas = document.getElementById('materias-cadastradas');
const avaliacaoCadastrada = document.getElementById('avaliacao-cadastrada');
const observacaoCadastrada = document.getElementById('observacao-cadastrada');

function relatorio() {
  botaoEnviar.addEventListener('click', () => {
    packFuncoes();
    evaluationForm.style.display = 'none';
    formData.style.display = 'flex';
    nomeCadastrado.innerHTML = `Nome: ${dataObject.nome}`;
    emailCadastrado.innerHTML = `Email: ${dataObject.email}`;
    casaCadastrada.innerHTML = `Casa: ${dataObject.casa}`;
    familiaCadastrada.innerHTML = `Família: ${dataObject.familia}`;
    materiasCadastradas.innerHTML = `Matérias: ${dataObject.materias}`;
    avaliacaoCadastrada.innerHTML = `Avaliação: ${dataObject.avaliacao}`;
    observacaoCadastrada.innerHTML = `Observações: ${dataObject.observacoes}`;
    // console.log(dataObject);
  });
}
relatorio();
