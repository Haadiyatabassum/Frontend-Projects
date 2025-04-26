


document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
    const allTasksButton = document.getElementById("allTasks");
    const activeTasksButton = document.getElementById("activeTasks");
    const completedTasksButton = document.getElementById("completedTasks");

    function addTask(taskText) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function() {
            const newText = prompt("Edit task:", taskItem.textContent);
            if (newText) {
                taskItem.childNodes[0].nodeValue = newText;
            }
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(taskItem);
        });

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.addEventListener("click", function() {
            taskItem.classList.toggle("completed");
        });

        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);
        taskItem.appendChild(completeButton);

        taskList.appendChild(taskItem);
    }

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });

    allTasksButton.addEventListener("click", function() {
        const tasks = document.querySelectorAll("li");
        tasks.forEach(task => task.style.display = "");
    });

    activeTasksButton.addEventListener("click", function() {
        const tasks = document.querySelectorAll("li");
        tasks.forEach(task => {
            if (task.classList.contains("completed")) {
                task.style.display = "none";
            } else {
                task.style.display = "";
            }
        });
    });

    completedTasksButton.addEventListener("click", function() {
        const tasks = document.querySelectorAll("li");
        tasks.forEach(task => {
            if (task.classList.contains("completed")) {
                task.style.display = "";
            } else {
                task.style.display = "none";
            }
        });
    });
});
