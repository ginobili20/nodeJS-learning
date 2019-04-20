const fs = require('fs');
fs.readFile('./19.js', 'utf-8',(err, data) => { // 异步
    if (err) throw err;
    console.log(data)
})

// 同步
// fs.readFileSync

// 写文件
fs.writeFile('./test.txt', 'write it!', {
    encoding: 'utf8'
}, (err) => {
    if (err) throw err;
    console.log('done!')
})

// stat

fs.stat('./19.js', (err, stats) => {
    if (err) throw err;
    console.log(stats.isFile()) // true
    console.log(stats.isDirectory()) // false
    console.log(stats)
})


// 重命名
fs.rename('./test.txt', 'rename.txt', err => {
    if (err) throw err;
})


// 删除
/*
fs.unlink('./test.txt',err => {
    if (err) throw err;

    console.log('done')
})*/


