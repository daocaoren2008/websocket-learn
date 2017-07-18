var Socket = require('ws');
var socket = new Socket('ws://127.0.0.1:8080');//ws是协议
//监听链接成功事件
socket.on('open',function () {
    console.log('链接已经建立');
    socket.send('服务器你好');//想服务器发送消息
});
//监听服务器发过来的消息
socket.on('message',function (msg) {
    console.log(msg)
});