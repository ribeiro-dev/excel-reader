class Table {
   constructor(arr) {
      this.header = arr.shift();
      this.rows = arr;
   }
};

module.exports = Table;