import { filmes } from "./main.js";

export const filtrarDiretor = (nomeDoDiretor) => {
  return filmes.filter(films => films.director === nomeDoDiretor);
};

export const filtrarPersonagens = (nomeDoFilme) => {
  return filmes.filter(films => films.title === nomeDoFilme);
};

export const filmesOrdenadosAZ = () => {
  return filmes.sort(a, b => a.title.localeCompare(b.title))
};

export const filmesOrdenadosZA = () => {
  return filmes.sort(a, b => b.title.localeCompare(a.title))
};

// function ordenarAZ(){
//   const filmesOrdenados = filmes.sort((a, b) => {
//     return a
//   mostrarFilmes(filmesOrdenados)
// }
// function ordenarZA(){
//   const filmesOrdenados = filmes.sort((a, b) => {
//     return b.title.localeCompare(a.title)})
//   mostrarFilmes(filmesOrdenados)
// }