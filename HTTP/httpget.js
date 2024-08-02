const http = require("http");
// console.log(http);
const server = http.createServer((req, res) => {
  //   console.log(req); //buffering
  //   console.log(req.url);
  const fs = require("fs");

  if (req.url == "/") {
    // res.end("home page");
    res.write("home page");
    res.end();
  } else if (req.url == "/about") {
    res.end("about page");
  } else if (req.url == "/getdata") {
    fs.readFile("./db.json", "utf8", (err, data) => {
      if (err) {
        res.end("Data Not Found");
      } else {
        res.end(data);
      }
    });
  } else {
    res.end("page not found ERROR 404");
  }
});

server.listen(8080, () => {
  console.log("server is running");
});

//http://localhost:8080
