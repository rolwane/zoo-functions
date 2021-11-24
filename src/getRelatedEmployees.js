const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers.some((manegerId) => id === manegerId));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const employees = data.employees.filter((employee) => {
      const employeeManagers = employee.managers;
      return employeeManagers.some((managerIds) => managerIds === managerId);
    });
    return employees.map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
