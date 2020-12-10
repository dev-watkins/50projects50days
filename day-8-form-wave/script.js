const labels = document.querySelectorAll('.form-control label');

labels.forEach(label=>{
  label.innerHTML = label.innerText.split('').map((char, index)=>{
    return `<span style="transition-delay:${index*100}ms;">${char}</span>`
  }).join('');
})