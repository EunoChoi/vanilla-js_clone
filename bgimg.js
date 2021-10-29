const colors = ["mediumaquamarine", "lightblue","darkseagreen","lightpink","steelblue","slategrey"];
const headerArea = document.querySelector(".header");
const bottomArea= document.querySelector(".bottom");

const rand = Math.floor(Math.random() * colors.length);

function changBg(){
    const rand = Math.floor(Math.random() * colors.length);
    if(headerArea.style.backgroundColor !== colors[rand]){
        headerArea.style.backgroundColor = colors[rand];
        bottomArea.style.backgroundColor = colors[rand];
    }  
    else changBg();
}
changBg();

