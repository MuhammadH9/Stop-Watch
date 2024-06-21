var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var mseconds = document.getElementById("mseconds")
var interval;

var hr = 0
var min = 0
var sec = 0
var msec = 0

function start() {
    msec++
    mseconds.innerHTML = msec

    if (msec === 100) {
        sec++
        seconds.innerHTML = sec
        msec = 0


    } else if (sec > 59) {
        min++
        minutes.innerHTML = min
        sec = 0
    } else if (min > 59) {
        hr++
        hours.innerHTML = hr
        min = 0
    }


}



function startWatch() {
    interval = setInterval(start, 10)
    alert("Start")
    startBtn.disabled = true        
        pauseBtn.disabled = false        
        resetddddddddBtn.disabled = false 
}


function resetWatch() {
    clearInterval(interval)
    alert("Reset")
    hours.innerHTML = "00"
    minutes.innerHTML = "00"
    seconds.innerHTML = "00"
    mseconds.innerHTML = "00"
    hr = 0
    min = 0
    sec = 0
    msec = 0
    startBtn.disabled = false        
        pauseBtn.disabled = true           
        resetBtn.disabled = false
}




function stopWatch() {
    clearInterval(interval)
        alert("Stop")
        startBtn.disabled = false        
        pauseBtn.disabled = true        
        resetBtn.disabled = false
}