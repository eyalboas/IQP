function Collector() {
    this.data = require("./iqp_exam.json");
}

Collector.prototype.collectAllEmployees =  function(callback) {
    return callback(this.data);
};

module.exports = new Collector();