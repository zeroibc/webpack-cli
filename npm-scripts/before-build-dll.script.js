let fs = require('fs');
let rimraf = require('rimraf');
let dirVars = require('../webpack-config/base/dir-vars.config.js');
rimraf(dirVars.dllDir, fs, function cb() {
  console.log('dll目录已清空');
});
