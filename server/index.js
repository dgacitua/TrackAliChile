import http from 'http';

const server = http.createServer((req, res) => {
  res.end('Hello from the server');
}).listen(8081);

console.log('Server is up and running');

export default server;