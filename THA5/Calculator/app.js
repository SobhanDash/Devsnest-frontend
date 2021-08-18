//selectors
const display = document.querySelector(".inner-text");
const btns = document.querySelectorAll(".inner-button");

//variables
let displayVal = "";
let btnText;

//for each btn click event
for (const btn of btns) {
  btn.addEventListener("click", function (e) {
    //for elements wih no id, assign text from the btns
    if (this.id === "") {
      btnText = e.target.innerText;
      displayVal = display.value;
      displayVal += btnText;
      display.value = displayVal;
    } else {
      //clear the display field
      if (this.id === "clear") {
        display.value = "";
      } else if (this.id === "backspace") {
        //backspace once
        display.value = display.value.substr(0, display.value.length - 1);
      } else if (this.id === "equate") {
        //evaluate the text entered
        calc();
      }
    }
  });
}

//evaluation function
function calc() {
  display.value = eval(display.value.replaceAll("x", "*"));
  if (display.value == "undefined") {
    display.value = "";
  }
}
