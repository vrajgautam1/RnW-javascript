let quiz_area = document.getElementById("quiz_area");
let enter_quiz_btn = document.getElementById("enter_quiz");
let visible_timer_digit = document.getElementById("visible-timer-digit");

const originalContent = quiz_area.innerHTML;

function addEnterQuizListener() {
  let enterQuizBtn = document.getElementById("enter_quiz");
  if (enterQuizBtn) {
    enterQuizBtn.addEventListener("click", function () {
      // Show the instruction screen
      quiz_area.innerHTML = instruction_screen();

      // Timer variables
      let sec = 5;
      visible_timer_digit.innerHTML = sec; // Set initial value
      visible_timer_digit.style.visibility = "visible"; // Ensure timer is visible

      // Start the timer
      let timerDigitId = setInterval(function () {
        sec--;
        if (sec < 0) {
          clearInterval(timerDigitId); // Stop the timer when it reaches 0
          visible_timer_digit.style.visibility = "hidden"; // Hide the timer
        } else {
          visible_timer_digit.innerHTML = sec; // Update timer value
        }
      }, 1000);

      // Change screen after 5 seconds
      setTimeout(function () {
        quiz_area.innerHTML = originalContent;
        console.log("Restored the original content.");
        visible_timer_digit.style.visibility = "hidden"; // Ensure timer is hidden

        // Reattach the event listener
        addEnterQuizListener();
      }, 5000);
    });
  }
}

// Attach the listener initially
addEnterQuizListener();

function instruction_screen() {
  return `<div id="quiz_area">
            <h1 id="quiz_heading">Instructions</h1>
            <p id="quiz_message">You will be given 15 seconds to complete each question. You will be given 5 questions. Do not cheat.</p>
        </div>
        <button id="leave_quiz">Leave the quiz</button>
        <button id="start_quiz">Start the quiz</button>`;
}
