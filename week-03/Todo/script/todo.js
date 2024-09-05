let counter = 1;

function addTodo(){
    const inputElement = document.querySelector("input");
    const value = inputElement.value;

    if (value === '') {
        alert('Please enter a todo item.');
        return;
      }
      
    const newDivElement = document.createElement("div");
    // newDivElement.setAttribute("id", `${counter}`);
    newDivElement.setAttribute("id", `todo${counter}`);
    newDivElement.innerHTML = `<span>${value}<span><span>&nbsp&nbsp</span><button onclick="deleteTodo(${counter})">delete</button>`;

    document.querySelector("body").appendChild(newDivElement);
    counter++;
    inputElement.value = '';
}

// function deleteTodo(index){
//     const delElement = document.getElementById(index);
//     delElement.parentNode.removeChild(delElement);
// }

function deleteTodo(index){
    const delElement = document.querySelector(`#todo${index}`);
    delElement.parentNode.removeChild(delElement);
}