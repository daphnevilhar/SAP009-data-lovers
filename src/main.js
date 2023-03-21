import { filtrarDiretor , filtrarPersonagens , filmesOrdenadosAZ, filmesOrdenadosZA, calculo} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

const dados = data.films;

const mostrarCard = document.querySelector(".cards");
const mostrarBusca = document.querySelector(".busca");
const mostrarCalculo = document.querySelector(".calculo");

function mostrarFilmes(listaDeFilmes){
  mostrarCard.innerHTML = ""
  listaDeFilmes.forEach(film => {
    mostrarCard.innerHTML += `
    <div class="card">
      <image class="card__image" src="${film.poster}">
      <h3 class="card__title">${film.title}</h3>
      <h2 class="card__fist-information">Diretor: ${film.director}</h2>
      <h2 class="card__second-information">Ano: ${film.release_date}</h2>
      <button class="botao card__personagens" id="${film.title}">Personagens</button>
    </div>
    `
  });
}

mostrarFilmes(dados);

function mostrarPersonagens(event){
  const filme = filtrarPersonagens(dados, event.target.id)
  mostrarBusca.innerHTML = `
  <a class="buttonlink" type="button" href="index2.html">Voltar</a>
  <h2 class="calculo-personagens"></h2>`
  const mostrarCalculoPersonagens = document.querySelector(".calculo-personagens")
  mostrarCard.innerHTML = ""
  mostrarCalculoPersonagens.innerHTML = ""
  mostrarCalculoPersonagens.innerHTML += `Este filme tem ${filme[0].people.length} personagens`
  filme[0].people.forEach(filme => {
    mostrarCard.innerHTML += `
      <div class="card">
      <image class="card__image" src="${filme.img}">
      <h3 class="card__title">${filme.name}</h3>
      <h2 class="card__first-information">Idade : ${filme.age}</h2>
      <h2 class="card__second-information">Gênero : ${filme.gender}</h2>
      <h2 class="card__third-information-personagem">Espécie : ${filme.specie}</h2>
      </div>`
    
  })
}

const listaDeBtnPersonagens = document.querySelectorAll(".card__personagens");

function botaoDosPersonagens(){
  for(let contador = 0 ; contador < listaDeBtnPersonagens.length ; contador++){
    listaDeBtnPersonagens[contador].addEventListener("click", mostrarPersonagens);
  }
}

botaoDosPersonagens();

const seletorFiltroDiretor = document.querySelector("#filter-select");
const seletorOrdenacao = document.querySelector("#sort-select");

function selecionarOrdem(){
  mostrarCalculo.innerHTML = ""
  seletorFiltroDiretor.value = "filtrar"
  const optionValue = seletorOrdenacao.options[seletorOrdenacao.selectedIndex];
  const value = optionValue.value;
  if (value === "a-z"){
    const ordenarAZ = filmesOrdenadosAZ(dados)
    mostrarFilmes(ordenarAZ)
    const listaDeBtnPersonagensFiltrados = document.querySelectorAll(".card__personagens");
    for(let contador = 0 ; contador < listaDeBtnPersonagensFiltrados.length ; contador++){
      listaDeBtnPersonagensFiltrados[contador].addEventListener("click", mostrarPersonagens);
    }
  }
  if (value === "z-a"){
    const ordenarZA = filmesOrdenadosZA(dados)
    mostrarFilmes(ordenarZA);
    const listaDeBtnPersonagensFiltrados = document.querySelectorAll(".card__personagens");
    for(let contador = 0 ; contador < listaDeBtnPersonagensFiltrados.length ; contador++){
      listaDeBtnPersonagensFiltrados[contador].addEventListener("click", mostrarPersonagens);
    }
  }
}

seletorOrdenacao.addEventListener("change", selecionarOrdem);

function selecionarFiltro(){
  mostrarCalculo.innerHTML = ""
  seletorOrdenacao.value = "ordenar"
  const optionValue = seletorFiltroDiretor.options[seletorFiltroDiretor.selectedIndex];
  const value = optionValue.value;
  const filmes = filtrarDiretor(dados, value)
  mostrarFilmes(filmes);
  mostrarCalculo.innerHTML += ` Esse diretor dirigiu ${calculo(filmes.length, dados.length)}% dos filmes do estúdio.`;
  const listaDeBtnPersonagensFiltrados = document.querySelectorAll(".card__personagens");
  for(let contador = 0 ; contador < listaDeBtnPersonagensFiltrados.length ; contador++){
    listaDeBtnPersonagensFiltrados[contador].addEventListener("click", mostrarPersonagens);
  }
}

seletorFiltroDiretor.addEventListener("change", selecionarFiltro);
