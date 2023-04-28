const slider = document.querySelector('.slider');
const slideWrap = document.querySelector('.slider__wrapper');
const slides = document.querySelectorAll('.slider__item');
const slide = document.querySelector('.slider__item');

const prevBtn = document.querySelector('.arrows__item_prev');
const nextBtn = document.querySelector('.arrows__item_next');


let slideWidth;
let screen = window.innerWidth;

window.addEventListener('resize', (e) => {
    console.log(e);
    if (e.target.innerWidth === 620 || e.target.innerWidth === 390){
        location.reload();
    }
})


function moveLeft(width) {
    slideWrap.style.transform = `translateX(-${width}px)`;
}

function moveRight(width) {
    slideWrap.style.transform = `translateX(${width}px)`
}

//* Desktop version =============================================================================

if (screen > 620) {
    document.querySelector('#s3').addEventListener('click', () => {
        slideWidth = slide.offsetWidth + 2 * parseInt(getComputedStyle(slide, true).marginRight);
        moveLeft(slideWidth);
        document.querySelector('#s2').classList.add('left');
        document.querySelector('#b3').checked = true;
    })

    document.querySelector('#s1').addEventListener('click', () => {
        slideWidth = slide.offsetWidth + 2 * parseInt(getComputedStyle(slide, true).marginRight);
        moveRight(slideWidth);
        document.querySelector('#s2').classList.add('right');
        document.querySelector('#b1').checked = true;
    })

    document.querySelector('#s2').addEventListener('click', function () {
        if (this.classList.contains('right')) {
            slideWidth = slide.offsetWidth + 2 * parseInt(getComputedStyle(slide, true).marginRight);
            moveLeft(0.0001 * slideWidth);
            this.classList.remove('right');
            document.querySelector('#b2').checked = true;
        }

        if (this.classList.contains('left')) {
            slideWidth = slide.offsetWidth + 2 * parseInt(getComputedStyle(slide, true).marginRight);
            moveRight(0.0001 * slideWidth);
            this.classList.remove('left');
            document.querySelector('#b2').checked = true;
        }
    })
}


//* Mobile version ====================================================================================

if ( screen <= 620) {
    let position = 0;
    
    nextBtn.addEventListener('click', () => {
        slideWidth = slide.offsetWidth;

        if (position < slideWidth * 2) {
            position += slideWidth;
            slideWrap.style.left = `${-position}px`;
            if (position == 0) {
                document.querySelector('#b1').checked = true;
            }
            if (position == slideWidth) {
                document.querySelector('#b2').checked = true;
            }
            if (position == slideWidth * 2) {
                document.querySelector('#b3').checked = true;
            }
        }

    });

    prevBtn.addEventListener('click', () => {
        slideWidth = slide.offsetWidth;

        if (position > 0 && position < slideWidth * 3) {
            position -= slideWidth;
            slideWrap.style.left = `${-position}px`;
            console.log(position);
            if (position == 0) {
                document.querySelector('#b1').checked = true;
            }
            if (position == slideWidth) {
                document.querySelector('#b2').checked = true;
            }
            if (position == slideWidth * 2) {
                document.querySelector('#b3').checked = true;
            }
        }
    })
}