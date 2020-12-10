const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const btnWrapper = document.getElementById('buttons');

const stopsongs = ()=>{
  sounds.forEach(sound=>{
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  })
}

sounds.forEach(sound=>{
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText= sound;
  btn.addEventListener('click',()=>{
    stopsongs();
    document.getElementById(sound).play();
  })

  btnWrapper.appendChild(btn);
})
