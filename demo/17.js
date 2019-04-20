// Buffer 全局变量  实例类数组  解决二进制问题

console.log(Buffer.alloc(10)) //  默认用0填充 长度为10
console.log(Buffer.alloc(10, 1)) // 1填充 [01, 01..]
console.log(Buffer.allocUnsafe(5, 1)) // 内容随机
console.log(Buffer.from([1,2, 3])) // 数组转buffer [01,02,03]
console.log(Buffer.from('test'))  //以字符串填充  每个编码代表一个字母 默认utf-8编码

// 占多少字节
console.log(Buffer.byteLength('test')) //4
console.log(Buffer.byteLength('测试')) // 6

// 是否是buffer对象
console.log(Buffer.isBuffer([])) // false
console.log(Buffer.isBuffer(Buffer.from([]))) // true

// 拼接 && 转为字符串
const buffer1 =  Buffer.from('this');
const buffer2 =  Buffer.from(' is');
const buffer3 =  Buffer.from(' a');
const buffer4 =  Buffer.from(' test');
const buffer5 =  Buffer.from('!');

var r = Buffer.concat([buffer1, buffer2, buffer3, buffer4, buffer5])
console.log(r.toString())

// 和数组类似的属性方法
const buf = Buffer.from('this is a test!')
console.log(buf.length) //  15

console.log(buf.toString('base64')) // 以base64编码输出


// 填充
const buf2 = Buffer.allocUnsafe(10);
console.log(buf2)
console.log(buf2.fill(10, 2, 5)) // 以10（16进制）填充2到4的位置

//两个buffer内容是否相等

const buf4 = Buffer.from('test');
const buf5 = Buffer.from('test');
const buf6 = Buffer.from('test!');

console.log(buf4.equals(buf5));//true
console.log(buf4.equals(buf6));//false

//和数组类似indexof
console.log(buf4.indexOf('es')); // 1
console.log(buf4.indexOf('ha')); // -1找不到

