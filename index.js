const PORT = process.env.PORT || 5000
var http = require('http');
 
var server = http.createServer(function (req, res) {
    res.writeHead(301, {'Location': 'http://itbilu.com/'});
    console.log(res._header);
    res.end();
});
 
server.listen(PORT);

