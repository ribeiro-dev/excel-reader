const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const reader = new Reader();

async function main() {
   const data = await reader.Read('../dumb_file.csv');
   const processedData = Processor.Process(data);

   const users = new Table(processedData);
}

main();