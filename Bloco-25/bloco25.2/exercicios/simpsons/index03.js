const fs = require('fs').promises;

const filterSimpsons = async () => {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
    
  console.log(simpsons)

  const newArray = simpsons
    .filter(simpson => simpson.id !== '10' && simpson.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));

  console.log(newArray);
}

filterSimpsons();