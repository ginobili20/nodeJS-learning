const {basename, dirname, extname} = require('path')

const  filepath =  '/usr/loacal/bin/no.txt';


console.log(basename(filepath));//文件名no.txt
console.log(dirname(filepath));//所在文件夹/usr/loacal/bin
console.log(extname(filepath));//拓展名.txt

