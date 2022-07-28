var secs = 00;
var mins = 00;
var tens = 00;
var secsOutput = document.getElementById('secs');
var tensOutput = document.getElementById('tens');
var minsOutput = document.getElementById('mins');
var btnStop = document.getElementById('btn-stop');
var btnReset = document.getElementById('btn-reset');
var btnStart= document.getElementById('btn-start');
var Interval;
btnStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

btnStop.addEventListener('click', () => {
    clearInterval(Interval);
});

btnReset.addEventListener('click', () => {
    clearInterval(Interval);
    mins = "00";
    secs = "00";
    tens = "00";
    tensOutput.innerHTML = tens;
    secsOutput.innerHTML = secs;
    minsOutput.innerHTML = mins;

});

function startTime() {
    tens++;
    if (tens <= 9) {
        tensOutput.innerHTML = "0" + tens;   
    }

    if (tens> 9) {
        tensOutput.innerHTML = tens;
    }
    if (tens> 99) {
        secs++;
        secsOutput.innerHTML = "0" + secs;
        tens = 0;
        tensOutput.innerHTML = "0" + tens;  
    }
    
    if (secs> 9) {
        secsOutput.innerHTML = secs;
    }
    
    if(secs > 60){
        mins++;
        minsOutput.innerHTML = "0" + mins;
        secs = "0";
        secsOutput.innerHTML = "0" + secs;
    }

    if (mins> 9) {
        minsOutput.innerHTML = mins;
        
    }
}