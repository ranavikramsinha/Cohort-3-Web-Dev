let currentIndex = 2;

function addTodo(){
    const inputElement  = document.getElementById("inp");
    const inputText = inputElement.value.trim()

    if(inputText === ''){
        alert("Please enter a Todo");
        return;
    }

    const parentElement = document.getElementById("todos");

    const newTodo = document.createElement('li');
    newTodo.setAttribute('id', `todo-${currentIndex}`);

    const newHeading = document.createElement('h4');
    newHeading.textContent = inputText;

    const newButton = document.createElement('button');
    newButton.textContent = 'Delete';
    newButton.setAttribute('onclick', `deleteTodo(${currentIndex})`);

    newTodo.appendChild(newHeading);
    newTodo.appendChild(newButton);
    parentElement.appendChild(newTodo);

    currentIndex++;

    inputElement.value = '';
}

function deleteTodo(index){
    const element = document.getElementById(`todo-${index}`);

    if(element){
        element.parentNode.removeChild(element)
    }
}