// Função para rolar suavemente até a seção
function scrollToSection(id) {
    const section = document.getElementById(id);
    window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth'
    });
}

// Enviar formulário e exibir mensagem
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Formulário enviado com sucesso!');
    document.getElementById('contactForm').reset();
});
