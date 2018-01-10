const config = require('configDir/common.config');
module.exports = {
  /* 拼接系统内部的URL */
  constructInsideUrl(url, urlTail) {
    urlTail = urlTail || '';
    return config.PAGE_ROOT_PATH + url + '.html' + urlTail;
  },
};
