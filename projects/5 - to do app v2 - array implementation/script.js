let tasksArray = [];

function generateTask() {
    let taskListContainer = document.getElementById("taskListContainer");
    let taskText = document.getElementById("taskText").value;

    if (!taskText) {
        alert("Please enter a task");
        return;
    }

    // Store task in the array
    tasksArray.push(taskText);

    let taskContainer = document.createElement("div");
    let taskContainerText = document.createElement("span");
    let taskDeleteButtonDiv = document.createElement("div");
    let taskDeleteButton = document.createElement("button");

    taskDeleteButtonDiv.appendChild(taskDeleteButton);
    taskContainer.appendChild(taskContainerText);
    taskContainer.appendChild(taskDeleteButtonDiv);

    // Tailwind classes with added hover-shift class for animation
    taskContainer.classList.add("flex", "justify-between", "border-b", "py-2", "transition-all", "hover:bg-gray-100", "hover-shift");
    taskDeleteButtonDiv.classList.add("pl-5");
    taskDeleteButton.classList.add("bg-green-600", "hover:bg-white", "hover:text-lime-600", "shadow-lg", "px-2", "text-white", "font-semibold", "py-2", "rounded");

    taskContainer.addEventListener("mouseenter", function () {
        taskDeleteButtonDiv.classList.add("border-l-2", "border-slate-800");
    });

    taskContainer.addEventListener("mouseleave", function () {
        taskDeleteButtonDiv.classList.remove("border-l-2", "border-slate-800");
    });

    taskContainerText.textContent = taskText;
    taskDeleteButton.innerHTML = "Completed";

    // Append task to the list
    taskListContainer.appendChild(taskContainer);

    document.getElementById("taskText").value = "";

    // Remove task on click with fade-out effect
    taskDeleteButton.addEventListener("click", function () {
        taskContainer.classList.add("fade-out");
        setTimeout(() => {
            tasksArray = tasksArray.filter(task => task !== taskText);
            taskListContainer.removeChild(taskContainer);
        }, 500); // Match timeout with animation duration
    });
}
