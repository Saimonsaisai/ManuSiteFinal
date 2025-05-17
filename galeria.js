// Adicione este script no final do body para controlar a rotação
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const leftBtn = document.querySelector('.carousel-control-button.left input');
    const rightBtn = document.querySelector('.carousel-control-button.right input');
    
    let currentIndex = 0;
    const visibleItems = 3;
    
    function updateCarousel() {
        items.forEach((item, index) => {
            const newIndex = (index - currentIndex + items.length) % items.length;
            item.style.setProperty('--_index', newIndex + 1);
            item.style.opacity = newIndex < visibleItems ? '1' : '0.5';
        });
    }
    
    leftBtn.addEventListener('change', function() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });
    
    rightBtn.addEventListener('change', function() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });
    
    // Inicializa o carrossel
    updateCarousel();
});