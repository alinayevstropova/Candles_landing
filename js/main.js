const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click',()=>{
    menuMobile.classList.toggle('menu--open');
})

const swiperOne = new Swiper('.feedback__slider', {
    loop:false,
    pagination: {
      el: '.swiper-pagination',
    },
});

 const swiperTwo = new Swiper('.certificates__slider', {
    loop: true,

    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        640:{
            slidesPerView: 3,
        },
        480:{
            slidesPerView: 2,
        },
        360:{
            slidesPerView: 1,
        }
    },
});

const answers = document.querySelector('.answers');
const answersTitles = answers.querySelectorAll('.answers__title');

answersTitles.forEach.call(answersTitles, function (answerTitle) {
    answerTitle.addEventListener('click', function(){
        const currentText = answerTitle.parentElement.querySelector('.answers__text');
        answerTitle.classList.toggle('answers__title--active');
        currentText.classList.toggle('answers__text--visible');

        if(currentText.classList.contains('answers__text--visible')){
            currentText.style.maxHeight = currentText.scrollHeight + 'px'
        } else{
            currentText.style.maxHeight = null
        }
    })
})
