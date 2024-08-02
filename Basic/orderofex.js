//Asyncronus output
// const fs = require("fs");
// console.log(1); //1st
// fs.readFile("./db.json", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// }); //3rd
// console.log(2); //2nd

//syncronus output
const fs = require("fs");
console.log(1); //1st
let res = fs.readFileSync("./db.json", "utf8");
console.log(res); //2nd
console.log(2); //3rd

// callback function is required in ayncronus
// not required in syncronus
