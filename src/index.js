// imports 

// form handling to add new todo
const form = document.querySelector("#newtodo");
// when form is submitted
form.onsubmit = function(e) {
    console.log(e);
    e.preventDefault();
    const { title, description, dueDate, project } = form;
    addBookToArray(
        new Todo(
            title.value,
            description.value, 
            dueDate.value,
            project.value
        )
    );
    console.log('test' + project.value);
    
    if (project.value === "default") {
        console.log('output is default');
        renderTodo();
    }
    if (project.value === "work") {
        console.log('output is work');
        renderTodoWork();
    }
};

const arrayDefault = [];
const arrayWork = [];
// Create a todo object with a constructor 
function Todo(title, description, dueDate, project) {
    this.title = title,
    this.description = description, 
    this.dueDate = dueDate,
    this.project = project
    
}

// add book to array 
function addBookToArray(Todo) {
    if (Todo.project == "default") {
        arrayDefault.push(Todo);
        console.log("Add Todo to array triggered!" + arrayDefault);
    } else if (Todo.project == "work"){
        arrayWork.push(Todo);
        console.log("Todo added to work array");
    }
}

// create a todo 
addBookToArray(new Todo("Take Out Trash", "description", "1/3/2019", "default"));
addBookToArray(new Todo("Walk Dog", "description", "1/3/2018", "default"));
// create work todo
addBookToArray(new Todo("Learn Javascript", "description", "1/3/2019", "work"));

console.log(Todo);
console.log(arrayDefault);

// to retrieve all info about an object 
Todo.prototype.info = function() {
    return `${this.title}`;
}

// for each object in the array export to an li on the page 
function renderTodo() {
    var demo = document.querySelector("#demo");
    demo.innerHTML = "";
    const todos = arrayDefault.map((todo, index) => createLi(todo, index));
    // if (todo.projec)
    todos.forEach(todo => demo.appendChild(todo));
}

function createLi(todo, index) {
    const ul = document.createElement('ul');
    ul.dataset.index = index;
    const li = document.createElement('li');
    li.innerHTML = todo.info();
    ul.appendChild(li);

    // create delete button 
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Complete";
    deleteButton.onclick = () => {
        removeTodoFromArray(index);
        // re render todo
        renderTodo();
    };
    li.appendChild(deleteButton);
    return ul;
}


// add an object to the array
function addTodoToArray(todo) {
    arrayDefault.push(todo);
}

// from the object from the array
function removeTodoFromArray(index) {
    arrayDefault.splice(index, 1);
    console.log(arrayDefault);
}

// When todo delete button is clicked on 
function deleteTodo(ev) {
    // alert("delete button clicked!");
    // console.log the element that was clicked
    console.log(ev.currentTarget);
}
renderTodo();
renderTodoWork();
// show form toggle when add todo is clicked
document.getElementById("addtodo").addEventListener("click", function() {
    var x = document.getElementById("newtodo");
    if (x.classList.contains('form-hidden')) {
        x.classList.add('form-show');
        x.classList.remove('form-hidden');
    } 
    else if (x.classList.contains('form-show')) {
        x.classList.add('form-hidden');
        x.classList.remove('form-show');
    }
});

// Work List functions 
function renderTodoWork() {
    var demo = document.querySelector("#demo2");
    demo2.innerHTML = "";
    const todos = arrayWork.map((todo, index) => createLi(todo, index));
    // if (todo.projec)
    todos.forEach(todo => demo2.appendChild(todo));
}

function createLiWork(todo, index) {
    const ul = document.createElement('ul');
    ul.dataset.index = index;
    const li = document.createElement('li');
    li.innerHTML = todo.info();
    ul.appendChild(li);

    // create delete button 
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Complete";
    deleteButton.onclick = () => {
        removeTodoFromArrayWork(index);
        // re render todo
        renderTodoWork();
    };
    li.appendChild(deleteButton);
    return ul;
}

// remove todo from array work 
// add an object to the array
function addTodoToArrayWork(todo) {
    arrayWork.push(todo);
}

// from the object from the array
function removeTodoFromArrayWork(index) {
    arrayWork.splice(index, 1);
    console.log(arrayWork);
}