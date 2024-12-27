let seconds_time = document.getElementById("seconds_time");
let minutes_time = document.getElementById("minutes_time");
let hrs_time = document.getElementById("hrs_time");

let sec = 0;
let min = 0;
let hrs = 0;

let start_button = document.getElementById("start_button");

let isRunning = false; 
let timeCounter; 

start_button.addEventListener("click", function () {
  if (isRunning) {
    clearInterval(timeCounter);
    start_button.style.backgroundColor = "red";
    start_button.innerHTML = "Start";
    isRunning = false;
  } else {
    start_button.innerHTML = "Stop";
    isRunning = true;

    timeCounter = setInterval(() => {
      sec++;

      // Update seconds
      if (sec <= 9) {
        seconds_time.innerHTML = `0${sec}`;
      } else {
        seconds_time.innerHTML = sec;
      }

      // Handle minutes and hours
      if (sec == 60) {
        sec = 0;
        min++;
        if (min <= 9) {
          minutes_time.innerHTML = `0${min}`;
        } else {
          minutes_time.innerHTML = min;
        }
      }

      if (min == 60) {
        min = 0;
        hrs++;
        if (hrs <= 9) {
          hrs_time.innerHTML = `0${hrs}`;
        } else {
          hrs_time.innerHTML = hrs;
        }
      }
    }, 1000);
  }
});
