export const filtrarDiretor = (dados, nomeDoDiretor) => {
  return dados.filter(films => films.director === nomeDoDiretor);
};

export const filtrarPersonagens = (dados, nomeDoFilme) => {
  return dados.filter(films => films.title === nomeDoFilme);
};

export const filmesOrdenadosAZ = (filmes) => {
  return filmes.sort((a, b) => a.title.localeCompare(b.title))
};

export const filmesOrdenadosZA = (filmes) => {
  return filmes.sort((a, b) => b.title.localeCompare(a.title))
};

export const calculo = (percentual, total) => {
  const resultado = (percentual/total)*100
  return resultado.toFixed(2);
};