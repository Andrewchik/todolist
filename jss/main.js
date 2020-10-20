let addMessage = document.querySelector('.message')
let addButton = document.querySelector('.add')
let todo = document.querySelector('.todo')

let todoList = []


if(localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'))
    displayMessages()
}



addButton.addEventListener('click', function () {

    if (addMessage.value == '') {
        alert('Введіть завдання!')
    } else {
        let newTodo = {
            todo: addMessage.value,
            checked: false,
            important: false
        };

        todoList.push(newTodo)
    
        displayMessages()
        localStorage.setItem('todo', JSON.stringify(todoList))
        addMessage.value = ''
    }
       
     
    });

    function displayMessages() {
        let displayMessage = '';
        todoList.forEach(function(item, i){
            displayMessage += `
            <li>
                <input type = 'checkbox'  id='item_${i}' ${item.checked ? 'checked' : ''}>
                <label for='item_${i}'>${item.todo}</label>
            </li>
           
            <select size = "1">
            <option>0:00</option>
            <option>1:00</option>
            <option>2:00</option>
            <option>3:00</option>
            <option>4:00</option>
            <option>5:00</option>
            <option>6:00</option>
            <option>7:00</option>
            <option>8:00</option>
	            <option>9:00</option>
	            <option>10:00</option>
	            <option>11:00</option>
                <option>12:00</option>
                <option>13:00</option>
                <option>14:00</option>
                <option>15:00</option>
                <option>16:00</option>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
                <option>23:00</option>
            </select>
            `
            
           todo.innerHTML = displayMessage
        })

    }