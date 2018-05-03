var http = require ('http')
var fs = require('fs')
var port = 3000
var requestHandler = (request, response) => {
  var url = request.url
  
  if (url === '/') { 
      console.log('Hello World')
  } else if (url === '/about') {  
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');      
      response.end('/about');    
  } else if (url === '/stop') {
      server.close();
  } else if (url === '/contact') {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');     
      fs.readFile('index.html', (err, data) => {
        if (err) throw err;
        response.end(data);       
      });
  }
}
var server = http.createServer(requestHandler)

server.listen (port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

