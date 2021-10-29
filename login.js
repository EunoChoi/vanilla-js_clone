const CLASS_HIDDEN = "hidden";
const loginForm = document.querySelector("#login_form");
const headerTitle = document.querySelector(".header h1");
const inputName = document.querySelector("#input_name");

loginForm.addEventListener("submit",submitLogin);


function startInterval(func, ms)
{
    func();
    return setInterval(func,ms);
}

function submitLogin(event){
    event.preventDefault();
    headerTitle.style.color = "salmon";
    headerTitle.style.fontSize = "34px";
    headerTitle.innerText = `Wellcome ${inputName.value}`;

    loginForm.style.display = "none";
    clock.classList.toggle(CLASS_HIDDEN);
    weather.classList.toggle(CLASS_HIDDEN);
    startInterval(timer,1000);
}
