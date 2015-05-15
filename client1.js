var http = require("http"); 
var querystring = require("querystring");
var customerid = Math.floor(Math.random() * (1000 - 1) + 1);

var postOrder = querystring.stringify({
	msg: 'Hello World!',
        model : 'Toyota',
        type : 'Highlander',
        year : '2013',
        engine : 'V6',
        cust_id : customerid
});

var options = {
	hostname: '127.0.0.1',
	port: 8000,
	path:'/order',
	method:'POST',
	headers:{
	   'Content-Type' :'application/x-www-form-urlencoded',
	   'Content-Length' : postOrder.length
	}
};


var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + postOrder);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
req.write(postOrder);
req.end();
