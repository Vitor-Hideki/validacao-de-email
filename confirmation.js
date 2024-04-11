window.onload = function () {
  // Cria uma nova instância de URL usando a URL atual da janela
  const enderecoUrl = new URL(window.location.href);
  // Obtém o valor do parâmetro 'valor' da URL
  const valor = enderecoUrl.searchParams.get("valor");
  // Define o valor obtido no elemento HTML com o ID 'email-confirmed'
  document.getElementById('email-confirmed').innerHTML = valor;
}

// Função para redirecionar o usuário de volta para a página inicial
function voltar() {
  // Redireciona a janela atual para 'index.html'
  window.location.href = './index.html'
}