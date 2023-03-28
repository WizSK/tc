const clock = document.getElementById("clock")
const timer = document.getElementById("timer")

addEventListener("keypress", (e) => {
    if (e.key == '1' || e.key == 'c') {
    clock.click()
    }
if (e.key == '2' || e.key == 't') {
    timer.click()
    }
})