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