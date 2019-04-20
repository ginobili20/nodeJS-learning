const {normalize} = require('path')
// normalize改成标准的路径格式
console.log(normalize('/usr//local/bin')) // \usr\local\bin

console.log(normalize('/usr//local/../bin')); //   \usr\bin