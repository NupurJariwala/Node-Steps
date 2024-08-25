const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors()); //middle-ware

// #### Get Routes #####
app.get("/product", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

//#### Post Routes #####
app.post("/addproduct", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      const newdata = JSON.parse(data);
      newdata.push(req.body);
      fs.writeFile("./db.json", JSON.stringify(newdata), (err) => {
        if (err) {
          res.send(err);
        } else {
          res.send("product added successfully");
        }
      });
    }
  });
});

//#####PATCH ROUTES

app.patch("/editproduct/:id", (req, res) => {
  //   console.log(req.body, req.params, req.params.id);
  //read the data
  //destructure of id
  const { id } = req.params;
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      // console.log(data);// get json data
      const productdata = JSON.parse(data);
      //   console.log(productdata); //get normal data
      //   productdata.findIndex((el) => console.log(el)); //all data

      const index = productdata.findIndex((el) => el.id == id); //now store in filterdata
      //   console.log(index);
      //   console.log(productdata[index]);
      if (index != -1) {
        productdata[index] = { ...productdata[index], ...req.body };
        // console.log(productdata);
        fs.writeFile("./db.json", JSON.stringify(productdata), (err) => {
          if (err) {
            res.send(err);
          } else {
            res.send("data edit successfully");
          }
        });
        // res.send("data edit successfully");
      } else {
        res.send("data is not found");
      }

      //   res.send("");
    }
  });
  //   res.send("I am from Edit Route");
});

// DELETE ###
app.delete("/deleteproduct/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  fs.readFile("./db.json", "utf8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      const productdata = JSON.parse(data);
      // console.log(productdata);all data
      const filterdata = productdata.filter((el, index) => el.id != id);
      // console.log(filterdata);
      fs.writeFile("./db.json", JSON.stringify(filterdata), (err) => {
        if (err) {
          res.send(err);
        } else {
          res.send("I am From Delete Route");
        }
      });
    }
  });
  // res.send("I am From Delete Route");
});

// ##### PUT ROUTE #####
app.put("/updateproduct/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  // Read the data from the file
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      const productdata = JSON.parse(data);
      const index = productdata.findIndex((el) => el.id == id);

      if (index !== -1) {
        // Replace the existing product with the new data
        productdata[index] = { ...req.body, id: productdata[index].id }; // Retain the original ID

        // Write the updated data back to the file
        fs.writeFile("./db.json", JSON.stringify(productdata), (err) => {
          if (err) {
            res.send(err);
          } else {
            res.send("Product updated successfully");
          }
        });
      } else {
        res.send("Product not found");
      }
    }
  });
});

app.listen(8080, () => {
  console.log("server is running on port 8080");
});
