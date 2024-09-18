const express = require("express");
const app = express();

//using query
app.get("/weather", (req, res) => {
  // res.send("Hello World");
  const { city } = req.query; //q replace with city
  let tem = {
    delhi: "40c",
    surat: "48c",
    goa: "32c",
    baroda: "40c",
  };
  console.log(req.query);
  console.log(tem[city]);
  res.send(`the tem of ${city} is ${tem[city]}`);
});

//using params
app.get("/tem/:city", (req, res) => {
  const { city } = req.params;
  console.log(req.params);
  let tem = {
    delhi: "40c",
    surat: "48c",
    goa: "32c",
    baroda: "40c",
  };
  res.end(`the tem of ${city} is ${tem[city]}`);
});

app.listen("8080", () => {
  console.log("server ids running");
});
