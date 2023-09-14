window.addEventListener('scroll', function() {
   let header = document.querySelector('.header');
   console.log('hello from page')
   header.classList.toggle('header--sticky', window.scrollY > 0);
})


const burger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu__list');
const menuItems = menu.querySelectorAll('.menu__list-item');
const menuLinks = menu.querySelectorAll('.menu__list-link');

burger.addEventListener('click', () => {
   burger.classList.toggle('menu__burger--active');
   menu.classList.toggle('menu__list--open');
   document.body.classList.toggle('locked');
});
menuLinks.forEach(link => {
   link.addEventListener('click', () => {
      if (burger.classList.contains('menu__burger--active')) {
       burger.classList.remove('menu__burger--active');
       menu.classList.remove('menu__list--open');
       document.body.classList.remove('locked');
     }
   });
});