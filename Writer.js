const fs = require("fs")
const util = require("util")

class Writer {
    constructor() {
        this.writer = util.promisify(fs.writeFile);
    }

    Write(filename, data) {
        try {
            this.writer(filename, data);
            return true;
        }
        catch(err) {
            return false;
        }
    }
}

module.exports = Writer;