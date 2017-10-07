var http = require("http");

var server = http.createServer(function(req, res){
	console.log("req", req)
	res.end("<body>HELLO</body>")


	console.log("hello");
})


server.listen(8080, function(err){
	if(err) throw err;
	console.log("we are listening on port 80")
});


