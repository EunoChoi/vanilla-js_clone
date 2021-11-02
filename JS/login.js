const CLASS_HIDDEN = "hidden";
const loginForm = document.querySelector("#login_form");
const headerTitle = document.querySelector(".header h1");
const inputName = document.querySelector("#input_name");
const wellcomeArea = document.querySelector("#wellcome");
const splash = document.querySelector("#splash_img");


function loginByName(name) {
    headerTitle.style.color = "salmon";
    headerTitle.innerText = `${name}'s Todo`;
    loginForm.style.display = "none";
    weather.classList.toggle(CLASS_HIDDEN);
}

function submitLogin(event) {

    setTimeout(function () {
        history.go(0)
    }, 1100);

    event.preventDefault();
    loginByName(inputName.value);

    //after login changed header area
    clock.classList.remove(CLASS_HIDDEN);
    todoForm.classList.remove(CLASS_HIDDEN);
    wellcomeArea.classList.remove(CLASS_HIDDEN);

    const mq = window.matchMedia("screen and (max-width : 600px)");


    //headerArea add class that header_col 
    if (mq.matches) {
        headerArea.style.height = "300px";
        headerArea.style.width = "100vw";
    }
    //header tag add class that header_rol
    else {
        headerArea.style.height = "100vh";
        headerArea.style.width = "300px";
    }

    startInterval(timer, 1000);
    //use local storage
    localStorage.setItem("user", inputName.value);
}

loginForm.addEventListener("submit", submitLogin);

if (localStorage.getItem("user") == null && localStorage.getItem("todoDB") == null) {
    splash.style.visibility = "visible";
    clock.classList.add("hidden");
    todoForm.classList.add("hidden");
    headerArea.style.width = "100vw";
    headerArea.style.height = "100vh";
    headerArea.style.alignItems = "center";
}

if (localStorage.getItem("user") != null) {
    loginByName(localStorage.getItem("user"));
}

else {
    headerArea.style.height = "100vh";
    headerArea.style.padding = "150px 0px";
}