
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('testar se a letra retorna maiuscula', (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  })
})

