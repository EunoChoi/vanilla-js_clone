const todoForm = document.querySelector("#todo_form");
const inputTodos = document.querySelector("#input_todos");

const popup = document.querySelector("#popup");
const popupTime = document.querySelector("#popup_time");
const popupText = document.querySelector("#popup_text");
const popupClose = document.querySelector("#popup_close");

const todoList = document.querySelector("#todolist");
let todoDB = [ ];



function input(event){
    event.preventDefault();

    //input 시간 가져오기
    const inputTime = getEventTime();

    const time = `${inputTime.year}-${inputTime.month}-${inputTime.day}`;
    const timeAlt = `${time}, ${inputTime.hours}:${inputTime.minutes}:${inputTime.seconds}`;
    
    //input value 가져오기
    const text = inputTodos.value;

    //make data object to save
    const db = {
        id : "",
        time : "",
        timeAlt : "",
        text : ""
    }
    db.id = inputTime.id;
    db.time = time;
    db.timeAlt = timeAlt;
    db.text = text;

    //make todoDB
    todoDB.push(db);
    //console.dir(todoDB);
    localStorage.setItem("todoDB",JSON.stringify(todoDB));

    //새로운 입력을 받기위해 입력창 비우기
    inputTodos.value = "";
    
    changBg();
    addList(inputTime.id, time,timeAlt,text);
}

function viewOpen(time, text){
    popup.style.display = "flex";
    popupTime.innerText = time;
    popupText.innerText = text;
}

function viewClose(){
    popup.style.display = "none";
}

function deleteFilter(item){
    if(item.id !== "1635575059099")
        return true;
}

function deleteList(event){
    const li = event.target.parentElement.parentElement;
    const deleteId = event.target.parentElement.className;
    li.remove();

    todoDB = todoDB.filter(item=> item.id != deleteId);
    localStorage.setItem("todoDB",JSON.stringify(todoDB));

    //console.dir(todoDB);
}

function addList(id, time, timeAlt, text){
    //ul태그는 이미 추가되어있으니 li태그를 ul태그 하위에 추가시킨다
    const li = document.createElement("li");
    const spanTime = document.createElement("span");
	const spanText = document.createElement("span");
    const spanDelete = document.createElement("span");
    const i = document.createElement("i");

    //append tag
    li.appendChild(spanTime);
	li.appendChild(spanText);
    li.appendChild(spanDelete);

    spanDelete.appendChild(i);
    spanDelete.className = id;
    i.className = "fas fa-times-circle";
    i.style.color = "lightblue";

    spanTime.innerText = time;
	spanText.innerText = text;

	todoList.appendChild(li);
    
    //add event Listener each span in list
    spanText.addEventListener("click", function(){viewOpen(timeAlt,text)});
    spanDelete.addEventListener("click", deleteList);
}

//로컬스토리지에 todoDB존재한다면 불러온다
if(localStorage.getItem("todoDB")!=null){
    parseTodoDB = JSON.parse(localStorage.getItem("todoDB"));
    todoDB = parseTodoDB;

    for(let i=0; i<parseTodoDB.length; i++){
        addList(parseTodoDB[i].id, parseTodoDB[i].time, parseTodoDB[i].timeAlt, parseTodoDB[i].text);
    }
}

popupClose.addEventListener("click", viewClose);
todoForm.addEventListener("submit", input);
