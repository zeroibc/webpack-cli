let path = require('path');
let dirVars = require('./base/dir-vars.config.js');
let viewArr = require('./base/page-entries.config.js');
let configEntry = {};

viewArr.forEach((view) => {
  configEntry[view] = path.resolve(dirVars.viewsDir, view + '/index.js');
});

module.exports = configEntry;
