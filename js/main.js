'use strict';

{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const results = ['大吉', '小吉', '中吉', '吉', '末吉', '凶', '大凶'];

  btn.addEventListener('click', () => {
    const n = Math.random(); //0以上1未満の数を生成する0.
    if (n < 0.01) {  //確率1%
      result.textContent = results[6];
    } else if (n < 0.05) {  //確率4% 5-1=4
      result.textContent = results[5];
    } else {  //確率95%  100-4-1=95
      result.textContent = results[Math.floor(Math.random() * 5)];
    }
    
  });
}