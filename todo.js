const todoForm = document.querySelector("#todo_form");

const popup = document.querySelector("#popup");
const popupClose = document.querySelector("#popup_close");

const listText = document.querySelectorAll(".todolist_text");
const list = document.querySelectorAll("#todolist li");

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

popupClose.addEventListener("click", viewClose);

for(let i=0;i<listText.length;i++)
{
    listText[i].addEventListener("click", viewOpen);
}
