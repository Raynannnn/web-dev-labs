const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
const list = document.getElementById("fruit-list");

for (let i = 0; i < fruits.length; i++) {
  const li = document.createElement("li");
  li.textContent = fruits[i];
  list.appendChild(li);
}
