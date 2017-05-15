const fs = require('fs'),
  path = require('path');

fs.readFile(path.resolve('../data', 'cityCode.data'), {
  encoding: 'utf-8'
}, (err, data) => {
  let arr = data.split(/\s+/),
    result = [];
  arr.map(cv => {
    let code = cv.split(',')[0],
      name = cv.split(',')[1];
      result.push({code, name})
  })
  fs.writeFile(path.resolve('../data', 'cityCode.json'), JSON.stringify(result), {
    encoding: 'utf-8'
  }, err => {
    console.log('写入成功')
  })
})