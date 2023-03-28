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
  let timeR = gt(x++);
  let timeN = new Date();
  // for sec
  let sec, min, hour;

  if (timeR.sec < 10) {
    sec = `0${timeR.sec}`
  }
  else {
    sec = `${timeR.sec}`
  }
  // for min
  if (timeR.min < 10) {
    min = `0${timeR.min}`
  }
  else {
    min = `${timeR.min}`
  }

  // for hour
  if (timeR.hour < 10) {
    hour = `0${timeR.hour}`
  }
  else {
    hour = `${timeR.hour}`
  }

  let timeF = `${hour}:${min}:${sec}`;
  main.innerText = timeF;
  console.log(timeN.getHours());
  if (timeN.getHours() > 12) {
    time.innerText = `${
      timeN.getHours() - 12
    }:${timeN.getMinutes()} PM`;
  } else {
    time.innerText = `${timeN.getHours()}:${timeN.getMinutes()}} AM`;
  }
}, 1000);

