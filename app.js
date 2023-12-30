var addBtn = document.getElementById("add-task")
var taskinput = document.getElementById("task")
var tasklist = document.getElementById("tasks") 

addBtn.addEventListener("click", function(){
    var task = taskinput.value
    addTask(task)
    taskinput.value = " "
})

function addTask(task) {
    var li = document.createElement("li")
    li.innerHTML = task
    tasklist.appendChild(li)
}
