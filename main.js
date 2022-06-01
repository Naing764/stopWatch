window.onload = function() {
var tens = 00;
var sec = 00;
var second = document.getElementById("second");
var minSecond = document.getElementById("min-sec");
var startButton = document.getElementById("start-button");
var stopButton = document.getElementById("stop-button");
var resetButton = document.getElementById("reset-button");
var interVal ;

startButton.onclick = function() {
    clearInterval(interVal);
    interVal = setInterval(startTimer, 10)
}

stopButton.onclick = function(){
    clearInterval(interVal);
}

resetButton.onclick = function () {
    clearInterval(interVal);
    tens = "00";
    sec = "00";
    second.innerHTML = sec;
    minSecond.innerHTML = tens;
}
function startTimer() {
    tens++;

    if (tens <= 9) {
        minSecond.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        minSecond.innerHTML = tens;
    }
    if (tens >= 100) {
        sec++;
        second.innerHTML = "0" + sec;
        tens = 0;
        minSecond.innerHTML = "0" + tens;
    }
    if (sec > 9) {
        second.innerHTML = sec;
    }
}
}