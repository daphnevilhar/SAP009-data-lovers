import { calculo, filmesOrdenadosAZ, filmesOrdenadosZA, filtrarDiretor , filtrarPersonagens } from '../src/data.js';
const castleInTheSky =  {
  "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
  "title": "Castle in the Sky",
  "director": "Hayao Miyazaki",
  "people": [
    {
      "name": "Pazu"
    },
    {
      "name": "Lusheeta Toel Ul Laputa"
    },
    {
      "name": "Dola"
    }
  ]
}

const graveOfTheFireflies = {
  "title": "Grave of the Fireflies",
  "director": "Isao Takahata",
  "people": [
    {
      "name": "Seita Yokokawa"
    },
    {
      "name": "Setsuko Yokokawa"
    },
    {
      "name": "Mrs. Yokokawa"
    }
  ]
}

const wisperOfTheHeart = {
  "id": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
  "title": "Whisper of the Heart",
  "director": "Yoshifumi Kondō",
  "people": [
    {
      "name": "Shizuku Tsukishima"
    },
    {
      "name": "Baron Humbert von Gikkingen"
    },
    {
      "name": "Seiji Amasawa"
    }
  ]
}

const teste = [castleInTheSky, graveOfTheFireflies, wisperOfTheHeart]

describe('filtra por diretor', () => {
  it('is a function', () => {
    expect(typeof filtrarDiretor).toBe('function');
  });

  it('returns `filtrarDiretor`', () => {
    expect(filtrarDiretor(teste, 'Hayao Miyazaki')).toEqual([castleInTheSky]);
  });
});


describe('filtrar por personagens', () => {
  it('is a function', () => {
    expect(typeof filtrarPersonagens).toBe('function');
  });

  it('returns `filtrarPersonagens`', () => {
    expect(filtrarPersonagens(teste, 'Castle in the Sky')).toEqual([castleInTheSky]);
  });
});


describe('ordena de A a Z', () => {
  it('is a function', () => {
    expect(typeof filmesOrdenadosAZ).toBe('function');
  });

  it('returns `filmesOrdenadosAZ`', () => {
    expect(filmesOrdenadosAZ(teste)).toEqual([castleInTheSky, graveOfTheFireflies, wisperOfTheHeart]);
  });
});

describe('ordena de Z a A', () => {
  it('is a function', () => {
    expect(typeof filmesOrdenadosZA).toBe('function');
  });

  it('returns `filmesOrdenadosZA`', () => {
    expect(filmesOrdenadosZA(teste)).toEqual([wisperOfTheHeart, graveOfTheFireflies, castleInTheSky]);
  });
});

describe('calcula', () => {
  it('is a function', () => {
    expect(typeof calculo).toBe('function');
  });

  it('Should return a calculation based on two numbers', () => {
    expect(calculo(5, 10)).toEqual('50.00');
    expect(calculo(2, 10)).toEqual('20.00');
  });
});
