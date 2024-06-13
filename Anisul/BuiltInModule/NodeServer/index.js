const http = require("http");
const fs = require("fs");
const port = 3000;
const hostName = "127.0.0.1";

const handleReadFile = (fileName, code, req, res) => {
  fs.readFile(fileName, "utf-8", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(data);
      res.end();
    }
  });
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    handleReadFile("index.html", 200, req, res);
  } else if (req.url === "/about") {
    handleReadFile("about.html", 200, req, res);
  } else if (req.url === "/contact") {
    handleReadFile("contact.html", 200, req, res);
  }else {
    handleReadFile("error.html", 404, req, res);
  }
});

server.listen(port, hostName, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
  // console.log(`server is running`);
});
