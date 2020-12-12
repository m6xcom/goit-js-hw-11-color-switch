const buttonStart = document.querySelector("[data-action='start']");
const buttonStop = document.querySelector("[data-action='stop']");
const body = document.querySelector("body");

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const colorSwitcher = {
  isActive: false,
  switcherId: null,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    buttonStart.setAttribute("disabled", "disabled");
    this.switcherId = setInterval(() => {
      let color = colors[randomIntegerFromInterval(0, colors.length - 1)];
      body.style.backgroundColor = color;
    }, 1000);
  },
  stop() {
    buttonStart.removeAttribute("disabled");
    this.isActive = false;
    clearInterval(this.switcherId);
  },
};

buttonStart.addEventListener("click", colorSwitcher.start.bind(colorSwitcher));
buttonStop.addEventListener("click", colorSwitcher.stop.bind(colorSwitcher));
