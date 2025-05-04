// Função para redirecionar para uma nova página
function irPara(pagina) {
    window.location.href = pagina;  // Redireciona para a página fornecida como parâmetro
}
function enivar() {
    // Você pode adicionar uma lógica de logout aqui, como limpar o localStorage ou sessionStorage
    alert("Envio de email realizado com sucesso!");
    window.location.href = 'login.html';  // Redireciona para a página de login ou outra página desejada
}
