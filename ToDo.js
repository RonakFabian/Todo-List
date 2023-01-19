
//Model
let todos = [
  {
    title: "Groceries",
    date: new Date('2017-01-03'),
    id: "12"
  }
]

let buttonCounter = 0;



//View
function render() {
  buttonCounter = 0;

  //Empties the todo div
  let todoList = document.getElementById("todo");
  todoList.innerHTML = "";

  document.getElementById("input").value="";
  document.getElementById("date").value="";

  todos.forEach(element => {
    buttonCounter++;

    //Adding a new div element and adding text
    let tempDiv = document.createElement('div');
    tempDiv.className = "task";
    todoList.appendChild(tempDiv);
    let tempSpan = document.createElement('span');
    tempSpan.className="task-title";
    tempSpan.textContent=element.title;
    tempDiv.appendChild(tempSpan);


    //Adding a delete button 
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "X";
    deleteButton.onclick = deleteTask;
    deleteButton.id = buttonCounter;
    deleteButton.className="delete-btn";
    if(element.date!=""){
    let dateButton = document.createElement('button');
    dateButton.textContent = element.date;
    dateButton.id="task-date";
    tempDiv.appendChild(dateButton);
    }
    tempDiv.appendChild(deleteButton);

  });


}



//Controller
function addToDo() {
  let textInput = document.getElementById("input").value;
  let dateInput = document.getElementById("date").value;

  if(textInput.length==0)
  {
    alert("Please Enter a Task Name");
    return;
  }
  
  todos.push(
    {
      title: textInput,
      date: dateInput,
      id: "id"
    });
  saveData();
  render();

}

function init() {
  todos.pop();
}

function deleteTask(event) {
  console.log(event.target.id);
  todos.splice(event.target.id - 1, 1);
  saveData();
  render();
}

function saveData() {
  localStorage.setItem("key", JSON.stringify(todos));
  console.log("data saved");
}

function loadData() {
  let savedTodos = JSON.parse(localStorage.getItem("key"));
  if (Array.isArray(savedTodos)) {
    todos = savedTodos;
  }
  else {
    todos.pop();
  }
}