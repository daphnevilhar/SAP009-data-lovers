import { filtrarDiretor , filtrarPersonagens } from '../src/data.js';


describe('filtra por diretor', () => {
  it('is a function', () => {
    expect(typeof filtrarDiretor).toBe('function');
  });

  it('returns `filtrarDiretor`', () => {
    expect(filtrarDiretor('Hayao Miyazaki')).toEqual('Castle in the Sky');
  });
});


describe('filtrar por personagens', () => {
  it('is a function', () => {
    expect(typeof filtrarPersonagens).toBe('function');
  });

  it('returns `filtrarDiretor`', () => {
    expect(filtrarPersonagens('')).toBe('OMG');
  });
});
