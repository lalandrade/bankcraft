// Função para redirecionar para uma nova página
function irPara(pagina) {
    window.location.href = pagina;  // Redireciona para a página fornecida como parâmetro
}

// Função para sair (exemplo de logout)
function sair() {
    // Você pode adicionar uma lógica de logout aqui, como limpar o localStorage ou sessionStorage
    alert("Você saiu do sistema!");
    window.location.href = 'login.html';  // Redireciona para a página de login ou outra página desejada
}

// Para inserir o nome do usuário (caso tenha algum sistema de login)
window.onload = function() {
    // Exemplo de como pegar o nome de usuário (se armazenado no localStorage, por exemplo)
    const nomeUsuario = localStorage.getItem('usuarioNome') || "Usuário"; // Substitua "usuarioNome" pela chave correta
    document.getElementById('user-name').textContent = nomeUsuario;
}
