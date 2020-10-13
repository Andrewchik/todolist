let addMessage = document.querySelector('.message')
let addButton = document.querySelector('.add')
let todo = document.querySelector('.todo')

let todoList = []

addButton.addEventListener('click', function (params) {

        let newTodo = {
            todo: addMessage.value,
            checked: false,
            important: false
        };

        todoList.push(newTodo)
        displayMessages()
     
    });

    function displayMessages() {
        let displayMessage = '';
        todoList.forEach((item, i) => {
            displayMessage += `
            <li>
                <input type = 'checkbox' id='item_${i}'>
                <label for='item_${i}'>${item.todo}</label>
            </li>
            `
           todo.innerHTML = displayMessage
        })
    }