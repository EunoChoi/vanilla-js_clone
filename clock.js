const clock = document.querySelector("#clock");

function timer()
{
    const date = new Date();
    const year = String(date.getFullYear()).padStart(2,"0");
    const month = String(date.getMonth()).padStart(2,"0");
    const day = String(date.getDate()).padStart(2,"0");
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
