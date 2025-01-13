// Menu lateral
const menuBtn = document.querySelector(".menu-btn"); // Selecionando o botão do menu
const menuLateral = document.querySelector(".menu-lateral"); // Selecionando o menu lateral
const menuItems = menuLateral.querySelectorAll("a"); // Selecionando os itens dentro do menu lateral

// Função para abrir e fechar o menu
menuBtn.addEventListener("click", () => {
    menuLateral.classList.toggle("active"); // Adiciona ou remove a classe "active"
});

// Função para fechar o menu ao clicar nos itens
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuLateral.classList.remove("active"); // Fecha o menu quando um item é clicado
    });
});

function openModal(title, description) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('serviceModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('serviceModal').style.display = 'none';
}

// Fechar o modal clicando fora dele
window.onclick = function (event) {
    const modal = document.getElementById('serviceModal');
    if (event.target === modal) {
        closeModal();
    }
};

// Scroll Carousel
function scrollCarousel(direction) {
    const carousel = document.querySelector('.services-carousel');
    const scrollAmount = carousel.offsetWidth / 3; // Tamanho de um item (3 por vez)
    carousel.scrollBy({
        left: scrollAmount * direction,
        behavior: 'smooth',
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll(".testimonial");
    let current = 0;

    function showNextTestimonial() {
        // Remove a classe 'active' do depoimento atual
        testimonials[current].classList.remove("active");
        testimonials[current].classList.add("hidden");

        // Atualiza o índice para o próximo depoimento
        current = (current + 1) % testimonials.length;

        // Adiciona a classe 'active' ao próximo depoimento
        testimonials[current].classList.remove("hidden");
        testimonials[current].classList.add("active");
    }

    // Inicializa o primeiro depoimento
    testimonials[current].classList.add("active");

    // Alterna depoimentos a cada 3 segundos
    setInterval(showNextTestimonial, 5000);
});


