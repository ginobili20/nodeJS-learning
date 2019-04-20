const {argv, argv0, execArgv, execPath} = process;

argv.forEach((item, index) => {
    console.log(item, index);
/*C:\Program Files\nodejs\node.exe 保存node安装的目录
C:\Users\admin\Desktop\H5\node.js\入门\nodetest\commonJS\10_argv.js 当前执行文件的路径*/
})


console.log('argv0', argv0)  // argv第一个值也就是node安装的目录

console.log('execArgv', execArgv) // 调用node传入的一些特殊参数
// 例如 node --inspect comm.js --test     --inspect相当于传入的参数
// 打印结果  execArgv [ '--inspect' ]


console.log('execPath', execPath) // node的安装目录