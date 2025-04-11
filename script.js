document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let taskTitle = document.getElementById("taskTitle").value.trim();
    let taskDescription = document.getElementById("taskDescription").value.trim();
    let priority = document.querySelector("input[name='priority']:checked");

    if (!taskTitle) {
        alert("Task title is required!");
        return;
    }

    if (!priority) {
        alert("Please select a priority!");
        return;
    }

    let taskList = document.getElementById("taskList");

    
    let newTask = document.createElement("li");
    newTask.classList.add("task");

    newTask.innerHTML = `
        <div>
            <strong>${taskTitle}</strong> (${priority.value}) <br>
            <small>${taskDescription}</small>
        </div>
        <div>
            <button class="complete-btn">✓</button>
            <button class="delete-btn">✗</button>
        </div>
    `;

    taskList.appendChild(newTask);

    
    document.getElementById("taskForm").reset();
});


document.getElementById("taskList").addEventListener("click", function(event) {
    let clickedElement = event.target;

    if (clickedElement.classList.contains("complete-btn")) {
        let taskItem = clickedElement.closest("li");
        taskItem.classList.toggle("completed");
    }

    if (clickedElement.classList.contains("delete-btn")) {
        let taskItem = clickedElement.closest("li");
        taskItem.remove();
    }
});

let showCompleted = false;

document.getElementById("filterCompleted").addEventListener("click", function() {
    let tasks = document.querySelectorAll("#taskList .task");

    if (!showCompleted) {
        
        tasks.forEach(task => {
            if (!task.classList.contains("completed")) {
                task.style.display = "none"; 
            }
        });
        this.innerText = "Show All"; 
    } else {
        
        tasks.forEach(task => {
            task.style.display = "flex"; 
        });
        this.innerText = "Show Completed";
    }

    showCompleted = !showCompleted; 
});
