var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {  
response.writeHeader(200, {"Content-Type": "text/html"});  
var readSream = fs.createReadStream('index.html','utf8')
readSream.pipe(response);
}).listen(8080);

