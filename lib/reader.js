'use strict';

const fs = require('fs');

module.exports = (paths, callback) => {
  fs.readFile(paths[0], (err, data) => {
    if(err) return callback(err);

    callback(null, [data.toString()]);
  })
  //no return
}

