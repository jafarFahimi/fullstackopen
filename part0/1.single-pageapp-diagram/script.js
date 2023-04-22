const input = document.getElementById("text");
const listCont = document.getElementById("list-container");

const storageItems = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

for (let val of storageItems) {
  const newLi = document.createElement("li");
  const newA = document.createElement("a");
  newA.innerText = val;
  newA.href = val;
  newLi.insertAdjacentElement("afterbegin", newA);
  listCont.appendChild(newLi);
}

document.getElementById("save").addEventListener("click", () => {
  const newLi = document.createElement("li");
  const newA = document.createElement("a");
  newA.innerText += input.value;
  newA.href = input.value;
  newLi.insertAdjacentElement("afterbegin", newA);
  storageItems.push(input.value);
  localStorage.setItem("items", JSON.stringify(storageItems));
  listCont.appendChild(newLi);

  input.value = "";
});
