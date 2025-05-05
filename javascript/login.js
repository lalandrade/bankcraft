function validarLogin() {
    const email = document.getElementById('login-user').value;
    const senha = document.getElementById('login-password').value;
  
    if (email === 'email@gmail.com' && senha === '1234') {
      window.location.href = 'menu.html';
      return false;
    } else {
      alert('Email ou senha incorretos.');
      return false;
    }
  }
  