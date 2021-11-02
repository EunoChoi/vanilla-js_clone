const clock = document.querySelector("#clock");

function getEventTime()
{
    const date = new Date();

    now = {
        id : String(date.getTime()),
        year : String(date.getFullYear()%100).padStart(2,"0"),
        month : String(date.getMonth()+1).padStart(2,"0"),
        day : String(date.getDate()).padStart(2,"0"),
        hours : String(date.getHours()).padStart(2,"0"),
        minutes : String(date.getMinutes()).padStart(2,"0"),
        seconds : String(date.getSeconds()).padStart(2,"0")
    };

   return now;
}

function startInterval(func, ms)
{
    func();
    return setInterval(func,ms);
}

function timer()
{
    const now = getEventTime();
    clock.innerText = `${now.hours}:${now.minutes}:${now.seconds}`;
}

startInterval(timer,1000);


