let arrayDefault = [];

// Create a todo object with a constructor 
function Todo(title, description, dueDate, project) {
    this.title = title,
    this.description = description, 
    this.dueDate = dueDate,
    this.project = project
    
}
// add book to array 
function addBookToArray(Todo) {
    arrayDefault.push(Todo);
}


// create a todo 
addBookToArray(new Todo("Take Out Trash", "description", "1/3/2019", "default"));
addBookToArray(new Todo("Walk Dog", "description", "1/3/2018", "default"));

console.log(Todo);
console.log(arrayDefault);


// for each object in the array export to an li on the page 
arrayDefault.forEach(function (arrayItem) {
    var demo = document.querySelector("#demo");
    demo.dataset.index = index;
    var ul = document.createElement("ul");
    demo.appendChild(ul);
    let x = arrayItem.title;
    var li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = x + ' ' + `${arrayItem.title} <button id="delete">Delete</button>`;
    console.log(x);
    // add event listener for button 
    document.getElementById("delete").addEventListener('click', deleteTodo);
})

// When todo delete button is clicked on 
function deleteTodo(ev) {
    // alert("delete button clicked!");
    // console.log the element that was clicked
    console.log(ev.currentTarget);
}

// when new todo is created 