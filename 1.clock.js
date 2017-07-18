var express = require('express');
var app = express();
app.get('/', function (req, res) {
    //sendFile,如果使用相对路径需要执行root参数，指定相对路径是相对于那个绝对路径
    res.sendFile('./clock.html', {root: __dirname})
});
var start = Date.now();
app.get('/clock', function (req, res) {
    res.send(new Date().toLocaleString());
    console.log(new Date() - start);
    start = Date.now();
});
app.listen(8080);