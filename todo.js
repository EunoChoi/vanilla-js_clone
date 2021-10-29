const todoForm = document.querySelector("#todo_form");


function input(event){
    event.preventDefault();
    changBg();
}
todoForm.addEventListener("submit", input);
