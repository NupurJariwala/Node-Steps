import fs from "fs";
// fs.writeFile("./lecture.txt", "Hello Nupur Here...", (err) => {
//   if (err) throw err;
// });

// callback function is required in ayncronus
// not required in syncronus

//For Syncronus
try {
  fs.writeFileSync("./lecture.txt", "Nupur Jariwala");
} catch (error) {
  console.log(error);
}
