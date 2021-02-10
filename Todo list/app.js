//Selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//Event Listener
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", checkDelete);

//Function
function addTodo(evt) {
    evt.preventDefault();
    //todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create Li
    const newTodoLi = document.createElement("li");
    newTodoLi.innerText = todoInput.value;
    newTodoLi.classList.add("todo-item");
    todoDiv.appendChild(newTodoLi);
    //Checked button
    const checkedBtn = document.createElement("button");
    checkedBtn.innerHTML = '<i class="fas fa-check"></i>'
    checkedBtn.classList.add("checked-button")
    todoDiv.appendChild(checkedBtn);
    //Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
    deleteBtn.classList.add("delete-button")
    todoDiv.appendChild(deleteBtn);
    //Append to list
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

function checkDelete(evt){
    const item = evt.target;
    //Delete todo
    if(item.classList[0] === "delete-button"){
        const todo = item.parentElement;
        todo.remove();
    }
}