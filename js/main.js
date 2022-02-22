// description & shop now
const button = document.querySelectorAll('body .button');
console.log(button);
const shopNow = document.querySelectorAll('body .shop-now');
console.log(shopNow);
const plateTxt = document.querySelectorAll('body .plateTxt');
console.log(plateTxt);

for(let k = 0; k<button.length ; k++){
    button[k].addEventListener('mouseenter', function(){
      plateTxt[k].classList.replace('opa-0','opa-1');
      shopNow[k].classList.replace('opa-0', 'opa-1')
    });
    
  }
  
  for(let k = 0; k<button.length ; k++){
    button[k].addEventListener('mouseleave', function(){
      plateTxt[k].classList.replace('opa-1', 'opa-0');
      shopNow[k].classList.replace('opa-1', 'opa-0')
    });
  }