const sum = require('../function/sum');

test('Testar a Tipagem', () => {
  expect(typeof sum).toBe('function');
});
test('Testar se retorna 9', () => {
  expect(sum(4, 5)).toBe(9);
});
test('Testar se retorna ZERO', () => {
  expect(sum(0, 0)).toBe(0);
});
test('Testa a função SUM quando é passada uma string como parâmetro', () => {
  expect(() => {
    sum(4, '5').toThrow()
  })
});
test('Teste mensagem erro "parameters must be numbers"', () => {
  expect(() => {
    sum(4, '5').toThrow(/parameters must be numbers/);
  });
});
