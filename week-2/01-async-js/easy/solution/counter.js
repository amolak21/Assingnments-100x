let count = 1;

function counter() {
  console.log(count++);
}

setInterval(counter, 1000);
