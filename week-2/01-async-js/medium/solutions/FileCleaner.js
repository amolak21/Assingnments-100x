const fs = require("fs");

const filePath = "readfile.txt";

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Errorr Occured", err);
    return;
  }

  const modifiedData = data.replace(/\s+/g, " ");
  fs.writeFile(filePath, modifiedData, (err) => {
    if (err) {
      console.error("Error occured", err);
    } else {
      console.log("Success");
    }
  });
});
