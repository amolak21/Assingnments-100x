let count = 1;
function counter() {
  console.log(`counter = ${count++}`);
  setTimeout(counter, 1000);
}
counter();
