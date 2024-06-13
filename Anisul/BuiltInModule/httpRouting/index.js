const http = require("http");
const fs = require("fs");
const port = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  const handelRedFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (error, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };
  if (req.url === "/") {
    handelRedFile(200,"./views/index.html")

    // fs.readFile("./views/index.html", (error, data) => {
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write(data);
    //   res.end();
    // });
  } else if (req.url === "/about") {
    handelRedFile(200,"./views/about.html")
    // fs.readFile("./views/about.html", (error, data) => {
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write(data);
    //   res.end();
    // });
  } else if (req.url === "/contact") {
    handelRedFile(200,"./views/contact.html")
    // fs.readFile("./views/contact.html", (error, data) => {
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write(data);
    //   res.end();
    // });
  } else {
    handelRedFile(404,"./views/error.html")
    // fs.readFile("./views/error.html", (error, data) => {
    //   res.writeHead(404, { "Content-Type": "text/html" });
    //   res.write(data);
    //   res.end();
    // });
  }
});
server.listen(port, hostName, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
});
