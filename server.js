var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {  
var readSream = fs.createReadStream('index.html','utf8')
readSream.pipe(response);
}).listen(8080);
