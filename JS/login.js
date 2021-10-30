const CLASS_HIDDEN = "hidden";
const loginForm = document.querySelector("#login_form");
const headerTitle = document.querySelector(".header h1");
const inputName = document.querySelector("#input_name");
const wellcomeArea = document.querySelector("#wellcome");

loginForm.addEventListener("submit",submitLogin);

function loginByName(name){
    headerTitle.style.color = "salmon";
    headerTitle.style.fontSize = "34px";
    headerTitle.innerText = `Wellcome ${name}`;
    loginForm.style.display = "none";
    weather.classList.toggle(CLASS_HIDDEN);
}

function submitLogin(event){
    event.preventDefault();
    loginByName(inputName.value);

    //after login changed header area
    clock.classList.remove(CLASS_HIDDEN);
    todoForm.classList.remove(CLASS_HIDDEN);
    wellcomeArea.classList.remove(CLASS_HIDDEN);

    headerArea.style.height = "300px";
    headerArea.style.padding = "40px 0px"

    startInterval(timer,1000);
    //use local storage
    localStorage.setItem("user", inputName.value);
}

if(localStorage.getItem("user") == null && localStorage.getItem("todoDB") == null){
    clock.classList.add("hidden");
    todoForm.classList.add("hidden");
}

if(localStorage.getItem("user")!=null){
    loginByName(localStorage.getItem("user"));
}
else{
    headerArea.style.height = "100vh";
    headerArea.style.padding = "150px 0px";
}