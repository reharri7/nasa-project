const launches = new Map();

const launch = {
  flightNumber: 0,
  mission: '',
  rocket: '',
  launchDate: new Date(),
  destination: '',
  customer: [''],
  upcoming: true,
  success: true,
}

launches.set(launch.flightNumber, launch);

module.exports = {
  launches
};