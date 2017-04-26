// Will removed in future updates
// TODO: TAKE AWAY FROM ROOT FOLDER //
var extract = require('extract-zip');

extract(__dirname + '/dist/theme.zip', {dir: __dirname + '/dist'}, function (err) {
 // TODO extraction is complete. make sure to handle the err 
})

var line1 = " ";
var line2 = "The theme was successfully compiled";

console.log('\x1b[36m%s\x1b[0m', line1);
console.log('\x1b[36m%s\x1b[0m', line2);
