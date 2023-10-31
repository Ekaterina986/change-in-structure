const button = document.getElementById("tasks__add");
const textArea = document.getElementById("task__input");


function taskAdd(e) {
    e.preventDefault();
    const textAreaVal = textArea.value.trim()
    if (textAreaVal.length === 0) {
        return;
    }
    const tasksList = document.getElementById("tasks__list");
    console.log(111, textAreaVal)
    const div = 
        `<div class="task">
            <div class="task__title">${textAreaVal}</div>
            <a href="#" class="task__remove" onclick='remove(this)'>&times;</a>
        </div>`;
    tasksList.innerHTML += div;
    textArea.value = '';
}

function remove(elem) {
    elem.parentNode.remove();
}


// function keyupEnter(e) {
//     if(e.key === 'Enter') {
//         taskAdd(e);
//     } 
//     else return;
// }

button.addEventListener('click', taskAdd);
// textArea.addEventListener('keyup', keyupEnter);