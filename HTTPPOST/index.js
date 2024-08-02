const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    req.end("Home Page");
  } else if (req.url == "/addproduct" && req.method == "POST") {
    // let productdata = {
    //   id: 2,
    //   title: "Mens Casual Premium Slim Fit T-Shirts ",
    //   price: 22.3,
    //   description:
    //     "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    //   category: "men's clothing",
    //   image:
    //     "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    //   rating: {
    //     rate: 4.1,
    //     count: 259,
    //   },
    // };

    // fs.appendFile("./db.json", JSON.stringify(productdata), (err) => {
    //   if (err) {
    //     console.log(err);
    //     res.end(err);
    //   } else {
    //     res.end("product added");
    //   }
    let str = "";
    req.on("data", (chunk) => {
      str += chunk;
    });
    req.on("close", () => {
      fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) {
          res.end(err);
        } else {
          const getdatafromdb = JSON.parse(data);
          // console.log(getdatafromdb.product);
          getdatafromdb.product.push(JSON.parse(str));
          // console.log(getdatafromdb);
          fs.writeFile("./db.json", JSON.stringify(getdatafromdb), (err) => {
            if (err) {
              res.end(err);
            } else {
              res.end("product added");
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
server.listen(8090, () => {
  console.log("server is running");
});

//endpoint:"/addproduct"=>data post,db.json
