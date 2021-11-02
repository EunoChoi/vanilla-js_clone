const colors = ["mediumaquamarine", "lightblue", "lightpink", "steelblue", "slategrey"];
const headerArea = document.querySelector(".header");
const bottomArea = document.querySelector(".bottom");
const popupTime = document.querySelector("#popup_time");

const rand = Math.floor(Math.random() * colors.length);

function changBg() {
    const rand = Math.floor(Math.random() * colors.length);

    //to get different color everytime, using localstorage
    if (localStorage.getItem("currentColor") !== colors[rand]) {
        headerArea.style.backgroundColor = colors[rand];
        bottomArea.style.backgroundColor = colors[rand];
        localStorage.setItem("currentColor", colors[rand]);
        //popupTime.style.backgroundColor = colors[rand];
    }
    else changBg();
}
changBg();

