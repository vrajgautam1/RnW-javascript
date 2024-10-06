// create an empty array
let tasksArray = []

function generateTask() {
    // Prevent the default form submission

    // 1 - get access of the task list container
    let taskListContainer = document.getElementById("taskListContainer")

    // 2 - get values from the input field
    let taskText = document.getElementById("taskText").value

    // 3 - validation
    if (!taskText) {
        alert("Please enter a task")
        return;
    }

    ///--------*****************MOST IMPORTANT*************--------/////
    // 4 - store the task in the array
    tasksArray.push(taskText) // Store the task in the array

    //----------------------------------------------------------------------------------
    // 5 - create a task container element and its child elements where I will store tasks
    let taskContainer = document.createElement("div")

    // 5.0.1 taskText span
    let taskContainerText = document.createElement("span")

    // 5.0.2 taskDelete button and its div
    let taskDeleteButtonDiv = document.createElement("div")
    let taskDeleteButton = document.createElement("button")

    //5.0.2.1
    taskDeleteButtonDiv.appendChild(taskDeleteButton)

    // 5.1 - add taskContainerText and delete button to the taskContainer
    taskContainer.appendChild(taskContainerText)
    taskContainer.appendChild(taskDeleteButtonDiv)
    
    //----------------------------------------------------------------------------------------

    // 6 - add tailwind CSS classes to the created elements
    taskContainer.classList.add("flex", "justify-between", "border-b", "py-2")
    // taskContainerText.classList.add("")
    taskDeleteButtonDiv.classList.add("pl-5")
    taskDeleteButton.classList.add("bg-green-600", "hover:bg-white","hover:text-lime-600","shadow-lg", "px-2", "text-white", "font-semibold", "py-2", "px-1", "rounded")

    taskContainer.addEventListener("mouseenter",function(){
        taskDeleteButtonDiv.classList.add("border-l-2", "border-slate-800")
    })

    taskContainer.addEventListener("mouseleave",function(){
        taskDeleteButtonDiv.classList.remove("border-l-2", "border-slate-800")
    })

    // 7 - add text to the taskContainerText element
    taskContainerText.textContent = taskText
    taskDeleteButton.innerHTML = "Completed"

    // 8 - append the taskContainer to the taskListContainer
    taskListContainer.appendChild(taskContainer)

    // 9 - clear the input field
    document.getElementById("taskText").value = ""

    // 10 - add event listener to the delete button
    taskDeleteButton.addEventListener("click", function() {
        // Remove the task from the array
        tasksArray = tasksArray.filter(task => task !== taskText); // Update the array
        taskListContainer.removeChild(taskContainer); // Remove the task from the DOM
    })
}
