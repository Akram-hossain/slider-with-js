// slider js start
const sliderElements = [...document.querySelectorAll('.slider-element')]; 
const prevElement = document.querySelector('.prev');
const nextElement = document.querySelector('.next');
let count = 1;

prevElement.addEventListener('click',prevSlide);
nextElement.addEventListener('click',nextSlide);

function prevSlide (){
    count--;
    const currentElement = document.querySelector('.current');
    currentElement.classList.remove('current');

    if (count < 1) { 
        sliderElements[sliderElements.length - 1 ].classList.add('current');
        count = sliderElements.length; 
    }else{
        currentElement.previousElementSibling.classList.add('current');
    }
}

function nextSlide (){
    count++;
    const currentElement = document.querySelector('.current');
    currentElement.classList.remove('current');
    
    if (count>sliderElements.length) {
        sliderElements[0].classList.add('current');
        count = 1;
    }else{
        currentElement.nextElementSibling.classList.add('current');
    }
    
}