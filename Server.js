// to use features of the http protocol. // 
var http = require('http');

// initialize to empty string. //
var body = "";

// create the server that will receive an order Request. //
var server = http.createServer(function(req,res) {
  res.writeHead(200, {'content-type': 'text/plain'});
  
  if(req.method == 'POST' && req.url=="/order"){
  
      // when data is successfully received, a success message is displayed. //
      res.on('data', function(data){
           body += data; // received data is appended. //
        });
        
       req.on('end', function() {
           console.log("Successfully received order. ");
      });
      
    }
    
    // message to the client side. //
    res.end("We have received your order successfully. Thank you!");  
});


// An error message is displayed - error event. //
server.on('error', function(e){
console.log("There is a problem with the request:\n" + e.message);
});
  
// server listens at the following port and localhost (IP). //
server.listen(8000, '127.0.0.1');
