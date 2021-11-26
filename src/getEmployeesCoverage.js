const data = require('../data/zoo_data');

function getSpecieById(id) {
  return data.species.find((specie) => specie.id === id);
}

function mountObject(employee) {
  // inicio um objeto vazio para poder popular em seguida. Esse será o objeto final a ser retornado.
  const objeto = { id: '', fullName: '', species: [], locations: [] };

  objeto.id = employee.id;
  objeto.fullName = `${employee.firstName} ${employee.lastName}`;

  employee.responsibleFor.forEach((idSpecie) => {
    const specieFound = getSpecieById(idSpecie);
    objeto.species.push(specieFound.name);
    objeto.locations.push(specieFound.location);
  });

  return objeto;
}

function getEmployee({ name, id }) {
  let dataEmployee;
  // Verifico se foi passado alguma ID, se não faço a busca pelo nome
  if (id !== undefined) {
    // Guardo na variável employee o resultado da busca pelo employee referente ao id passado.
    dataEmployee = data.employees.find((employee) => employee.id === id);
  } else {
    // Guardo na variável employee o resultado da busca pelo employee referente ao nome passado.
    dataEmployee = data.employees.find((employee) => {
      const { firstName, lastName } = employee;
      return firstName === name || lastName === name;
    });
  }
  // verifico se algum employee foi encontrado, se sim passo o objeto contendo
  // as informações do employee para a função mountObject montar o objeto final.
  if (dataEmployee !== undefined) {
    return mountObject(dataEmployee);
  }
  throw new Error('Informações inválidas');
}

function getEmployeesCoverage(options) {
  if (options === undefined) {
    return data.employees.map((employee) => getEmployee({ id: employee.id }));
  }
  return getEmployee(options);
}

module.exports = getEmployeesCoverage;
