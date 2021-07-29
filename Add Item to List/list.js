
var list = document.querySelector("ul");
var add = document.querySelector("#add");

add.addEventListener("click",function(){

  var li=document.createElement("li"); 
  li.textContent=data.value;  
  list.appendChild(li);
  data.value = "";
});