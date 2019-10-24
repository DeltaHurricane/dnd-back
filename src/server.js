var http = require('http');
var fs = require('fs');

//create a server object:
http.createServer(function (req, res, next) {
  res.writeHead(200, { "Access-Control-Allow-Origin": "http://localhost:3000" , "Access-Control-Allow-Credentials":"true"});
  switch (req.url) {

    case '/users':
      fs.readFile('../stubs/users.json', (err, data) => {
      if (err) throw err;
      let { users } = JSON.parse(data);
      res.write(JSON.stringify(users));
      res.end();
      });
      break;

    case '/games':
      fs.readFile('../stubs/games.json', (err, data) => {
      if (err) throw err;
      let { games } = JSON.parse(data);
      res.write(JSON.stringify(games));
      res.end();
      });
      break;

    default:
        res.write('not Found');
        res.end();
  }
}).listen(5000);
console.log('Node.js web server at port 5000 is running..')


