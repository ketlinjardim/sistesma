

/*LISTA DE ATIVIDADES*/
const form = document.getElementById("item-form");
const itemList = document.getElementById("item-list");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const itemName = document.getElementById("item-name").value;

  const newItem = document.createElement("li");
  newItem.innerHTML = `
    ${itemName}
    <button class="edit-btn">Editar</button>
    <button class="delete-btn">Excluir</button>
  `;

  itemList.appendChild(newItem);
  document.getElementById("item-name").value = "";

  const editButton = newItem.querySelector(".edit-btn");
  editButton.addEventListener("click", function() {
    const updatedName = prompt("Editar nome do item:", itemName);
    if (updatedName) {
      newItem.firstChild.textContent = updatedName;
    }
  });

  const deleteButton = newItem.querySelector(".delete-btn");
  deleteButton.addEventListener("click", function() {
    itemList.removeChild(newItem);
  });
});
