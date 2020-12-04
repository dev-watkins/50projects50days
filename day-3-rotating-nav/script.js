const open = document.querySelector('#open');
const close = document.querySelector('#close');
const container = document.querySelector('.container');

const toggleNav = () => {
  container.classList.toggle('show-nav');
}

open.addEventListener('click', toggleNav)
close.addEventListener('click', toggleNav)