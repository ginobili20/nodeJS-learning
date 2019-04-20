const fs = require('fs');
const rs = fs.createReadStream('./21.js'); // 创建流

rs.pipe(process.stdout)//stdout就是命令台那里


// 回调地狱
const promisify = require('util').promisify;

const read = promisify(fs.readFile);

//解决回调地狱方法一
// read('./21.js').then(data => {
//     console.log(data.toString());
// }).catch(ex => {
//     console.log(ex);
// })

//方法二
async  function test() {
    try{
        const content = await read('./21.js');
        console.log(content.toString())
    }catch (ex){
        console.log(ex)
    }

}

test();