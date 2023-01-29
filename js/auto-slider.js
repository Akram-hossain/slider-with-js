// slider js start 

document.querySelectorAll('button')[0].style.display = "none";
document.querySelectorAll('button')[1].style.display = "none";

const sliderElements = [...document.querySelectorAll('.slider-element')]; 

let count = 1;

setInterval(() => {
    count++;
    
    let currentElement = document.querySelector('.current');
    currentElement.classList.remove('current');

    if (count > sliderElements.length) {
        sliderElements[0].classList.add('current');
        count = 1;
    }else{
        currentElement.nextElementSibling.classList.add('current');
    }

}, 2000);
