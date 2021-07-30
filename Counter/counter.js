let counter = 0;
let increaseDOM = document.querySelector("#increase");
let decraseDOM = document.querySelector("#decrease");
let counterDOM = document.querySelector("#counter");

counterDOM.innerHTML = counter; //set the initial value of the counter in the screen

increaseDOM.addEventListener("click",clicked);
decraseDOM.addEventListener("click",clicked);


function clicked(){
    if(this.id == "increase"){
        counter++;
        counterDOM.innerHTML = counter;
    }
    else if(this.id == "decrease"){
        counter--;
        counterDOM.innerHTML = counter;
    }    
}