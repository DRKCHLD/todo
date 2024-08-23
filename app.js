const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector (".todo-list");
const filteroption = document.querySelector(".filter-todo");


todoList.addEventListener('click', deleteCheck);
filteroption.addEventListener ('click', filtertodo);
todoButton.addEventListener("click", addTodo );


function addTodo(event) {

    event.preventDefault();

    //create a new div to contain lists
   const todoDiv = document.createElement("div");

   //adding a class to the div
   todoDiv.classList.add("todo");

   //create a list to hold todo information
   const newTodo = document.createElement("li");
   
   newTodo.innerText = todoInput.value;
   newTodo.classList.add("todo-item");
   todoDiv.appendChild(newTodo);

   const completedButton = document.createElement ("button");
    completedButton.innerHTML = '<i class = "fas fa-check">';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
 
    const trashButton = document.createElement ("button");
    trashButton.innerHTML = '<i class = "fas fa-trash">';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    //clear the todo input value
    todoInput.value = "";
    
}





function deleteCheck (e) {
    const item = e.target;

    if (item.classList [0] === 'trash-btn') {
      const todo = item.parentElement;
      todo.classList.add ("fall");
      todo.addEventListener ('transitionend', function () {
        todo.remove();
      })
    
    }

    if (item.classList [0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
      }
}



function filtertodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        
        if (todo.nodeType === 1) { 
            switch(e.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (!todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
            }
        }
    });
}












// function filtertodo(e) {
//     const todos = todoList.childNodes;
//     todos.forEach(function(todo) {
//      switch(e.target.value) {

//         case "all":
//         todo.style.display = "flex";
//         break;

//         case "completed":
//         if(todo.classList.contains("completed")) {
//          todo.style.display = "flex";   
//         }
//         else {
//             todo.style.display = "none";
//         }

//         break;

//         case "uncompleted":
//             if (!todo.classList.contains("completed")) {
//                 todo.style.display = "flex";
//             }
//             else {
//                 todo.style.display = "none";
//             }
//             break;
//      }   
//     });
// }





