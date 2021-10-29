const todoForm = document.querySelector("#todo_form");
const list = document.querySelector("#todolist li");
const popup = document.querySelector("#popup");
const popupClose = document.querySelector("#popup_close");

function input(event){
    event.preventDefault();
    changBg();
}

function viewOpen(){
    popup.style.display = "flex";
}

function viewClose(){
    popup.style.display = "none";
}

todoForm.addEventListener("submit", input);
list.addEventListener("click", viewOpen)
popupClose.addEventListener("click", viewClose);
