import http from 'http';
import path from 'path';
import fs from 'fs';

const hostname: string = '127.0.0.1';
const port: number = 3000;

const server = http.createServer((req, res) => 
{
  res.setHeader('Content-Type', 'text/html');
  DisplayHome(res);
});

server.listen(port, hostname, () => 
{
  console.log(`Server running at http://${hostname}:${port}/`);
});

function DisplayHome(res: http.ServerResponse): void
{
  fs.readFile("index.html", (err, data) => 
  {
    if(err)
    {
      res.writeHead(404); // file not found
      res.end("ERROR: 404 - Page not found");
      return;
    }
    res.writeHead(200); // everything ok
    res.end(data);
  });
}