const container = document.getElementById("container");
const eraser = document.getElementById("eraser");
const squares = document.getElementById("squares");
const clear = document.getElementById("clear");
const rainbow = document.getElementById('rainbow');

let div = [];
let toggleEraser = false;
let rainbowMode = false;
let mouseDown = false
function sketch(number, sides) {
  div.forEach((element) => {
    document.getElementById("container").removeChild(element);
  });
  div = [];
  for (let i = 0; i < number * number; i++) {
    div.push(document.createElement("div"));
  }
  div.forEach((element) => {
    element.style.backgroundColor = "rgb(220, 220, 220)";
    element.style.width = `${sides}px`;
    element.style.height = `${sides}px`;
    document.getElementById("container").appendChild(element);
    element.addEventListener("mouseover", () => {
      if(mouseDown){
      if (toggleEraser == true) {
        element.style.backgroundColor = "rgb(220, 220, 220)";
      }
      else if(rainbowMode == true && element.style.backgroundColor == `rgb(220, 220, 220)`){
        let a = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let c = Math.floor(Math.random() * 255);
        element.style.backgroundColor = `rgb(${a}, ${b}, ${c})`
      }
      else if (rainbowMode == false && element.style.backgroundColor == `rgb(220, 220, 220)`) {
        element.style.backgroundColor = "black";
      }
    }
    });
  });
  console.log(div);
}

window.addEventListener('mousedown', () =>{
  mouseDown = true
  console.log(mouseDown)
})
window.addEventListener('mouseup', () =>{
  mouseDown = false
  console.log(mouseDown)
})
sketch(16, 43.75);

eraser.addEventListener("click", () => {
  if (toggleEraser == false) {
    toggleEraser = true;
    eraser.innerText = "PAINT";
  } else if (toggleEraser == true) {
    toggleEraser = false;
    eraser.innerText = "ERASER";
  }
});

squares.addEventListener("click", () => {
  let number = prompt("Number of squares per side (1-100)");
  while (number < 1 || number > 100) {
    number = prompt("Number of squares per side (1-100)");
  }
  let sides = Math.sqrt((700 * 700) / (number * number));
  sketch(number, sides);
});

clear.addEventListener("click", () => {
  div.forEach((element) => {
    element.style.backgroundColor = "rgb(220, 220, 220)";
  });
});

rainbow.addEventListener('click', e =>{
  if (rainbowMode == false) {
    rainbowMode = true;
  } else if (rainbowMode == true) {
    rainbowMode = false;
  }
})
