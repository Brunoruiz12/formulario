document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
  
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Mensagem:', message);
  
    // Resetar o formulário
    document.getElementById('contact-form').reset();
  });
  