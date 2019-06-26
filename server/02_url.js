var http = require("http")
var url = require('url')
var server = http.createServer(200, function (req, res) {
    // var urlObjeact = url.parse(req.url, true).toJson

    res.writeHead(200, { 'Content-Type': 'text/json' })
    // // 输出 JSON 格式
    // var response = {
    //     "first_name": urlObjeact.user_name,
    //     "last_name": urlObjeact.password
    // };
    // console.log(response);

    var query = url.parse(req.url, true);
    var params = JSON.stringify(query);
    // console.log("url.parse(path, true)");
    // console.log(query);
    // console.log("JSON.stringify(query)");
    // console.log(params);
    // console.log();
    res.end(JSON.stringify(params));
})
server.listen(3000, "127.0.0.1")