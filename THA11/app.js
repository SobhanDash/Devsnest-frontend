//selectors
const ip = document.querySelector(".todoIp");
const add = document.querySelector(".toggle");
const container = document.querySelector(".show-container");

//creating todo
function createTodo() {
  const todoDiv = document.createElement("div");
  todoDiv.className = "todo";

  const pDiv = document.createElement("p");
  pDiv.className = "info";
  pDiv.innerText = `${ip.value}`;

  const btnsDiv = document.createElement("div");
  btnsDiv.className = "btns";

  const delDiv = document.createElement("i");
  delDiv.className = "fas fa-trash delete";

  btnsDiv.append(delDiv);
  todoDiv.append(pDiv, btnsDiv);
  container.append(todoDiv);
}

//delete todo
function delTodo(e) {
  let li = e.target.parentNode.parentNode;
  container.removeChild(li);
}

add.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    createTodo();
    ip.value = "";
  }
});

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    delTodo(e);
  }
});
















// WITH EDIT FUNCTIONALITY(UNDER CONSTRUCTION)
//selectors
// const ip = document.querySelector(".todoIp");
// const add = document.querySelector(".toggle");
// const container = document.querySelector(".show-container");

// //creating todo
// function createTodo() {
//   const todoDiv = document.createElement("div");
//   todoDiv.className = "todo";

//   const pDiv = document.createElement("p");
//   pDiv.className = "info";
//   pDiv.innerText = `${ip.value}`;

//   const btnsDiv = document.createElement("div");
//   btnsDiv.className = "btns";

// const editDiv = document.createElement("i");
// editDiv.className = "fas fa-edit edit";
//   const delDiv = document.createElement("i");
//   delDiv.className = "fas fa-trash delete";

// btnsDiv.append(editDiv, delDiv);
//   todoDiv.append(pDiv, btnsDiv);
//   container.append(todoDiv);
// }

// //delete todo
// function delTodo(e) {
//   let li = e.target.parentNode.parentNode;
//   container.removeChild(li);
// }

// function editTodo(e) {
//   let pDataDiv = document.querySelector(".info");
//   // console.log(pDataDiv);
//   pDataDiv.innerText = ip.value;
//   // console.log(pDataDiv);
//   ip.value = "";
//   add.classList.remove("fa-edit", "edit");
//   add.classList.add("fa-plus-square", "add");
// }

// add.addEventListener("click", (e) => {
//   if (e.target.classList.contains("add")) {
//     createTodo();
//     ip.value = "";
//   }
// if (e.target.classList.contains("edit")) {
//   editTodo(e);
// }
// });

// container.addEventListener("click", (e) => {
//   if (e.target.classList.contains("delete")) {
//     delTodo(e);
//   }
// if (e.target.classList.contains("edit")) {
//   var para = e.target.parentNode.parentNode.childNodes[0];
//   ip.value = para.innerText;
//   add.classList.remove("fa-plus-square", "add");
//   add.classList.add("fa-edit", "edit");
// }
// });
