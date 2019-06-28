// index.js
const express = require('express');
const path = require('path');
const app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var multer = require('multer');
var url = require('url')

app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/' }).array('image'));
// 在 app 文件夹开启静态服务
app.use(express.static('../app'));


//图片上传
app.post('/file/upload/image', function (req, res) {
    var p_url = url.parse(req.url, true, true)
    console.log(p_url.query.sex)
    if (req.files.length > 0) {
        for (let i = 0; i < req.files.length; i++) {
            var des_file = __dirname + "/res/image/" + req.files[i].originalname;
            fs.readFile(req.files[i].path, function (err, data) {
                fs.writeFile(des_file, data, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        response = {
                            message: 'File uploaded successfully',
                            filename: req.files[i].originalname
                        };
                    }
                    res.end(JSON.stringify(response));
                });
            });
        }
    }
})

// 视频上传
app.post('/file/upload/video', function (req, res) {
    var p_url = url.parse(req.url, true, true)
    console.log(p_url.query.sex)
    if (req.files.length > 0) {
        
        //监测文件夹是否存在
        // var fso = new ActiveXObject("Scripting.FileSystemObject")
        // if (fso.FileExists(__dirname + "/res/video/")) {
        // }

        for (let i = 0; i < req.files.length; i++) {
            var des_file = __dirname + "/res/video/" + req.files[i].originalname;
            fs.readFile(req.files[i].path, function (err, data) {
                fs.writeFile(des_file, data, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        response = {
                            message: 'File uploaded successfully',
                            filename: req.files[i].originalname
                        };
                    }
                    res.end(JSON.stringify(response));
                });
            });
        }
    }
})

app.get('/', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('./server/index.html', function (error, data) {
        if (error) throw error
        res.write(data.toString())
        res.end()
    })
})


app.get('/text.json', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/json' })
    fs.readFile('./server/res/text.json', function (error, data) {
        if (error) throw error
        res.write(data.toString())
        res.end('读取完毕')
    })
})

//  POST 请求
app.post('/', function (req, res) {
    console.log("主页 POST 请求");
    res.send('Hello POST');
})

//  /del_user 页面响应
app.get('/del_user', function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
})

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
})

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function (req, res) {
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
})

app.listen(3000, () => {
    console.log('Demo server listening on port 3000');
});