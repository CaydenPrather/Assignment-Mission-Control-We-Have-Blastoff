// Countodwn function
function startCountdown(){
    // Defining variables for time and the interval
    var timeleft = 10;
    var downloadTimer = setInterval(function(){
    // If the time left is less than 0 seconds, print blastoff in the countdown header
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Blastoff!";
    // Else print the countdown time in the countdown header
    } else {
        document.getElementById("countdown").innerHTML = "Countdown: " + timeleft + " seconds remaining";
    }
    // Decrement the time left after each run
    timeleft -= 1;
    // setting time/speed of countdown
    }, 1000);
}
