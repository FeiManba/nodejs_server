var http = require("http")
var fs = require('fs')
var url = require('url')
var server = http.createServer((request, response) => {
    // 解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;
   
    // 输出请求的文件名
    console.log("Request for " + pathname + " received.");
    
    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function (err, data) {
       if (err) {
          console.log(err);
          // HTTP 状态码: 404 : NOT FOUND
          // Content Type: text/html
          response.writeHead(404, {'Content-Type': 'text/pain'});
       }else{             
          // HTTP 状态码: 200 : OK
          // Content Type: text/html
          response.writeHead(200, {'Content-Type': 'text/pain'});    
          
          // 响应文件内容
          response.write(data.toString());        
       }
       //  发送响应数据
       response.end();
    }); 
})
server.listen(3000, "127.0.0.1")