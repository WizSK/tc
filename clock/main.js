const main = document.getElementById("main");
const time = document.getElementById("foo")

// let _ = setInterval(() => {
//   main.innerText = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
//   time = new Date()
//   // main.innerText = `${x++}`;
// }, 1000);
//
// get time
function gt(endtime) {
  const hour = Math.floor(endtime/(60*60));
  endtime = endtime % (60 * 60)
  const min = Math.floor(endtime/60);
  const sec = endtime % 60
  return {
    hour,
    min,
    sec
  };
}

x = 0
let intervId = setInterval(() => {
  let timeN = new Date();
  // for sec
  let sec, min, hour;

  sec = `${leadZero(timeN.getSeconds())}`;
  // for min
  min = `${leadZero(timeN.getMinutes())}`;
  // for hour
  if (timeN.getHours() > 12) {
    hour = `${leadZero(timeN.getHours() - 12)}`;
  } else {
    hour = `${leadZero(timeN.getHours())}`;
  }

  let timeF;
  if (timeN.getHours() > 12) {
    timeF = `${hour}:${min}:${sec} PM`;
  } else {
    timeF = `${hour}:${min}:${sec} AM`;
  }
  main.innerText = timeF;
}, 1000);

function leadZero(num) {
  if (num < 10) {
    return `0${num}`
  }
  else {
    return num;
  }
}