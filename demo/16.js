const path = require('path');


console.log('__dirname', __dirname);
console.log('process.cwd', process.cwd());
console.log('./         ', path.resolve('./'))

// dirname返回文件的绝对路径
// process.cwd（）返回执行node命令的文件夹
// ./ 在require 总是相对于当前文件所在的文件夹

/*
__dirname C:\Users\admin\Desktop\nodeJs-learn\demo
process.cwd C:\Users\admin\Desktop\nodeJs-learn\demo
    ./          C:\Users\admin\Desktop\nodeJs-learn\demo
*/
