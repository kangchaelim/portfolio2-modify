//   circle
const circle = document.querySelector('#circle');
console.log(circle);
const anamelwareTxt = document.querySelector('#anamelware-txt');
console.log(anamelwareTxt);

anamelwareTxt.addEventListener('mouseenter', ()=>{
  circle.animate(
    [
       {transform: 'rotate(0)'},
       {transform: 'rotate(360deg)'}
    ],
    {
        duration :20000
    });
});
