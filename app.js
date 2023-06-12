const Reader = require('./Reader');
const reader = new Reader();

async function main() {
   const data = await reader.Read('../dumb_file.csv');
}

main();