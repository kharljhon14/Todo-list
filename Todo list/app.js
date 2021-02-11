//Selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector("#filter-todo");
//Event Listener
document.addEventListener("DOMContentLoaded", loadLocalTodos);
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", checkDelete);
filterOption.addEventListener("click", filterTodo);
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
    saveLocalTodos(todoInput.value);
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

function createTodo() {
    //todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create Li
    const newTodoLi = document.createElement("li");
    newTodoLi.innerText = todoInput.value;
    newTodoLi.classList.add("todo-item");
    todoDiv.appendChild(newTodoLi);
    saveLocalTodos(todoInput.value);
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

function checkDelete(evt) {
    const item = evt.target;
    //Delete todo
    if (item.classList[0] === "delete-button") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        removeLocalTodos(todo);
        //Delete listener
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }
    //Check todo
    if (item.classList[0] === "checked-button") {
        const todo = item.parentElement;
        todo.classList.toggle("checked");
    }
}

function filterTodo(evt) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (evt.target.value) {

            case "all":
                todo.style.display = "flex";
                break;

            case "completed":
                if (todo.classList.contains("checked")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;

            case "uncompleted":
                if (!todo.classList.contains("checked")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    })
}

//Save Data
function saveLocalTodos(todo) {
    //Check if file already exist
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

//Load Data
function loadLocalTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function (todo) {
        //todo Div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        //Create Li
        const newTodoLi = document.createElement("li");
        newTodoLi.innerText = todo;
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
    })
}

//Remove local Todos
function removeLocalTodos(todo){
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}
