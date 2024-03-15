// Получаю слайды, кнопки и счетчик
let slides = document.querySelectorAll(
    '.tournament-slider-one, .tournament-slider-two'
)
let slideIndex = 1
let prev = document.getElementById('carousel__btn-left')
let next = document.getElementById('carousel__btn-right')
let counter = document.querySelector('.carousel-counter span')
let counterDigits = counter.textContent.split('/') // разделить текст на две части

// Показ слайдов
showSlides(slideIndex, 'slide-in-right')

// Функция добавляет слайды
function plusSlides(n, direction) {
    slideIndex += n

    // Если показывается последний слайд возвращаю к первому для цикла
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    showSlides(slideIndex, direction)
}

function showSlides(n, direction) {
    if (n > slides.length) {
        slideIndex = slides.length
    }
    if (n < 1) {
        slideIndex = 1
    }

    // Скрываю все слайды
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
        slides[i].classList.remove('slide-in-left', 'slide-in-right')
    }

    // Показываю активный слайд
    slides[slideIndex - 1].style.display = 'flex'
    slides[slideIndex - 1].classList.add(direction)

    if (slideIndex == 1) {
        // Делаю вторую цифру полупрозрачной
        counter.innerHTML = `${counterDigits[0]}/<span style="opacity: 0.5;">${counterDigits[1]}</span>`
    } else if (slideIndex == slides.length) {
        // Делаю первую цифру полупрозрачной
        counter.innerHTML = `<span style="opacity: 0.5;">${counterDigits[0]}</span>/${counterDigits[1]}`
    } else {
        counter.textContent = counterDigits.join('/')
    }

    // Управление состоянием кнопок слайдами
    if (slideIndex >= slides.length) {
        next.style.pointerEvents = 'none'
        prev.style.pointerEvents = 'auto'
        document
            .getElementById('btn-carousel-right')
            .querySelector('circle')
            .setAttribute('fill', '#D6D6D6')
        document
            .getElementById('btn-carousel')
            .querySelector('circle')
            .setAttribute('fill', '#313131')
    } else if (slideIndex <= 1) {
        prev.style.pointerEvents = 'none'
        next.style.pointerEvents = 'auto'
        document
            .getElementById('btn-carousel')
            .querySelector('circle')
            .setAttribute('fill', '#D6D6D6')
        document
            .getElementById('btn-carousel-right')
            .querySelector('circle')
            .setAttribute('fill', '#313131')
    } else {
        prev.style.pointerEvents = 'auto'
        next.style.pointerEvents = 'auto'
        document
            .getElementById('btn-carousel')
            .querySelector('circle')
            .setAttribute('fill', '#313131')
        document
            .getElementById('btn-carousel-right')
            .querySelector('circle')
            .setAttribute('fill', '#313131')
    }
}

// Анимация справа налево по клику влево
prev.onclick = function () {
    plusSlides(-1, 'slide-in-left')
}
// Анимация слева направо по клику вправо
next.onclick = function () {
    plusSlides(1, 'slide-in-right')
}

// Автоматическое переключение слайдов каждые 4 секунды
setInterval(function () {
    plusSlides(1, 'slide-in-right')
}, 4000)
