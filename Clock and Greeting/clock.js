let userName = prompt("What is your name?");
let name = document.querySelector("#myName");
name.innerHTML = userName;

let clock = document.querySelector("#myClock");
function showTime(){
    var newDate = new Date();
    var s = newDate.getSeconds();
    var m = newDate.getMinutes();
    var h = newDate.getHours();
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dayName = days[new Date().getDay()];
    clock.textContent = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2) + " " +dayName;
}
setInterval(showTime, 1000);
