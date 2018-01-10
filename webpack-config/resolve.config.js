let path = require('path');
let dirVars = require('./base/dir-vars.config.js');
module.exports = {
  // 模块别名的配置，为了使用方便，一般来说所有模块都是要配置一下别名
  alias: {
    /* 各种目录 */
    iconfontDir: path.resolve(dirVars.publicDir, 'iconfont/'),
    configDir: dirVars.configDir,
    vendorDir: dirVars.vendorDir,
    publicDir: dirVars.publicDir,
    layoutDir: dirVars.layoutDir,
    cmpDir: path.resolve(dirVars.publicDir, 'components/'),
    staDir: path.resolve(dirVars.publicDir, 'static/'),
    comDir: path.resolve(dirVars.publicDir, 'common/'),
  },

  // 当require的模块找不到时，尝试添加这些后缀后进行寻找
  extensions: ['.js', '.css', '.less', '.scss', '.sass'],
};
