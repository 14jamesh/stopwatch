let tickSeconds = 0; // second counter
let identifier; // setInterval function returns an identifier that is stored in this variable for later reference in event listeners.

const btnStart = document.querySelector(".btn-start");

//Event Listeners

document.querySelector(".btn-start").addEventListener("click", () => {
  clock();
  btnStart.disabled = true; //disable button so Set Interval cannot be spammed
});

document.querySelector(".btn-reset").addEventListener("click", () => {
  clearInterval(identifier);
  tickSeconds = 0;
  displayValue();
  btnStart.disabled = false;
});

document.querySelector(".btn-stop").addEventListener("click", () => {
  clearInterval(identifier);
  btnStart.disabled = false;
});

// Set Interval to tick every 1000ms. On every tick, increment GLOBAL tick counter by one. displayValue() is called to update the UI.
const clock = function () {
  identifier = setInterval(() => {
    tickSeconds++;
    displayValue();
  }, 1000);
};

// Calculates the current hours, minutes and seconds elapsed since the first clock tick using GLOBAL tick counter. Returns the results in an array.
const updateValues = function () {
  let hour = Math.floor(tickSeconds / 3600);
  let minutes = Math.floor((tickSeconds - hour * 3600) / 60);
  let seconds = tickSeconds - hour * 3600 - minutes * 60;
  return [hour, minutes, seconds];
};

// This function displays the stopwatch on the UI.
const displayValue = function () {
  let [hour, minutes, seconds] = updateValues(); //prior to updating the UI retrieve the most recent values for the amount of hr/min/sec elapsed.

  //switch statement to add a preceding 0 in the instances where seconds/mins/hours are not yet double digit numbers. Switch checks all conditions.
  switch (true) {
    case seconds.toString().length < 2:
      seconds = "0" + seconds;
    case minutes.toString().length < 2:
      minutes = "0" + minutes;
    case hour.toString().length < 2:
      hour = "0" + hour;
  }

  document.querySelector(".time").textContent = `${hour}:${minutes}:${seconds}`;
};
