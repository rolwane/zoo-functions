const data = require('../data/zoo_data');

function categorizedByLocation({ species }) {
  const objBase = { NE: [], NW: [], SE: [], SW: [] };
  return species.reduce((acc, specie) => {
    acc[specie.location].push(specie.name);
    return acc;
  }, objBase);
}

function categorizedWithNames({ species }, { sorted }) {
  const objBase = { NE: [], NW: [], SE: [], SW: [] };
  return species.reduce((objeto, specie) => {
    const objetoInterno = {};
    objetoInterno[specie.name] = specie.residents.map((animal) => animal.name);
    if (sorted) objetoInterno[specie.name].sort();
    objeto[specie.location].push(objetoInterno);
    return objeto;
  }, objBase);
}

function categorizedBySex({ species }, { sex, sorted }) {
  const objBase = { NE: [], NW: [], SE: [], SW: [] };
  return species.reduce((objeto, specie) => {
    const objetoInterno = {};
    objetoInterno[specie.name] = [];
    specie.residents.forEach((animal) => {
      if (animal.sex === sex) objetoInterno[specie.name].push(animal.name);
    });
    if (sorted) objetoInterno[specie.name].sort();
    objeto[specie.location].push(objetoInterno);
    return objeto;
  }, objBase);
}

function getAnimalMap(options) {
  if (options === undefined || options.includeNames !== true) return categorizedByLocation(data);
  if (options.sex) return categorizedBySex(data, options);
  return categorizedWithNames(data, options);
}

module.exports = getAnimalMap;
