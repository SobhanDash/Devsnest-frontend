//selectors
const box = document.querySelector(".box");
const booked = document.querySelector(".book");
const remain = document.querySelector(".remain");

//seats
const seats = document.createElement("div");
seats.className = "seats";

//variables
let bCount = 0;
let rCount = 95;
let number = rCount;
remain.innerHTML = `${rCount}`;

//render the boxes
for (let i = 0; i < number; i++) {
  //cloneNode for copying all attributes of the seats
  box.appendChild(seats.cloneNode(true));
}

//event listener
document.addEventListener("click", (e) => {
  //if the targets are seats
  if (e.target.classList.contains("seats")) {
    //if it has occupied class, remove it and fix the seat counts
    if (e.target.classList.contains("occupied")) {
      e.target.classList.remove("occupied");
      bCount--;
      rCount++;
    }
    //if it doesn't have occupied, add it and fix seat counts
    else {
      e.target.classList.add("occupied");
      bCount++;
      rCount--;
    }

    //final update
    booked.innerHTML = `${bCount}`;
    remain.innerHTML = `${rCount}`;
  }
});
