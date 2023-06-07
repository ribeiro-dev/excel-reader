const fs = require('fs');

class Reader {
   Read (filepath) {
      return fs.readFileSync(filepath, 'utf-8')
   }
}

module.exports = Reader;