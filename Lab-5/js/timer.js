// initialize variables for hours, minutes, seconds, timer, and running state
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;
let running = false;

// function to start the timer
function startTimer() {
  // set the running state to true
  running = true;
  // use setInterval to call updateTimer once per second and save the interval ID in the timer variable
  timer = setInterval(updateTimer, 1000);
}

// function to update the timer display each second
function updateTimer() {
  // increment the seconds variable
  seconds++;

  // if we've reached 60 seconds, reset the seconds variable and increment the minutes variable
  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }

  // if we've reached 60 minutes, reset the minutes variable and increment the hours variable
  if (minutes == 60) {
    hours++;
    minutes = 0;
  }

  // update the HTML elements for hours, minutes, and seconds with the current values (padded with zeros if necessary)
  document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
}

// function to stop the timer and reset the display
function stopTimer() {
  // set the running state to false
  running = false;
  // clear the interval timer
  clearInterval(timer);
  // reset the hours, minutes, and seconds variables to zero
  hours = 0;
  minutes = 0;
  seconds = 0;
  // update the HTML elements for hours, minutes, and seconds to show "00"
  document.getElementById("hours").innerText = "00";
  document.getElementById("minutes").innerText = "00";
  document.getElementById("seconds").innerText = "00";
}

// function to toggle the timer between running and stopped states
function toggleTimer() {
  // if the timer is currently running, stop it and update the button text to "Start"
  if (running) {
    stopTimer();
    document.getElementById("start-stop-btn").innerText = "Start";
  // if the timer is currently stopped, start it and update the button text to "Stop"
  } else {
    startTimer();
    document.getElementById("start-stop-btn").innerText = "Stop";
  }
}

// add an event listener to the "Start/Stop" button that calls the toggleTimer function when clicked
document.getElementById("start-stop-btn").addEventListener("click", toggleTimer);
