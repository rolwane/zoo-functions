const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { species, employees } = data;

  // Encontro o funcionário referente a ID passada
  const employeeFound = employees.find((employee) => employee.id === id);

  // Encontro a primeira espécie que o funcionário gerencia
  const specieFound = species.find((specie) => specie.id === employeeFound.responsibleFor[0]);

  // Encontro o animal mais velho
  const olderAnimal = specieFound.residents.reduce((acc, animal) => {
    if (acc.age > animal.age) return acc;
    return animal;
  });

  return ([`${olderAnimal.name}`, `${olderAnimal.sex}`, olderAnimal.age]);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
