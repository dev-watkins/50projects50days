const tagsel = document.querySelector('.tags');
const textarea = document.getElementById('textarea');

textarea.focus();

const createTags = (val) => {
  const tags = val.split(',').map(tag=>tag.trim()).filter(tag=>tag!=='');
  tagsel.innerHTML = "";

  tags.forEach(tag => {
    const span = document.createElement('span');
    span.classList.add('tag');
    span.innerText = tag;
    tagsel.appendChild(span);
  });
}

const pickRandomTag = ()=>{
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random()*tags.length)];
}

const highlightTag = (tag)=>tag.classList.add('highlight');
const removeHighlightTag = (tag)=>tag.classList.remove('highlight');

const randomSelect = () => {
  const times = 30;

  const interval = setInterval(()=>{
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      removeHighlightTag(randomTag);
    }, 100);
  },100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times*100);
}

textarea.addEventListener('keyup',({target,key})=>{
  createTags(target.value)

  if(key==='Enter'){
    textarea.value = ''
    randomSelect()
  }
})