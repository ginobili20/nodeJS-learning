const EventEmitter = require('events');

class CustomEvent extends EventEmitter {

}

const ce = new CustomEvent()
ce.on('test', () => {
    console.log('test~')
})

//只响应一次
/*ce.once('test', () => {
    console.log('this is a test!');
})*/


setInterval(() => {
    ce.emit('test')
}, 500)

// 移除事件
// ce.removeListener('test', fn2)
function fn2() {
    // ...回调
}