var list = document.querySelector("ul");
var add = document.querySelector("#addButton");
var nodeList =document.getElementsByTagName("li");
var deleteItem = document.getElementsByClassName("close");

//Adding X (closing) to *existing* list items
for(var i= 0; i < nodeList.length; i++){
    var span = document.createElement('span');
    var text = document.createTextNode('\u00D7'); // X char in ascii
    span.className = 'close';
    span.appendChild(text);
    nodeList[i].appendChild(span);
}

//Deleting Items 
for (var i = 0; i < deleteItem.length; i++) {
  deleteItem[i].onclick = function () {
    var selected = this.parentElement;
    selected.style.display = "none";
  };
}

//If task done --> line through
list.addEventListener("click",function (item) {
    if (item.target.tagName === "LI") {
      item.target.classList.toggle("checked");
    }
  }
);

//Adding Items
add.addEventListener("click",function(){
    if(textHere.value == ""){
        alert("You must type something to add item to the list");
    }
    else{
        var li=document.createElement("li"); 
        li.textContent=textHere.value;  
        list.appendChild(li);
        var span = document.createElement('span');
        var text = document.createTextNode('\u00D7'); // X char in ascii
        span.className = 'close';
        span.appendChild(text);
        li.appendChild(span);
        textHere.value = "";

        //Deleting Items 
        for (var i = 0; i < deleteItem.length; i++) {
            deleteItem[i].onclick = function () {
            var selected = this.parentElement;
            selected.style.display = "none";
            };
        }
    }
});



