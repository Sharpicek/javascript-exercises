const list = document.querySelector("#list");
const input = document.querySelector("#item");
const button = document.querySelector("#insert");

button.addEventListener("click", () => {
  const item = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const span = document.createElement("span");
  const buttonDelete = document.createElement("button");
  list.appendChild(listItem);
  listItem.appendChild(span);
  listItem.appendChild(buttonDelete);
  span.textContent = item;
  buttonDelete.textContent = "Delete";
  buttonDelete.addEventListener("click", () => list.removeChild(listItem));
  input.focus();
});
