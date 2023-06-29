'use strict';

{
const button = document.querySelector('button');
const result = document.querySelector('p');

const results =['大凶', '大吉', '吉', '凶', '中吉', '小吉', '末吉'];

function draw() {
  const n = Math.random();
  const m = Math.floor(Math.random() * 4) + 3;
  
  if (n < 0.01) {
    result.textContent = results[0];
  } else if (n < 0.16) {
    result.textContent = results[1];
  } else if (n < 0.35) {
    result.textContent = results[2];
  } else if (n < 0.29) {
    result.textContent = results[3];
  } else {
    result.textContent = results[m];
  }
}

button.addEventListener('click', () => {
  draw();
});

}
