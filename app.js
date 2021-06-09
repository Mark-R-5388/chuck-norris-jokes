const btn = document.querySelector('.btn');
const jokeSection = document.querySelector('.joke-section');
const url = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', async () => {
  try {
    const data = await fetch(url);
    const response = await data.json();
    displayData(response);
  } catch (error) {
    console.log(error);
  }
});

function displayData({ value: joke }) {
  jokeSection.classList.add('visiblity');
  jokeSection.textContent = joke;
}
