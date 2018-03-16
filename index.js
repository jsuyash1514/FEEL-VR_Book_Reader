const express = require('express')
const app = express()
const path = require('path')
var url = require('url');

''
// app.listen(3000, () => console.log('Example app listening on port 3000!'))

	 app.set('views',__dirname+'/views')
	 app.engine('html', require('ejs').renderFile)
	 app.set('view engine', 'ejs');
	 app.use(express.static(path.join(__dirname, 'views')));

// //content of index.js
app.get('/home', function(req, res) {
	res.render("interface.html")
})
app.get('/meaning', function(req, res) {

	res.setHeader('Access-Control-Allow-Origin', '*');
	var parts = url.parse(req.url, true)
	var query = parts.query
	const https = require('https')
	const http = require('http')
	https.get('https://owlbot.info/api/v2/dictionary/'+query.word, (resp) => {
	 // https.get('https://owlbot.info/api/v2/dictionary/car' , (resp) => {
		let data = "";

		 // A chunk of data has been recieved.
		 resp.on('data', (chunk) => {
		 	data += chunk;
		 });

		 // The whole response has been received. Print out the result.
		 resp.on('end', () => {
		 	  res.send(data);
		 	console.log(data);
		 });

		}).on("error", (err) => {
			  res.send(err.message);
			console.log("Error: " + err.message);
		});

  // res.send('Hello Seattle\n');
});
app.listen(3000);
console.log('Listening on port 3000...');





///////////////////////
// const https = require('https')
// const http = require('http')
// const port = 3000
// var url = require('url')

// const requestHandler = (request, response) => {
// 	response.setHeader('Access-Control-Allow-Origin', '*');
// 	response.setHeader('Access-Control-Request-Method', '*');
// 	response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
// 	response.setHeader('Access-Control-Allow-Headers', '*');
// 	response.setHeader('Content-Type', 'application/json');
// 	// response.setEncoding('utf8');
// 	console.log(request.url, "aaa")
// 	var parts = url.parse(request.url, true)
// 	var query = parts.query
// 	// https.get('https://owlbot.info/api/v2/dictionary/'+query.word, (resp) => {
// 	https.get('https://owlbot.info/api/v2/dictionary/car' , (resp) => {
// 		let data = "";

// 		 // A chunk of data has been recieved.
// 		 resp.on('data', (chunk) => {
// 		 	data += chunk;
// 		 });

// 		 // The whole response has been received. Print out the result.
// 		 resp.on('end', () => {
// 		 	response.end(data);
// 		 	console.log(data);
// 		 });

// 		}).on("error", (err) => {
// 			console.log("Error: " + err.message);
// 		});
		
// 	}

// const server = http.createServer(requestHandler)

// server.listen(port, (err) => {
// 	if (err) {
// 		return console.log('something bad happened', err)
// 	}

// 	console.log(`server is listening on ${port}`)
// })
