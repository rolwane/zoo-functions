const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  return ids.map((id) => data.species.find((specie) => specie.id === id));
}

console.log(getSpeciesByIds('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'));

module.exports = getSpeciesByIds;
