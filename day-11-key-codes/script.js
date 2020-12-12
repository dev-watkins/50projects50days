const insert = document.getElementById('insert');

window.addEventListener('keydown',({key, keyCode, code})=>{
  insert.innerHTML = `
  <div class="key">
  ${key === ' ' ? 'space':key}
  <small>event.key</small>
  </div>
  </div>
  <div class="key">
  ${keyCode}
  <small>event.keyCode</small>
  </div>
  <div class="key">
  ${code}
  <small>event.code</small>
  </div>
  `
})