const container = document.querySelector('.container');


window.addEventListener('load', ()=>{

    container.style.top = '550px';
    container.style.transform = 'translate(-50%, -80%)';
  // h1.style.opacity = '1';

  
});

const li = document.querySelectorAll('li');
const nav = document.querySelector('nav');

li.forEach((element) => {
  element.addEventListener('click', (e)=>{
    li.forEach((el) => {
      el.classList.remove('active')
    });

    element.classList.add('active');
    nav.style.setProperty('--left',element.offsetLeft+'px')
  });
});