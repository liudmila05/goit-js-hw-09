function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const startButton = document.querySelector("button[data-start]");
const stopButton = document.querySelector("button[data-stop]");

let changeColorId = null;

startButton.addEventListener('click', changeColorStart);
stopButton.addEventListener('click', changeColorStop);

function changeColorStart() {
    changeColorId = setInterval(() => {
        document.body.style.background = getRandomHexColor()
    }, 1000);
    startButton.setAttribute("disabled", true);
    stopButton.disabled = false;
};

function changeColorStop() {
    clearInterval(changeColorId);
    stopButton.setAttribute("disabled", true);
    startButton.disabled = false;
};


