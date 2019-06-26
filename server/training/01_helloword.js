var http = require("http")
var server = http.createServer(200, function (req, res) {
    console.log("hello word for cmd")
    res.end("hello word！！！")
})
server.listen(3000, "127.0.0.1")