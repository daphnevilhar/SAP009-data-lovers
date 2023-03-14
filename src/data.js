import { dados } from "./main.js";

export const filtrarDiretor = (nomeDoDiretor) => {
  return dados.filter(films => films.director === nomeDoDiretor);
};

export const filtrarPersonagens = (nomeDoFilme) => {
  return dados.filter(films => films.title === nomeDoFilme);
};

export const filmesOrdenadosAZ = (filmes) => {
  return filmes.sort((a, b) => a.title.localeCompare(b.title))
};

export const filmesOrdenadosZA = (filmes) => {
  return filmes.sort((a, b) => b.title.localeCompare(a.title))
};

export const calculo = (filmesPorDiretor, totalDeFilmes) => {
  const resultado = (filmesPorDiretor.length/totalDeFilmes.length)*100
  return resultado;
}