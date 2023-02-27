import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);


//console.log(data.films[0].people[0].name)

/*for (let i=0; i < data.films.length ; i++) {
  console.log(data.films[i].title);
  const mostrarCard = document.querySelector(".cards");
  mostrarCard.innerHTML += data.films[i].title
}

const cards = data.films

function imagensDosFilmes(){
  document.querySelector(".cards").innerHTML
}

cards.map(imagensDosFilmes)
*/

const mostrarCard = document.querySelector(".cards");

function showCards(listaDeFilmes){
  listaDeFilmes.forEach(film => {
    mostrarCard.innerHTML += `
    <div class="card">
    <image class="card__image" src="${film.poster}">
    <h3 class="card__title">${film.title}</h3>`
  });
}

showCards(data.films);