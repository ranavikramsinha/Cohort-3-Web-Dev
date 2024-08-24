// console.log(document); //* only inside the browser
let counter = 3;
function addTodo() {
    const inputElement = document.getElementById("input");
    const textNode = document.createElement("div");
    textNode.id = `todo-${counter}`
    textNode.innerHTML = `<h4>${counter}. ${inputElement.value}</h4><button onclick="deleteTodo(${counter})">delete</button>`;
    const parentElement = document.getElementById("todoParent");
    parentElement.appendChild(textNode);
    counter++;
}


// let counter = 0;

// function callback() {
//     const h4Elements = document.querySelectorAll("h4");
//     h4Elements[1].innerHTML = `${counter}`;
//     counter = counter + 1;
// }

// setInterval((callback), 1000);

function deleteTodo(index) {
    const element = document.getElementById("todo-" + index);
    // document.getElementById("todoParent").removeChild(element);
    const parentElement = document.getElementById("todoParent");

    //* document.getElementById("todoParent") = element.parentNode 
    //* parentNode property of the Node interface returns the parent of the specified node in the DOM tree
    // element.parentNode.removeChild(element);

    parentElement.removeChild(element);
  }