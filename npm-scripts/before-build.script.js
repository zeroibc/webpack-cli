let fs = require('fs');
let rimraf = require('rimraf');
let dirVars = require('../webpack-config/base/dir-vars.config.js');
rimraf(dirVars.buildDir, fs, function cb() {
  console.log('build目录已清空');
});
