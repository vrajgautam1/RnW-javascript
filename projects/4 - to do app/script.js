function addTask() {
  // 1 - Getting all input data
  let taskText = document.getElementById("taskText").value;
  let priority = document.getElementById("priority").value;
  let taskDate = document.getElementById("taskdate").value;

  // 1.1 Validation: Check if all fields are filled
  if (!taskText || !priority || !taskDate) {
    alert("Please fill in all fields!");
    return;
  }

  // 2 - Getting the task container
  let tlContainer = document.getElementById("TaskListContainer");

  // 3 - Creating div template for adding tasks
  let taskDiv = document.createElement("div");
  let taskDivText = document.createElement("span");
  let taskDivPriority = document.createElement("span");
  let taskDivDate = document.createElement("span");

  // 3.1 - Creating completed button for taskDiv
  let taskDivBtn = document.createElement("button");

  // 4 - Getting the content into the different parts of the task div
  taskDivText.innerHTML = taskText;
  taskDivPriority.innerHTML =  priority;
  taskDivDate.innerHTML =  taskDate;
  taskDivBtn.innerHTML = "Completed";

  // 5 - Adding bootstrap classes to the task div
  taskDiv.classList.add("row", "g-2", "bg-light", "rounded", "py-2", "my-2", "w-100", "mx-auto");

  // 5.1 - Adding bootstrap classes to the task div parts
  taskDivText.classList.add("col-lg-6", "mx-auto", "fw-normal");
  taskDivPriority.classList.add("col-lg-1", "mx-auto", "text-center", "fw-normal");
  taskDivDate.classList.add("col-lg-2", "mx-auto", "text-center");
  taskDivBtn.classList.add("col-lg-2", "mx-auto", "btn", "btn-primary");

  // 5.2 - Adding functionality to mark tasks as completed
  taskDivBtn.addEventListener("click", function () {
    taskDivText.style.textDecoration = "line-through"; // Marks task text as completed
    taskDivPriority.style.textDecoration = "line-through"; // Marks priority as completed
    taskDivDate.style.textDecoration = "line-through"; // Marks date as completed
    taskDivBtn.classList.remove("btn-primary"); // Remove the primary class
    taskDivBtn.classList.add("btn-secondary"); // Add secondary class to mark it completed
    taskDivBtn.disabled = true; // Disable the button once the task is completed
  });

  // 6 - Adding different parts to the task Div
  taskDiv.appendChild(taskDivText);
  taskDiv.appendChild(taskDivPriority);
  taskDiv.appendChild(taskDivDate);
  taskDiv.appendChild(taskDivBtn);

  // 7 - Adding the taskDiv to the task-list-container
  tlContainer.appendChild(taskDiv);

  // 8 - Clear form after submission
  document.getElementById("taskText").value = '';
  document.getElementById("priority").value = '';
  document.getElementById("taskdate").value = '';
}
