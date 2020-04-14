const fs = require('fs');
const outputfile = './user.json';
let file = fs.readFileSync(outputfile);
fs.writeFileSync('./user_out.js',`module.exports = ${file.toString().replace(/\[\]/g,'').replace(/\]\[/g,',')}`);