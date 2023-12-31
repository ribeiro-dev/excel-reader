const Reader = require('./classes/Reader');
const Processor = require('./classes/Processor');
const Table = require('./classes/Table');
const HtmlParser = require('./classes/HtmlParser');
const Writer = require('./classes/Writer');

const reader = new Reader();
const writer = new Writer();

async function main() {
   const data = await reader.Read('./dumb_file.csv');
   const processedData = Processor.Process(data);

   const users = new Table(processedData);

   const html = await HtmlParser.Parse(users);
   writer.Write(Date.now() + ".html", html);
}

main();