const fs = require("fs");

fs.writeFile("writefile.txt", "Hello my name is amolak singh", (err) => {
  if (err) {
    console.error("Error writing to the file", err);
  } else {
    console.log("Success");
  }
});
