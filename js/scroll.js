// 솨라락
const section = document.querySelectorAll('body > section');
console.log(section);
const pot = document.querySelectorAll('#brand>img');
console.log(pot);
const imgBox = document.querySelectorAll('#marbling-imgbox>div');
console.log(imgBox);

console.log(section[3].children[0]);
console.log(section[3].children[1]);

// const itemBox = document.querySelectorAll('#items > div');
// console.log(itemBox);


window.addEventListener('scroll', ()=>{
  console.log(scrollY);

  if(scrollY >= 250){
    section[0].style.opacity = 1;
    section[0].style.marginTop = '0';
    for(let i = 0; i < pot.length; i++){
      setInterval(()=>{
        pot[i].classList.replace('trans-scale-2', 'trans-scale-1');
        pot[i].classList.replace('opa-0', 'opa-1');
      }, (500) * (i+1));
    }
  }
  if(scrollY >= 1440){
    section[1].style.opacity = 1;
    section[1].style.marginTop = '0';
  }
  if(scrollY >= 2150){
    section[2].style.opacity = 1;
    section[2].style.marginTop = '0';
    for(let i = 0; i < imgBox.length; i++){
      setInterval(()=>{
        imgBox[i].classList.replace('opa-0', 'opa-1');
      }, (500) * (i+1));
    }
  }
  if(scrollY >= 2750){
    section[3].style.opacity = 1;
    section[3].style.marginTop = '-10vh';
    for(let i = 0; i < section[3].children.length; i++){
      setInterval(()=>{
        section[3].children[i].classList.replace('item', 'itemRe');
      }, (1000) * (i+1));
    }

    // section[3].children[0].classList.remove('item');
    // section[3].children[1].classList.remove('item');

    // for(let i = 0; i < imgBox.length; i++){
    //   setInterval(()=>{
    //     itemBox[i].classList.replace('opa-0', 'opa-1');
    //   }, (500) * (i+1));
    // }
  }

  if(scrollY >= 3900){
    section[4].style.opacity = 1;
    section[4].style.marginTop = '0';
  }
});