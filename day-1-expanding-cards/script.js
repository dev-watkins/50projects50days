const panels = document.querySelectorAll('.panel');

const setActive = (el) => {
  el.classList.add('active');
}

const setInactive = () => {
  panels.forEach((panel)=>{
    if(panel.classList.contains('active')) panel.classList.remove('active');    
  });
}

const handleClick = ({target}) => {
  setInactive();
  setActive(target);
}

panels.forEach(panel=>{
  panel.addEventListener('click', handleClick);
})
