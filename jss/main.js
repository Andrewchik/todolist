let addMessage = document.querySelector('.message')
let addButton = document.querySelector('.add')
let todo = document.querySelector('.todo')
let newList = document.querySelector('#modalWin')
let modal = document.querySelector('.modal')
let modal_No = document.querySelector('#modalNo')
let modal_Yes = document.querySelector('#modalYes')
const dateElement = document.querySelector('#date')
const burgerBtn = document.querySelector('.burger-menu_btn')


let todoList = []


if(localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'))
    displayMessages()
}

///





addButton.addEventListener('click', function () {

    if (addMessage.value == '') {
        alert('Введіть завдання!')
    } else {
        let newTodo = {
            todo: addMessage.value,
            checked: false,
            time: 'none'
        };

        todoList.push(newTodo)
    
        displayMessages()
        localStorage.setItem('todo', JSON.stringify(todoList))
        addMessage.value = ''

// ----------------------------------------TEXT ANIMATION-----------------------------------------------------------------


const paper=document.querySelector('h1');
const text=paper.innerText.split('');
const t='<span>'+text.join('</span><span>')+'</span>';
paper.innerHTML=t;
let i=0;
setInterval(()=>{if(i<text.length){document.querySelectorAll('h1 span')[i].style.color='red'; i++}}, 100)


// ----------------------------------------------------------------------------------------------------------
    // console.log(todoList);
    }
       
     
    })


    modal_Yes.addEventListener('click', function(e){
            e.preventDefault()
            localStorage.removeItem('todo')
            location.reload()
            // console.log(todoList);
    })

    function displayMessages() {
        let displayMessage = '';
        todoList.forEach(function(item, i){
            displayMessage += `
            
            <li>
                <input type = 'checkbox'  id='item_${i}' ${item.checked ? 'checked' : ''}>
                <label style = "font-size: 20px;" for='item_${i}'>${item.todo}</label>
            </li>
           <div class = "selects">
            <select id = "time" size = "1" >
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
            </div>
            <hr>
            `
            
           todo.innerHTML = displayMessage
        })

    }

    todo.addEventListener('change', function (event) {
       let idInput = event.target.getAttribute('id')
       let valueLabel = todo.querySelector('[for='+ idInput + ']').innerHTML
      
       todoList.forEach(function (item) {
           if(item.todo == valueLabel){
               item.checked = !item.checked
               localStorage.setItem('todo', JSON.stringify(todoList))
           }

        //    if (item.checked) {
        //     idInput.style.cssText = 'text-decoration: line-through;'
        // }
       })
    })


    /////////////////////////////////////////// Burger Menu  !////////////////////////////////////////////////////////////////////////
    const sidebarBox = document.querySelector('#box'),
    sidebarBtn = document.querySelector('#btn'),
    pageWrapper = document.querySelector('.todo_list');
    
    sidebarBtn.addEventListener('click', event => {
    sidebarBtn.classList.toggle('active');
    sidebarBox.classList.toggle('active');
    });
    
    pageWrapper.addEventListener('click', event => {
    
    if (sidebarBox.classList.contains('active')) {
            sidebarBtn.classList.remove('active');
            sidebarBox.classList.remove('active');
    }
    });
    
    window.addEventListener('keydown', event => {
    
    if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
            sidebarBtn.classList.remove('active');
            sidebarBox.classList.remove('active');
    }
    });

    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Modal Wnidow

    newList.addEventListener('click', function() {
        modal.style.display = 'block'
    })
    modal_No.addEventListener('click', function() {
        modal.style.display = 'none'
    })

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none'
        }
    })

    ///////////////////////Date///////////////////////////////
     const options = {weekday: 'long', month: 'short', day: 'numeric'}
    const today = new Date()
    dateElement.innerHTML = today.toLocaleDateString("en-US", options)
    
