var express = require('express')
var app = express()

app.use(express.static(__dirname));
app.get('/', function (req, res) {
  res.sendfile('index.html')
})
var count1 = 0;
var count2 = 0;

app.get('/answer/:firstAnswer/:secondAnswer/:chosenAnswer', function(req, res) {
	var first = req.params.firstAnswer;
	var second = req.params.secondAnswer;
	var chosenAnswer = req.params.chosenAnswer;

	if(chosenAnswer === 1) {
		console.log("a point should be going to the THIS now.")
		count1++;
	}
	else {
		console.log("a point should be going to the THAT now.")
		count2++;
	}
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

// // respond with "Hello World!" on the homepage
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// })

// // accept POST request on the homepage
// app.post('/', function (req, res) {
//   res.send('Got a POST request');
// })

// // accept PUT request at /user
// app.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user');
// })

// // accept DELETE request at /user
// app.delete('/user', function (req, res) {
//   res.send('Got a DELETE request at /user');
// })