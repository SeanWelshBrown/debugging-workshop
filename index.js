document.addEventListener('DOMContentLoaded', () => {
// START OF CODE
  
  /*** DOM ELEMENTS ***/
  const form = document.getElementById('joke-form');
  const jokeList = document.getElementById('joke-list');
  let username;

  /*** EVENT LISTENER(S) ***/
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    username = event.target["user-input"].value;
    if(username === "") return;
    fetchJoke();
  })

  /*** FETCH(ES) ***/
  function fetchJoke(){
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => handleJokeRender(jokeData.joke));
  }

  /*** RENDER FUNCTION(S) ***/
  function handleJokeRender(joke) {
    const newJokeLi = document.createElement('li');
    newJokeLi.innerHTML = `
    <span class="username">${username} says:</span> ${joke}
    `;
    jokeList.appendChild(newJokeLi);
    form.reset();
  };

// END DOM CONTENT LOADED  
})
