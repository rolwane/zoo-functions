const data = require('../data/zoo_data');

function countAnimals(species) {
  if (species === undefined) {
    return data.species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  const findAnimals = data.species.find((specie) => specie.name === species.specie).residents;
  if (species.sex === undefined) return findAnimals.length;
  return findAnimals.reduce((acc, animal) => {
    const paramSex = species.sex;
    return animal.sex === paramSex ? acc + 1 : acc;
  }, 0);
}

module.exports = countAnimals;
