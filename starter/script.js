'use strict';

//DOM MANIPULATION

console.log(document.querySelector('.message').textContent);
// selecting class and texts elements in HTML PAGE

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;

// --
