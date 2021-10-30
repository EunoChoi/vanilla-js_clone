const CLASS_HIDDEN = "hidden";
const loginForm = document.querySelector("#login_form");
const headerTitle = document.querySelector(".header h1");
const inputName = document.querySelector("#input_name");
const wellcomeArea = document.querySelector("#wellcome");

loginForm.addEventListener("submit",submitLogin);


function startInterval(func, ms)
{
    func();
    return setInterval(func,ms);
}

function loginByName(name){
    headerTitle.style.color = "salmon";
    headerTitle.style.fontSize = "34px";
    headerTitle.innerText = `Wellcome ${name}`;
    loginForm.style.display = "none";
    clock.classList.toggle(CLASS_HIDDEN);
    weather.classList.toggle(CLASS_HIDDEN);
}

function submitLogin(event){
    event.preventDefault();
    loginByName(inputName.value);

    //after login changed header area
    todoForm.classList.toggle(CLASS_HIDDEN);
    wellcomeArea.classList.toggle(CLASS_HIDDEN);

    headerArea.style.height = "300px";

    startInterval(timer,1000);
    //use local storage
    localStorage.setItem("user", inputName.value);
}

if(localStorage.getItem("user")!=null){
    loginByName(localStorage.getItem("user"));
    startInterval(timer,1000);
}
else{
    headerArea.style.height = "100vh";
    todoForm.classList.toggle(CLASS_HIDDEN);
}
