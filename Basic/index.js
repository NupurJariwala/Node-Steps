const fs = require("fs");
// console.log(fs);
// console.log(fs.readFileSync);
fs.readFile("./lecture.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.readFile("./db.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

//file system provide multiple functionality
// ex: read: [Function: read],
//writeFile: [Function: writeFile],
//   writeFileSync: [Function: writeFileSync],

// without utf8 output is in ASCII value
//  node index.js
// <Buffer 22 54 68 69 73 20 69 73 20 6d 74 20 46 69 72 73 74 20 42 45 20 50 72 6f 6a 65 63 74 22>

//utf8 covert ASCII value into text
//ASCII stands for American Standard Code for Information Interchange. Below is the ASCII character table, including descriptions of the first 32 characters.
// node index.js
// "This is mt First BE Project"
