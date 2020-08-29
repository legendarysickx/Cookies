var score = document.getElementById("score");
var perSecond = document.getElementById("persecond");
var cookie = document.getElementById("cookie");
var clicks = 0;
var timeInterval = 200;
var totalTime = 0;

cookie.onclick = addClick;

setInterval(clicksPerSec, timeInterval);

function addClick(){
    clicks += 1;
    score.innerHTML = clicks;
}

function clicksPerSec() {
    totalTime += timeInterval / 1000;
    var clicksPerSec = (clicks/totalTime).toFixed(3);
    perSecond.innerHTML = clicksPerSec;
}