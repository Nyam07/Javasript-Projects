//variables
const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

//event listener for add button
addTask.addEventListener('click', function(){

    //create a task class for the tasks entered
    let task = document.createElement('div');
    task.classList.add('task');

    //Create a list of tasks entered
    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    //create the check button
    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton)

    //create the delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add("deleteTask");
    task.appendChild(deleteButton);

    //show the elements
    if(inputTask.value === ""){
        alert("Please Enter a Task")
    }
    else{
        taskContainer.appendChild(task)
    }
    inputTask.value = "";

    //check
    checkButton.addEventListener('click', function(){
        checkButton.parentElement.style.textDecoration = 'line-through';
    });

    //delete functionality
    deleteButton.addEventListener('click', function(e){
        let target = e.target;
        target.parentElement.parentElement.remove();
    });
});