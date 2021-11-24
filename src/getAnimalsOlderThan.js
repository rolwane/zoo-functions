const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // Encontra a espécie referente ao nome passado como parâmetro.
  const specie = data.species.find((spec) => spec.name === animal);

  // Verifica se os residentes da espécie encontrada possuem a idade mínima passada.
  return specie.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
