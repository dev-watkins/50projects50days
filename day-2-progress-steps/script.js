const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

const update = () => {
  circles.forEach((circle, index) => {
    if(index<currentActive) circle.classList.add('active');
    else circle.classList.remove('active');
  });

  const actives = document.querySelectorAll('.active');
  
  const progressPercent = (actives.length - 1)/(circles.length -1 ) * 100 + '%';

  progress.style.width = progressPercent;

  if (currentActive === 1) {prev.disabled = true;}
  else if (currentActive === circles.length) {next.disabled = true;}
  else {prev.disabled = false; next.disabled = false;}
}

const moveNext = (e) => {
  currentActive += 1;

  if (currentActive > circles.length) currentActive = circles.length;
  update();
}

const movePrev = (e) => {
  currentActive -= 1;

  if (currentActive < 1) currentActive = 1;
  update();
}

next.addEventListener('click', moveNext);
prev.addEventListener('click', movePrev);