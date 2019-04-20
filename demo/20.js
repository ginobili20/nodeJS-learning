const fs = require('fs')

// 显示当前demo文件夹下所有的文件内容
fs.readdir('./', (err, files) => {
    console.log(files)
})

// 创建文件夹

fs.mkdir('mkdri', (err, file) => {
    console.log(file)
})


// 删除文件夹
fs.rmdir('mkdri', (err,files) => {
    if (err) throw err;

    console.log(files)
})


//常用 和watchfile差不多  watch能监视任何内容 watchfile只能监视文件
fs.watch('./', {
    recursive: true //子文件夹也监视
}, (eventType, filename) => {
    console.log(eventType, filename)
})//修改会提示change xxx 删除创建文件提示 rename xxx