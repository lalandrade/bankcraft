// Função para redirecionar para uma nova página
function irPara(pagina) {
    window.location.href = pagina;  // Redireciona para a página fornecida como parâmetro
}

// Função para sair (exemplo de logout)
function sair() {
    // Você pode adicionar uma lógica de logout aqui, como limpar o localStorage ou sessionStorage
    window.location.href = 'menu.html';  // Redireciona para a página de login ou outra página desejada
}