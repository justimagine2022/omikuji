'use strict';

{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const results = ['大吉', '小吉', '中吉', '吉', '末吉', '凶', '大凶'];

  btn.addEventListener('click', () => {
    const n = Math.random(); //0以上1未満の数を生成する
    if (n < 0.05) {  //確率5%
      result.textContent = results[6];
    } else if (n < 0.2) {  //確率15% 20-5=15
      result.textContent = results[5];
    } else {  //確率80%  100-15-5=80
      result.textContent = results[Math.floor(Math.random() * 5)];
    }
    
  });
}