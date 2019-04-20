const {parse, format} = require('path');

const  filepath =  '/usr/loacal/node_modules/n/package.json';

var ret = parse(filepath)
console.log(ret) // 解析一个路径
// 打印
/*
{ root: '/',
    dir: '/usr/loacal/node_modules/n',
    base: 'package.json',
    ext: '.json',
    name: 'package' }
*/



console.log(format(ret)) // parse的逆过程   // /usr/loacal/node_modules/n/package.json

