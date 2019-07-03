var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minutes      = document.getElementById('minutes');
var seconds      = document.getElementById('seconds');
var milliseconds  = document.getElementById('milliseconds-num');

function printTime() {

}

function printMinutes() {
    setInterval(() => {
        chronometer.setMinutes();
        minutes.innerHTML = chronometer.minutes;
    }, 1000);
}

function printSeconds() {
    setInterval(() => {
        chronometer.setSeconds();
        seconds.innerHTML = chronometer.seconds;
    }, 1000);
}

function printMilliseconds() {
    setInterval(() => {
        chronometer.setMilliseconds();
        milliseconds.innerHTML = chronometer.milliSeconds;
    }, 10);

}

function printSplit() {
    chronometer.setTime();
    let splits = document.getElementById("splits");
    let splitLi = document.createElement("li");
    splits.appendChild(splitLi);
    splitLi.innerHTML = chronometer.timestamp;
}

function clearSplits() {
    document.getElementById("splits").innerHTML = "";
}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.className === "btn start"){
        chronometer.startClick();
        printSeconds();
        printMinutes();
        btnLeft.className = "btn stop";
        btnLeft.innerHTML = "STOP";
        btnRight.className = "btn split";
        btnRight.innerHTML = "SPLIT";

    } else if (btnLeft.className === "btn stop") {
        chronometer.stopClick();
        btnLeft.className = "btn start";
        btnLeft.innerHTML = "START";
        btnRight.className = "btn reset";
        btnRight.innerHTML = "RESET";
    };
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.className === "btn reset"){
        chronometer.resetClick();
        clearSplits()
    } else if(btnRight.className === "btn split") {
        printSplit()
        
        
    };
});
