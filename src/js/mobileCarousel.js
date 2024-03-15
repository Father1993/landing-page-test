// Получаем все слайды, кнопки и span-"счетчик"
let carouselSlides = document.querySelectorAll(
    '.tournament__participants-mobile'
)
let carouselButtonLeft = document.querySelector('#carousel__btn-left-mobile')
let carouselButtonRight = document.querySelector('#carousel__btn-right-mobile')
let carouselCounter = document.querySelector('.carousel-counter-mobile span')

// Начальный индекс слайда
let carouselCurrentIndex = 0

// Функция, которая удаляет все классы анимации со слайдов
function clearCarouselAnimationClasses() {
    carouselSlides.forEach((slide) => {
        slide.classList.remove('carousel-card-left', 'carousel-card-right')
    })
}

// Переключения на предыдущий слайд
function goToPreviousCarouselSlide() {
    // Удаляю всю анимацю со всех слайдов
    clearCarouselAnimationClasses()

    carouselSlides[carouselCurrentIndex].style.display = 'none'
    carouselCurrentIndex--
    // включить правую кнопку
    carouselButtonRight.style.opacity = '1'
    carouselButtonRight.style.pointerEvents = 'auto'

    if (carouselCurrentIndex <= 0) {
        carouselCurrentIndex = 0
        // Отключаю левую кнопку при показе первого слайда
        carouselButtonLeft.style.opacity = '0.5'
        carouselButtonLeft.style.pointerEvents = 'none'
    }

    // Показываю слайд и добавляем анимацию
    carouselSlides[carouselCurrentIndex].style.display = 'block'
    carouselSlides[carouselCurrentIndex].classList.add('carousel-card-left')
    carouselCounter.textContent = `${carouselCurrentIndex + 1}/${
        carouselSlides.length
    }`
}

// Функция для переключения на следующий слайд
function goToNextCarouselSlide() {
    // Удаляю всю анимацию со всех слайдов
    clearCarouselAnimationClasses()

    carouselSlides[carouselCurrentIndex].style.display = 'none'
    carouselCurrentIndex++
    carouselButtonLeft.style.opacity = '1'
    carouselButtonLeft.style.pointerEvents = 'auto'
    if (carouselCurrentIndex >= carouselSlides.length - 1) {
        carouselCurrentIndex = carouselSlides.length - 1
        carouselButtonRight.style.opacity = '0.5'
        carouselButtonRight.style.pointerEvents = 'none'
    }
    carouselSlides[carouselCurrentIndex].style.display = 'block'
    carouselSlides[carouselCurrentIndex].classList.add('carousel-card-right')
    carouselCounter.textContent = `${carouselCurrentIndex + 1}/${
        carouselSlides.length
    }`
}

// Добавить обработчики событий для кнопок
carouselButtonLeft.addEventListener('click', goToPreviousCarouselSlide)
carouselButtonRight.addEventListener('click', goToNextCarouselSlide)

// Скрываю все слайды и показываю первый при загрузке страницы
carouselSlides.forEach((slide, index) => {
    slide.style.display = index === 0 ? 'block' : 'none'
})

// Начальное содержимое для span
carouselCounter.textContent = `${carouselCurrentIndex + 1}/${
    carouselSlides.length
}`

// Делаю левую кнопку полупрозрачной и отключаю ее при загрузке страницы
carouselButtonLeft.style.opacity = '0.5'
carouselButtonLeft.style.pointerEvents = 'none'

// Автоматически переключаем слайды каждые 4 секунды
setInterval(goToNextCarouselSlide, 4000)
