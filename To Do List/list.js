
var list = document.querySelector("ul");
var add = document.querySelector("#addButton");


add.addEventListener("click",function(){
    if(textHere.value == ""){
        alert("You must type something to add item to the list");
    }
    else{
        var li=document.createElement("li"); 
        li.textContent=textHere.value;  
        list.appendChild(li);
        textHere.value = "";
    }

});

