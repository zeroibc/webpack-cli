let glob = require('glob');
let dirVars = require('./dir-vars.config.js');
let options = {
  cwd: dirVars.viewsDir, // 在views目录里找
  sync: true, // 这里不能异步，只能同步
};
let globInstance = new glob.Glob('!(_)*/!(_)*', options); // 考虑到多个页面共用HTML等资源的情况，跳过以'_'开头的目录
module.exports = globInstance.found; // 一个数组，形如['index/index', 'index/login', 'alert/index']
