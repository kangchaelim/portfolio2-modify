// description & shop
const button = document.querySelectorAll('body .button');
console.log(button);
const shopNow = document.querySelectorAll('body .shop-now');
console.log(shopNow);
const plateTxt = document.querySelectorAll('body .plateTxt');
console.log(plateTxt);

for(let k = 0; k<button.length ; k++){
    button[k].addEventListener('mouseenter', function(){
      plateTxt[k].classList.replace('hidden','block');
      shopNow[k].classList.replace('hidden', 'block')
    });
    
  }
  
  for(let k = 0; k<button.length ; k++){
    button[k].addEventListener('mouseleave', function(){
      plateTxt[k].classList.replace('block', 'hidden');
      shopNow[k].classList.replace('block', 'hidden')
    });
  }

//   circle
const circle = document.querySelector('#circle');
console.log(circle);

circle.animate(
    [
       {transform: 'rotate(0)'},
       {transform: 'rotate(360deg)'}
    ],
    {
        duration :20000,
        iterations : Infinity
    });

const circleOne = document.querySelector('#circle1');
console.log(circleOne);

circleOne.animate(
    [
       {transform: 'rotate(0)'},
       {transform: 'rotate(360deg)'}
    ],
    {
        duration :20000,
        iterations : Infinity
    });

const circleTwo = document.querySelector('#circle2');
console.log(circleTwo);

circleTwo.animate(
    [
       {transform: 'rotate(0)'},
       {transform: 'rotate(360deg)'}
    ],
    {
        duration :20000,
        iterations : Infinity
    });