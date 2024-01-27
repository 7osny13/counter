let number = document.getElementById('value');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

let value = parseInt(number.textContent);

const green = getComputedStyle(document.documentElement)
.getPropertyValue('--clr-green-light');

const red = getComputedStyle(document.documentElement)
.getPropertyValue('--clr-red-dark');

const black = getComputedStyle(document.documentElement)
.getPropertyValue('--clr-black');

function increaseValue() {
    value += 1;
    number.textContent = value ;
    number.style.color = green ;
}

function decreaseValue() {
    value -= 1 ;
    number.textContent = value ;
    number.style.color = red ;
}

function resetValue() {
    value = 0;
    number.textContent = value ;
    number.style.color = black ;
}


increase.addEventListener('click' , increaseValue);
reset.addEventListener('click' , resetValue);
decrease.addEventListener('click' ,decreaseValue);
