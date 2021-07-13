const PORT = process.env.PORT || 5000 
var http = require('http');
var request_ = require('request');
var url=require('url');
http.createServer(function (request, response) {
    var req_url="http://www.baidu.com";
      request_.get({
            url:req_url,
            json:false
        },
        function(error, response_, body) {
          if (!error && response_.statusCode == 200) {

            response.writeHead(200, {
                "Content-Type": "text/html; charset=UTF-8",
                'Access-Control-Allow-Origin':request.headers.origin
            });
            response.end(body);
          }
          else{
             console.log(error)
          }
        }
    )
}).listen(PORT);

console.log('Server running at http://127.0.0.1:'+PORT);
