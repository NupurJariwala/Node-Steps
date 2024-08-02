const fs = require("fs");
fs.appendFile("./lecture.txt", "\n Nupur Nayan Jariwala", (err) => {
  if (err) throw err;
});
