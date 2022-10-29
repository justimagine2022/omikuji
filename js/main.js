'use strict';

{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');

  result.textContent = '';

  btn.addEventListener('click', () => {
    const results = ['大吉', '吉', '中吉', '末吉', '小吉', '凶', '大凶', 'みのむし'];
    const n = Math.floor(Math.random() * results.length);
    result.textContent = results[n];
  });
}