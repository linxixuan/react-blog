/*
 * origin dependencies
 */
var fs = require('fs');
var path = require('path');

var index = function* () {
    var indexPath = path.resolve(__dirname, '../../static/html/index.html');
    var content = fs.readFileSync(indexPath).toString();
    this.body = content;
};

module.exports = index;
