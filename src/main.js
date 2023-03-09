import { filtrarDiretor , filtrarPersonagens , filmesOrdenadosAZ, filmesOrdenadosZA} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

export const filmes = data.films;

const mostrarCard = document.querySelector(".cards");
const mostrarBusca = document.querySelector(".busca");

function mostrarFilmes(listaDeFilmes){
  mostrarCard.innerHTML = ""
  listaDeFilmes.forEach(film => {
    mostrarCard.innerHTML += `
    <div id="${film.id}" class="card">
    <image class="card__image" src="${film.poster}">
    <h3 class="card__title">${film.title}</h3>
    <h2 class="card__fist-information">Diretor: ${film.director}</h2>
    <h2 class="card__second-information">Ano: ${film.release_date}</h2>
    <button class="botao card__personagens" id="${film.title}">Personagens</button>
    </div>
    `
  });
}

mostrarFilmes(filmes);

function mostrarPersonagens(event){
  const filme = filtrarPersonagens(event.target.id)
  mostrarBusca.innerHTML = `
  <a class="buttonlink" type="button" href="index2.html">Voltar</a>
  <select id="sort-select">
    <option value="ordenar" selected hidden>Ordenar</option>
    <option value="a-z">A-Z</option>
    <option value="z-a">Z-A</option>
    <option value=""></option>
    <option value=""></option>
  </select>

  <select name="filter-select">
    <option value="filtrar" selected hidden>Filtrar</option>
    <option value="Male">Masculino</option>
    <option value="Female">Feminino</option>
    <option value="Unknown">Desconhecido</option>
  </select>`
  mostrarCard.innerHTML = ""
  filme[0].people.forEach(filme => {
    mostrarCard.innerHTML += `
      <div class="card">
      <image class="card__image" src="${filme.img}">
      <h3 class="card__title">${filme.name}</h3>
      <h3 class="card__first-information">Idade : ${filme.age}</h3>
      <h3 class="card__second-information">Gênero : ${filme.gender}</h3>
      <h3 class="card__third-information">Espécie : ${filme.specie}</h3>
      </div>`
  })
}



const btnPeople = document.querySelector(".card__personagens");
const listaDeBtnPersonagens = document.querySelectorAll(".card__personagens");

let contador = 0

while (contador < listaDeBtnPersonagens.length) {
  listaDeBtnPersonagens[contador].onclick = mostrarPersonagens;
  contador += 1
}


//btnPeople.addEventListener("click", showPeople);

//quando clicar em personagens
//o html ficar vazio 
//aparecer todos os personagens do filme na tela 

//const btnLocations = document.querySelector(".btn-locations");

/*function showLocations(){
  mostrarCard.innerHTML = "";
  for (let i=0; i < data.films.length ; i++) {
    for (let j = 0; j < data.films[i].locations.length; j++) {
      mostrarCard.innerHTML += `
    <div class="card">
    <image class="card__image" src="${data.films[i].locations[j].img}">
    <h3 class="card__title">${data.films[i].locations[j].name}</h3>
    </div>
    `
    }
  }
}

btnLocations.addEventListener("click", showLocations);


const btnVehicles = document.querySelector(".btn-vehicles");

function showVehicles(){
  mostrarCard.innerHTML = "";
  for (let i=0; i < data.films.length ; i++) {
    for (let j = 0; j < data.films[i].vehicles.length; j++){
      mostrarCard.innerHTML += `
    <div class="card">
    <image class="card__image" src="${data.films[i].vehicles[j].img}">
    <h3 class="card__title">${data.films[i].vehicles[j].name}</h3>
    </div>
    `
    }
  }
}

btnVehicles.addEventListener("click", showVehicles);


const openModal = document.querySelectorAll(".card");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

openModal.forEach((el) => {
  el.addEventListener("click", () => {
    modal.classList.remove("hide");
    fade.classList.remove("hide");
  });
});

[modal, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

const showModal = document.querySelector(".modal-body");

function innerModal(event){
  const idFilme = mostrarFilmes(event.target.id)
  showModal.innerHTML = ""
  idFilme.forEach(filme => {
    showModal.innerHTML += `
    <div class="modal-body">
    <p class="modal__description">Sobre: ${filme.description}</p>
    </div>
    `
  });
}

innerModal();
*/


const seletorFiltroDiretor = document.querySelector("#filter-select");
const seletorOrdenacao = document.querySelector("#sort-select");

// function ordenarAZ(){
//   const filmesOrdenados = filmes.sort((a, b) => {
//     return a.title.localeCompare(b.title)})
//   mostrarFilmes(filmesOrdenados)
// }

// function ordenarZA(){
//   const filmesOrdenados = filmes.sort((a, b) => {
//     return b.title.localeCompare(a.title)})
//   mostrarFilmes(filmesOrdenados)
// }

function selecionarOrdem(){
  const optionValue = seletorOrdenacao.options[seletorOrdenacao.selectedIndex];
  const value = optionValue.value;
  if (value === "a-z"){
    const ordenarAZ = filmesOrdenadosAZ
    mostrarFilmes(ordenarAZ)
  }
  if (value === "z-a"){
    const ordenarZA = filmesOrdenadosZA
    mostrarFilmes(ordenarZA)
  }
}

seletorOrdenacao.addEventListener("change", selecionarOrdem);

function selecionarFiltro(){
  const optionValue = seletorFiltroDiretor.options[seletorFiltroDiretor.selectedIndex];
  const value = optionValue.value;
  if (value === "Hayao-Miyazaki"){
    const filmesHayao = filtrarDiretor("Hayao Miyazaki")
    mostrarFilmes(filmesHayao);
  }
  if (value === "Goro-Miyazaki"){
    const filmesGoro = filtrarDiretor("Gorō Miyazaki")
    mostrarFilmes(filmesGoro);
  }
  if (value === "Isao Takahata"){
    const filmesIsao = filtrarDiretor("Isao Takahata")
    mostrarFilmes(filmesIsao);
  }

}

seletorFiltroDiretor.addEventListener("change", selecionarFiltro);

