var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost/learnanything',
    port: process.env.PORT || 3030

  },
  production: {
    rootPath: rootPath,
    db:'mongodb://wsadler:learnanything@ds061189.mongolab.com:61189/learnanything',
    port: process.env.PORT || 80

  }
}