import { colors } from "./colors.js";
const select1 = document.getElementById("select-one");
const select2 = document.getElementById("select-two");
const select3 = document.getElementById("select-three");
const div = document.getElementById("color-merge");
const btn = document.getElementById("merge-color");
let selectedValue1;
let selectedValue2;
let selectedValue3;
let red1;
let red2;
let red3;
let green1;
let green2;
let green3;
let blue1;
let blue2;
let blue3;

colors.map((color, index) => {
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");
  const option3 = document.createElement("option");
  option1.dataset.key = index;
  option1.textContent = color.name;
  option2.dataset.key = index;
  option2.textContent = color.name;
  option3.dataset.key = index;
  option3.textContent = color.name;
  select1.appendChild(option1);
  select2.appendChild(option2);
  select3.appendChild(option3);
});
select1.addEventListener("change", (e) => {
  selectedValue1 = e.target.value;
  if (selectedValue1) {
    for (let i = 0; i < colors.length; i++) {
      if (selectedValue1 === colors[i].name) {
        red1 = Number(colors[i].rgb.split(",")[0]);
        green1 = Number(colors[i].rgb.split(",")[1]);
        blue1 = Number(colors[i].rgb.split(",")[2]);
      }
    }
  }
});
select2.addEventListener("change", (e) => {
  selectedValue2 = e.target.value;
  if (selectedValue2) {
    for (let i = 0; i < colors.length; i++) {
      if (selectedValue2 === colors[i].name) {
        red2 = Number(colors[i].rgb.split(",")[0]);
        green2 = Number(colors[i].rgb.split(",")[1]);
        blue2 = Number(colors[i].rgb.split(",")[2]);
      }
    }
  }
});
select3.addEventListener("change", (e) => {
  selectedValue3 = e.target.value;
  if (selectedValue3) {
    for (let i = 0; i < colors.length; i++) {
      if (selectedValue3 === colors[i].name) {
        red3 = Number(colors[i].rgb.split(",")[0]);
        green3 = Number(colors[i].rgb.split(",")[1]);
        blue3 = Number(colors[i].rgb.split(",")[2]);
      }
    }
  }
});
btn.addEventListener("click", () => {
  if (
    (red1 || red1 === 0) &&
    (red2 || red2 === 0) &&
    (red3 || red3 === 0) &&
    (green1 || green1 === 0) &&
    (green2 || green2 === 0) &&
    (green3 || green3 === 0) &&
    (blue1 || blue1 === 0) &&
    (blue2 || blue2 === 0) &&
    (blue3 || blue3 === 0)
  ) {
    console.log(red1);
    let red;
    let green;
    let blue;
    if (red1 === 0 || red2 === 0 || red3 === 0) {
      red = Math.floor(red1 + red2 + red3 / 2);
    } else if (
      (red1 == 0 && red2 === 0) ||
      (red1 == 0 && red3 === 0) ||
      (red2 == 0 && red3 === 0)
    ) {
      red = Math.floor(red1 + red2 + red3);
    } else if (red1 === 0 && red2 === 0 && red3 === 0) {
      red = Math.floor(red1 + red2 + red3);
    } else if (red1 !== 0 && red2 !== 0 && red3 !== 0) {
      red = Math.floor((red1 + red2 + red3) / 3);
    }

    if (green1 === 0 || green2 === 0 || green3 === 0) {
      green = Math.floor(green1 + green2 + green3 / 2);
    } else if (
      (green1 == 0 && green2 === 0) ||
      (green1 == 0 && green3 === 0) ||
      (green2 == 0 && green3 === 0)
    ) {
      green = Math.floor(green1 + green2 + green3);
    } else if (green1 === 0 && green2 === 0 && green3 === 0) {
      green = Math.floor(green1 + green2 + green3);
    } else if (green1 !== 0 && green2 !== 0 && green3 !== 0) {
      green = Math.floor((green1 + green2 + green3) / 3);
    }

    if (blue1 === 0 || blue2 === 0 || blue3 === 0) {
      blue = Math.floor(blue1 + blue2 + blue3 / 2);
    } else if (
      (blue1 == 0 && blue2 === 0) ||
      (blue1 == 0 && blue3 === 0) ||
      (blue2 == 0 && blue3 === 0)
    ) {
      blue = Math.floor(blue1 + blue2 + blue3);
    } else if (blue1 === 0 && blue2 === 0 && blue3 === 0) {
      blue = Math.floor(blue1 + blue2 + blue3);
    } else if (blue1 !== 0 && blue2 !== 0 && blue3 !== 0) {
      blue = Math.floor((blue1 + blue2 + blue3) / 3);
    }

    div.style.backgroundColor = `rgb(${red},${green},${blue})`;
  }
  console.log(div.style.backgroundColor);
});
