const Reader = require('./Reader');
const reader = new Reader();

const data = reader.Read('../dumb_file.csv');
console.log(data)
