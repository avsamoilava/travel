// Burger ===================================================================================================

const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');
const close = document.querySelector('.menu__close');
const navItems = document.querySelectorAll('.menu__item');
const burgerOverlay = document.querySelector('.header__overlay');

function closeMenu(){
    menu.classList.remove('header__menu_active');
    burgerOverlay.style.display = 'none';
}


burger.addEventListener('click', ()=> {
    menu.classList.add('header__menu_active');
    burgerOverlay.style.display = 'block';
});

close.addEventListener('click', closeMenu);

navItems.forEach(elem => elem.addEventListener('click', closeMenu));

burgerOverlay.addEventListener('click', closeMenu);


// Popup ==================================================================================================

const menuLogIn = document.querySelector('.header__button');
const form = document.querySelector('.header__popup');
const regBtn = document.querySelector('.form__register');
const logBtn = document.querySelector('.form__login');
const title = document.querySelector('.form__title');
const social = document.querySelector('.form__social');
const formBtn = document.querySelector('.form__submit');
const btnLink = document.querySelector('.form__button-link');
const footerSpan = document.querySelector('.form__footer-span');
const email = document.querySelector('input[type=email]');
const password = document.querySelector('input[type=password]');
const popupOverlay = document.querySelector('.popup__overlay');
const account = document.querySelector('.menu__item_account');



function openForm(){
    form.style.top = '170px';
    popupOverlay.style.display = 'block';
}


menuLogIn.addEventListener('click', openForm);
account.addEventListener('click', openForm);


logBtn.addEventListener('click', ()=>{
    title.innerText = 'Log in to your account';
    social.style.display = 'block';
    formBtn.innerText = 'Sign In';
    btnLink.style.display = 'block';
    footerSpan.innerText = 'Don’t have an account?';
    logBtn.style.display = 'none';
    regBtn.style.display = 'inline-block';
})

regBtn.addEventListener('click', ()=>{
    title.innerText = 'Create account';
    social.style.display = 'none';
    formBtn.innerText = 'Sign Up';
    btnLink.style.display = 'none';
    footerSpan.innerText = 'Already have an account?';
    logBtn.style.display = 'inline-block';
    regBtn.style.display = 'none';
})

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    alert(`Email: ${email.value}, password: ${password.value}`);
    email.value = '';
    password.value = '';
})

popupOverlay.addEventListener('click', ()=> {
    form.style.top = '-1000%';
    popupOverlay.style.display = 'none';
})



console.log(`1. Слайдер изображений в секции destinations +50 \n
- на десктоп варианте при клике на урезанную картинку слева или справа\n 
изображение меняется по принципу карусели (например если нажать правую \n
картинку та что была в центре на уезжает налево, а та что была видна наполовину оказывается справа). \n
Слайдер может быть как конечным так и бесконечным - данный критерий не должен влиять на оценку + 20 \n
- Три точки внизу отображают "номер слайда", то есть каждому слайду соответствует свой кружочек, который \n
становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте \n
картинка одна, но поверх нее появляются стрелочки навигации \n
(можно сделать как карусель или же затемнять кнопку если слайдер достиг края) +20
- Анимации плавного перемещения для слайдера +10
2. Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50
- логин попап соответствует верстке его закрытие происходит при клике вне попапа +25
- логин попап имеет 2 инпута (email и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными (для реализации можно использовать тег ) +25
3. Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). +25\n

Итоговая оценка - 125 \n `)
