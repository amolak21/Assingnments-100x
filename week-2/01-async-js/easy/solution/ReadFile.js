const fs = require("fs");

fs.readFile("readfile.txt", "utf-8", (err, data) => {
  console.log(data);
});

function operation(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    sum += i;
  }
  console.log(sum);
}
operation(1000000000);
