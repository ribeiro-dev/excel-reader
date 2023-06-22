class Processor {
   static Process(data) {
      const processedData = data.split('\r\n');
      const rows = [];

      processedData.forEach(row => {
         if (!row) return;
         rows.push(row.split(';'));
      })

      return rows;
   }
}

module.exports = Processor;