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

module.exports = { isManager, getRelatedEmployees };
