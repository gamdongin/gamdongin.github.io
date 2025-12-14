const todoForm = document.querySelector("#todo-form");
const todoFormInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const itemArray = [];

// 시작 함수
ItemSynchronization();
todoForm.addEventListener("submit", addTodoItem);

function addTodoItem(event){
    event.preventDefault();
    const newTodo = todoFormInput.value;
    todoFormInput.value = "";

    addTodoItem_module(newTodo);
    ItemUpdate();
}
function addTodoItem_module(itemSpan){
    itemArray.push(itemSpan);

    const newTodoItem = document.createElement("li");
    const newTodoItemSpan = document.createElement("span");
    newTodoItemSpan.innerText = itemSpan;
    const newTodoItemDeleteButton = document.createElement("button");
    newTodoItemDeleteButton.addEventListener("click", deleteTodoItem);
    newTodoItemDeleteButton.innerText = "X";

    newTodoItem.appendChild(newTodoItemDeleteButton);
    newTodoItem.appendChild(newTodoItemSpan);
    todoList.appendChild(newTodoItem);
}

function deleteTodoItem(event){
    event.preventDefault();
    const deletTarget = event.target.parentElement;
    const parentDeletTarget = deletTarget.parentElement;
    const index = Array.from(parentDeletTarget.children).indexOf(deletTarget);
    todoList.removeChild(deletTarget);

    if (index !== -1){
        itemArray.splice(index, 1);
    }
    console.log(itemArray);
    ItemUpdate();
}

function ItemUpdate(){
    const items_value = JSON.stringify(itemArray);
    localStorage.setItem("items", items_value);
}

function ItemSynchronization(){
    let itemArray_saveData = localStorage.getItem("items");
    if (itemArray_saveData){
        itemArray_saveData = JSON.parse(itemArray_saveData);
        // 자동으로 첫번째 인자에 값이 들어감
        // itemArray_saveData.forEach(addTodoItem_module);
        
        // itemArray_saveData.forEach((item) => {
        //     addTodoItem_module(item);
        // });
        itemArray_saveData.forEach(item => addTodoItem_module(item));
    }
}