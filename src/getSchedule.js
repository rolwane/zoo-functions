const data = require('../data/zoo_data');

const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const objBase = {
  Tuesday: {
    officeHour: '',
    exhibition: [],
  },
  Wednesday: {
    officeHour: '',
    exhibition: [],
  },
  Thursday: {
    officeHour: '',
    exhibition: [],
  },
  Friday: {
    officeHour: '',
    exhibition: [],
  },
  Saturday: {
    officeHour: '',
    exhibition: [],
  },
  Sunday: {
    officeHour: '',
    exhibition: [],
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

function getScheduleAllDays({ species, hours }) {
  const objeto = { ...objBase };
  days.forEach((day) => {
    const speciesOnDay = species.filter((specie) => specie.availability.includes(day));
    objeto[day].exhibition = speciesOnDay.map((animal) => animal.name);
    objeto[day].officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
  });
  return objeto;
}

function checkIsAnimal({ species }, scheduleTarget) {
  return species.some((specie) => specie.name === scheduleTarget);
}

function checkIsDay(scheduleTarget) {
  return days.some((day) => day === scheduleTarget);
}

function getScheduleByAnimal({ species }, scheduleTarget) {
  const animal = species.find((specie) => specie.name === scheduleTarget);
  return animal.availability;
}

function getScheduleOnDay({ species, hours }, day) {
  const objeto = {};
  objeto[day] = { officeHour: '', exhibition: [] };
  const speciesOnDay = species.filter((specie) => specie.availability.includes(day));
  objeto[day].exhibition = speciesOnDay.map((animal) => animal.name);
  objeto[day].officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
  return objeto;
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) return getScheduleAllDays(data);
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  if (checkIsDay(scheduleTarget)) return getScheduleOnDay(data, scheduleTarget);
  if (checkIsAnimal(data, scheduleTarget)) return getScheduleByAnimal(data, scheduleTarget);
  return getScheduleAllDays(data);
}

module.exports = getSchedule;
