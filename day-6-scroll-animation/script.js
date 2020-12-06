const boxes = document.querySelectorAll('.box');

const checkBoxes = () => {
  const trigger = window.innerHeight /5 * 4;
  boxes.forEach((box)=>{
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < trigger) {
      box.classList.add('show');
    }
    else {
      box.classList.remove('show');
    }
  })
}
checkBoxes()
window.addEventListener('scroll', checkBoxes)