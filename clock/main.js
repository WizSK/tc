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

  if (timeN.getSeconds() < 10) {
    sec = `0${timeN.getSeconds()}`;
  } else {
    sec = `${timeN.getSeconds()}`;
  }
  // for min
  if (timeN.getMinutes() < 10) {
    min = `0${timeN.getMinutes()}`;
  } else {
    min = `${timeN.getMinutes()}`;
  }
  // for hour
  if (timeN.getHours() < 10) {
    hour = `0${timeN.getHours() + 1}`;
  } else {
    if (timeN.getHours() > 12) {
      hour = `${timeN.getHours() - 12}`;
    } else {
      hour = `${timeN.getHours() + 1}`;
    }
  }

  let timeF;
  if (timeN.getHours() > 12) {
    timeF = `${hour}:${min}:${sec} PM`;
  } else {
    timeF = `${hour}:${min}:${sec} AM`;
  }
  main.innerText = timeF;
}, 1000);

