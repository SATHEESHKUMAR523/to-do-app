function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.className = "list-group-item";

    li.innerHTML = `
        ${taskText}
        <button class="btn btn-danger btn-sm" onclick="this.parentElement.remove()">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
