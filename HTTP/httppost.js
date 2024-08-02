const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("home page");
  } else if (req.url == "/addproduct" && req.method == "POST") {
    // res.end("product");
    let str = "";
    req.on("data", (chunk) => {
      str = str + chunk;
    });
    res.on("close", () => {
      //   console.log(str);
      //   fs.appendFile("./db.json", str, (err) => {
      //     if (err) {
      //       res.end(err);
      //     } else {
      //       res.end("data added successfully");
      //     }
      //   });

      //first read
      fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) {
          res.end(err);
        } else {
          console.log(data);
          const productdata = JSON.parse(data);
          productdata.product.push(JSON.parse(str));
          //   console.log(productdata.product);
          fs.writeFile("./db.json", JSON.stringify(productdata), (err) => {
            if (err) {
              res.end(err);
            } else {
              res.end("data posted successfully");
            }
          });
          res.end();
        }
      });
    });
  } else {
    res.end("404");
  }
});
server.listen(8080, () => {
  console.log("server is running");
});
