// buat server http dengan port 5000

const http = require("http");
const url = require("url");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/json" });
    res.write("hello skilvul 123");
    const yearQuery = url.parse(req.url, true).query;
    const text = yearQuery.year + " " + yearQuery.month;

    console.log(req.url);
    res.end(text);
  })
  .listen(8080);
