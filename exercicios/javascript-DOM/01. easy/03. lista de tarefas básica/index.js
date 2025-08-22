/*
    o	Input para adicionar tarefas
    o	Botão remover ao lado de cada item
*/

let buttonAdd = document.getElementById("add");
let taskList = document.getElementById("taskList");

buttonAdd.addEventListener("click", () => {
    let taskText = window.prompt("Digite o nome da tarefa:");

    if (taskText !== null && taskText.trim() !== "") {
        let newTaskItem = document.createElement("li");
        newTaskItem.textContent = taskText;

        let removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.classList.add("remove-task");

        removeButton.addEventListener("click", () => {
            newTaskItem.remove();
        });

        newTaskItem.appendChild(removeButton);
        taskList.appendChild(newTaskItem);
    }
});