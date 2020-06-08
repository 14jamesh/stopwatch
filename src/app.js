let tickSeconds = 0; //second counter
let identifier; //setInterval returns an identifier. I want to be able to access this in my other event listeners.

const btnStart = document.querySelector(".btn-start");

//Event Listeners
document.querySelector(".btn-start").addEventListener("click", () => {
  clock();
  btnStart.disabled = true;
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

const clock = function () {
  identifier = setInterval(() => {
    tickSeconds++;
    displayValue();
  }, 1000);
};

const updateValues = function () {
  let hour = Math.floor(tickSeconds / 3600);
  let minutes = Math.floor((tickSeconds - hour * 3600) / 60);
  let seconds = tickSeconds - hour * 3600 - minutes * 60;
  return [hour, minutes, seconds];
};

const displayValue = function () {
  let [hour, minutes, seconds] = updateValues();

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
