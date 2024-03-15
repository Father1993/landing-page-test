// Получаю слайды, кнопки и счетчик
let mobileSlides = document.querySelectorAll('.mobile-slider__card')
let mobilePrevButton = document.querySelector('#mobile-slider-left')
let mobileNextButton = document.querySelector('#mobile-slider-right')
let mobileSlideIndicators = document.querySelectorAll('.slide-indicator')

let mobileCurrentSlide = 0

// Функция для обновления индикаторов "точек"
function updateSlideIndicator() {
    // Прохожу по всем циклом
    mobileSlideIndicators.forEach((indicator, index) => {
        // Удаляю класс активности у всех индикаторов
        indicator.classList.remove('active')
        // Добавляю класс активности индикатору текущего слайда
        if (index === mobileCurrentSlide) {
            indicator.classList.add('active')
        }
    })
}

// Функция для показа слайдера
function mobileShowSlide(slideIndex, direction) {
    mobileSlides.forEach((slide, index) => {
        // Отображаю слайд, если его индекс соответствует указанному
        // Иначе скрываем слайд
        slide.style.display = index === slideIndex ? 'block' : 'none'
        slide.classList.remove('slide-in-right', 'slide-in-left') // удалить предыдущие классы анимации
        if (index === slideIndex) {
            // Добавляю новый класс анимации в зависимости от направления перехода
            slide.classList.add(`slide-in-${direction}`)
        }
    })

    // Управления видимостью кнопок
    mobilePrevButton.style.opacity = mobileCurrentSlide === 0 ? '0.5' : '1'
    mobilePrevButton.style.pointerEvents =
        mobileCurrentSlide === 0 ? 'none' : 'auto'
    mobileNextButton.style.opacity =
        mobileCurrentSlide === mobileSlides.length - 1 ? '0.5' : '1'
    mobileNextButton.style.pointerEvents =
        mobileCurrentSlide === mobileSlides.length - 1 ? 'none' : 'auto'

    // Обновляю индикаторы
    updateSlideIndicator()
}

// Обработчик события клика по кнопке влево для простоты использую условные операторы
mobilePrevButton.addEventListener('click', () => {
    let prevSlide = mobileCurrentSlide
    mobileCurrentSlide =
        mobileCurrentSlide > 0
            ? mobileCurrentSlide - 1
            : mobileSlides.length - 1
    mobileShowSlide(
        mobileCurrentSlide,
        prevSlide < mobileCurrentSlide ? 'right' : 'left'
    )
})

// Обработчик события клика по кнопке вправо
mobileNextButton.addEventListener('click', () => {
    let prevSlide = mobileCurrentSlide
    mobileCurrentSlide =
        mobileCurrentSlide < mobileSlides.length - 1
            ? mobileCurrentSlide + 1
            : 0
    mobileShowSlide(
        mobileCurrentSlide,
        prevSlide < mobileCurrentSlide ? 'right' : 'left'
    )
})

// Снова обновляю индикаторы
updateSlideIndicator()
