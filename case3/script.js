document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slider-image');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const counter = document.querySelector('.slider-counter');
    
    let currentIndex = 0;
    const totalImages = images.length;
    
    // Функция для обновления отображаемого изображения
    function updateSlider() {
        // Убираем класс active у всех изображений
        images.forEach(img => img.classList.remove('active'));
        
        // Добавляем класс active текущему изображению
        images[currentIndex].classList.add('active');
        
        // Обновляем счетчик
        counter.textContent = `Изображение ${currentIndex + 1} из ${totalImages}`;
    }
    
    // Функция для перехода к следующему изображению
    function nextImage() {
        currentIndex++;
        if (currentIndex >= totalImages) {
            currentIndex = 0; // Зацикливание: после последнего идем на первое
        }
        updateSlider();
    }
    
    // Функция для перехода к предыдущему изображению
    function prevImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalImages - 1; // Зацикливание: перед первым идем на последнее
        }
        updateSlider();
    }
    
    // Добавляем обработчики событий на кнопки
    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);
    
    // Инициализация (показываем первое изображение)
    updateSlider();
});