const setInterval = require("timers").setInterval;

function updateClock() {
  const now = new Date();

  const formatFor24 = now.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const formatFor12 = now.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  console.clear();
  console.log(`24-hour : ${formatFor24}`);
  console.log(`12-hour : ${formatFor12}`);
}
setInterval(updateClock, 1000);
updateClock();
