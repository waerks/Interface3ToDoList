const userInput = document.getElementById('userInput');
const btnAjout = document.querySelector('.btnAjout');
const toDoList = document.querySelector('.list ul');

btnAjout.addEventListener('click', (event) => {
    userToDo(event);
})

function userToDo(){
    const elemList = document.createElement('li');

    const btnRemove = document.createElement('button');

    btnRemove.innerText = "🗑️";
    btnRemove.classList.add('btnRemove');

    btnRemove.addEventListener('click', (event) => {
        elemList.remove();
    })

    if (userInput.value != ""){
        elemList.innerHTML = userInput.value + " ";
        elemList.append(btnRemove);
        
        toDoList.append(elemList);
    }
}