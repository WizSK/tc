const main = document.getElementById("main");
const time = document.getElementById("foo")

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

let traker = 0;
let intervId;
function tick() {
  intervId = setInterval(() => {
    let timeR = gt(traker++);
    // for sec
    let sec, min, hour;

    if (timeR.sec < 10) {
      sec = `0${timeR.sec}`;
    } else {
      sec = `${timeR.sec}`;
    }
    // for min
    if (timeR.min < 10) {
      min = `0${timeR.min}`;
    } else {
      min = `${timeR.min}`;
    }

    // for hour
    if (timeR.hour < 10) {
      hour = `0${timeR.hour}`;
    } else {
      hour = `${timeR.hour}`;
    }

    let timeF = `${hour}:${min}:${sec}`;


    main.innerText = timeF;
    if (traker > 4) {
    let timeN = new Date();
    if (timeN.getHours() > 12) {
      time.innerText = `${leadZero(timeN.getHours() - 12)}:${leadZero(timeN.getMinutes())} PM`;
    } else {
      time.innerText = `${leadZero(timeN.getHours())}:${leadZero(timeN.getMinutes())}} AM`;
    }}
    else{
      time.innerText = "[space] to pause and [r] to reset timmer"
    }
  }, 1000);
}

function leadZero(num) {
  if (num < 10) {
    return `0${num}`
  }
  else {
    return num;
  }
}

tick()


addEventListener("keypress", (e) => {
  if (e.key == " ") {
    if (time.textContent != "Paused") {
      clearInterval(intervId);
      time.innerText = "Paused"
    } else {
      time.innerText = "Ressuming"
      tick()
    }
  }
  else if (e.key == 'r' || e.key == 'R') {
    
    traker = 0;
    if (time.textContent == "Paused") {
      time.innerText = "Resetting"
      tick()
    }
  }
});