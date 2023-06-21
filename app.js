const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');
const reader = new Reader();

async function main() {
   const data = await reader.Read('./dumb_file.csv');
   const processedData = Processor.Process(data);

   const users = new Table(processedData);

   const html = await HtmlParser.Parse(users);
   console.log(html);
}

main();