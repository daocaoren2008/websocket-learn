/*let Server = require('ws').Server;
//创建一个websocket服务器，监听8080
let server = new Server({port:8080});
//服务端监听客户端的链接
server.on('connection',function (socket) {
    //当客户端发过来消息之后，会执行回调,'message'参数是固定的
    socket.on('message',function (msg) {
        console.log(msg);
        socket.send('服务器开喷,'+msg);
    });
});*/
let Server = require('ws').Server;
//创建一个websocket服务器，监听8080
let server = new Server({port:8080});//创建ws实例
//服务器端监听客户端的连接
server.on('connection',function(socket){
    console.log('客户端发起链接请求');
    //当客户端发过来消息之后会执行回调
    socket.on('message',function(msg){//scoket代表的是与某个客户端的链接对象，所有有多少个客户端就要多少个socket,server则只有一个
        console.log(msg);
        //向客户端发送消息
        socket.send('服务器说:接收到“'+msg+'"');
/*        setInterval(function () {
            new Date().toLocaleString();
            socket.send(new Date().toLocaleString());
        },1000)*/
    });
});
