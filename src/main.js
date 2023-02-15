import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const botaoInicio = document.getElementbyId("botao-inicio");

botaoInicio.addEventListener(click, function(){
    location.href = "index2.html";
})