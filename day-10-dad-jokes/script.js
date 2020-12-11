const btn = document.getElementById('jokeBtn');
const jokeBody = document.getElementById('joke');

const endpoint = 'https://icanhazdadjoke.com/';

const getJoke = async () =>{
  const res = await fetch(endpoint,{headers:{'Accept':'application/json'}});
  const {joke} = await res.json();

  jokeBody.innerText = joke;
}

btn.addEventListener('click', getJoke)

getJoke()