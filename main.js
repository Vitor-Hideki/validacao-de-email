
// Seleciona o elemento de entrada de texto pelo ID 'emailaddress'
let inputElement = document.getElementById('emailaddress');

// Adiciona um evento de foco ao elemento de entrada de texto
inputElement.addEventListener('focus', function () {
  // Remove a borda de foco padrão do elemento
  this.style.outline = 'none';
});

// Função de validação de e-mail
function validacaoEmail(event) {
  // Impede o comportamento padrão do evento (no caso, envio de formulário)
  event.preventDefault();

  // Obtém o valor do campo de e-mail
  let validacao = document.getElementById('emailaddress');
  // Separa o nome do usuário e o domínio do e-mail
  let usuario = validacao.value.substring(0, validacao.value.indexOf("@"));
  let dominio = validacao.value.substring(validacao.value.indexOf("@") + 1, validacao.value.length);

  // Verifica se o e-mail é válido
  if ((usuario.length >= 1) &&
    (dominio.length >= 1) &&
    (usuario.search("@") == -1) &&
    (dominio.search("@") == -1) &&
    (usuario.search(" ") == -1) &&
    (dominio.search(" ") == -1) &&
    (dominio.search(".") != -1) &&
    (dominio.indexOf(".") >= 1) &&
    (dominio.lastIndexOf(".") < dominio.length - 1)) {

    // Se o e-mail for válido, restaura o estilo do campo de entrada
    document.querySelector(".input-email").style.backgroundColor = "initial";

    // Função para passar o valor do e-mail para a próxima página
    function passarValor() {
      let valor = document.getElementById('emailaddress').value;
      window.location.href = "./confirmation.html?valor=" + encodeURIComponent(valor);
    }
    passarValor()
  }

  // Se o e-mail for inválido
  else {
    // Seleciona o elemento do campo de entrada e a mensagem de erro
    let borda = document.querySelector(".input-email");
    let emailrequerid = document.querySelector(".invalid");

    // Função para aplicar estilo de e-mail inválido
    function emailInvalido() {
      borda.style.borderColor = "hsl(4, 100%, 67%)";
      borda.style.backgroundColor = "hsl(4, 100%, 90%)";
      borda.style.color = "hsl(4, 100%, 67%)";
      emailrequerid.style = "display:flex";
    }

    // Chama a função para estilizar o e-mail inválido
    emailInvalido();
  }
}

