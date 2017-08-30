var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  //console.log(request);
  var parsedUrl = url.parse(request.url).path;
  /*request.on('error', (err) => {
   console.error(err);
   response.statusCode = 400;
   response.end();
 });
 response.on('error', (err) => {
   console.error(err);
 });*/
  if(request.method === 'GET' && parsedUrl === '/listings') {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(JSON.stringify(listingData));
    response.end();
  } else {
    response.statusCode = 404;
    response.write('Bad gateway error');
    response.end();
  }
  /*
    Your request handler should send listingData in the JSON format if a GET request
    is sent to the '/listings' path. Otherwise, it should send a 404 error.

    HINT: explore the request object and its properties
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable,
    then start the server.
   */
   if(err) throw err;
   listingData = JSON.parse(data);
   //console.log(listingData);
   server = http.createServer(requestHandler).listen(port);
   console.log('Server started');
   //console.log(data);
});
