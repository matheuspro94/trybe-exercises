// Teste 1
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
// teste
// assert.strictEqual(typeof sum, 'function');
// // Teste 1
assert.strictEqual(sum(4, 5), 9);
// // Teste 2 
assert.strictEqual(sum(0, 0), 0);
// Teste 3
assert.throws(() => {
sum(4, '5');
});
assert.throws(() => {
  sum(4, '5');
  }, /^Error: parameters must be numbers$/);