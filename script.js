const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("List-container");

function addTask() {
  if (inputBox === "") {
    alert("Please write somehting");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.ariaValu;
    listContainer.appendChild("li");
  }
}
