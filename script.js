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