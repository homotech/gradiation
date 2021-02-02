var showGradient = document.querySelector(".showgradient");
var Zero = document.querySelector("#zero");
var Fifty = document.querySelector("#fifty");
var Hundred = document.querySelector("#hundred");
var showCode = document.querySelector("#code");
var zeroSc = document.querySelector("#zerosc");
var fiftySc = document.querySelector("#fiftysc");
var hundredSc = document.querySelector("#hundredsc");
var createGrad = document.querySelector("#createGrad");
var createRandomGrad = document.querySelector("#randomize");
var copycode = document.querySelector("#copycode");

// Variables
var zeroPercent;
var fiftyPercent;
var hundredPercent;

// Functions begins here

const generateRandom = () => {
  const resources = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ];
  let color = "#";
  resources.sort(() => 0.5 - Math.random());
  for (i = 0; i < 6; i++) {
    color += resources[i];
  }
  return color;
};

const randomize = () => {
  zeroPercent = generateRandom();
  fiftyPercent = generateRandom();
  hundredPercent = generateRandom();
  setColorBox(zeroSc, zeroPercent);
  setColorBox(fiftySc, fiftyPercent);
  setColorBox(hundredSc, hundredPercent);
  Zero.value = zeroPercent;
  Fifty.value = fiftyPercent;
  Hundred.value = hundredPercent;
  setColorBox(zeroSc, Zero);
  setColorBox(fiftySc, Fifty);
  setColorBox(hundredSc, Hundred);
  setGradient();
};
const setColorBox = (box, color) => {
  box.style.backgroundColor = color.value;
};
const getInput = (choice) => {
  varchoice = choice.value;
  return choice.value;
};
const setGradient = () => {
  zeroPercent = `${getInput(Zero)}`;
  fiftyPercent = `${getInput(Fifty)}`;
  hundredPercent = `${getInput(Hundred)}`;
  showGradient.style.background = `linear-gradient(90deg, ${zeroPercent}, ${fiftyPercent}, ${hundredPercent})`;
  let code = `background-gradient: linear-gradient(90deg, ${zeroPercent}, ${fiftyPercent}, ${hundredPercent})`;
  showCode.value = code;
};

const copyCss = () => {
  showCode.disabled = false;
  showCode.select();
  showCode.setSelectionRange(0, 99999);
  document.execCommand("copy");
  console.log("Copied " + showCode.value);
  showCode.disabled = true;
};
randomize();

// Adding Event Listeners
createGrad.addEventListener("click", setGradient);
Zero.addEventListener("input", () => setColorBox(zeroSc, Zero));
Fifty.addEventListener("input", () => setColorBox(fiftySc, Fifty));
Hundred.addEventListener("input", () => setColorBox(hundredSc, Hundred));
createRandomGrad.addEventListener("click", randomize);
copycode.addEventListener("click", copyCss);
