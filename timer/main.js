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

    main.innerText = `${leadZero(timeR.hour)}:${leadZero(timeR.min)}:${leadZero(timeR.sec)}`;

    let timeN = new Date();
    if (timeN.getHours() > 12) {
      time.innerText = `${leadZero(timeN.getHours() - 12)}:${leadZero(
        timeN.getMinutes()
      )} PM`;
    } else {
      time.innerText = `${leadZero(timeN.getHours())}:${leadZero(timeN.getMinutes())} AM`;
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

let shownHelp = false;
function showHelp() {
  // if (!shownHelp && traker < 4) {
  time.innerText = "[space] to pause and [r] to reset timmer";
  showHelp == true;
  // }
}

tick()
showHelp()


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
    time.innerText = "Resetting"
    tick()
  }
});
