const Reader = require('./Reader');
const Processor = require('./Processor');
const reader = new Reader();

async function main() {
   const data = await reader.Read('../dumb_file.csv');
   const processedData = Processor.Process(data);
}

main();