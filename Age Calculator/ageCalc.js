const getButton=document.querySelector("button");
getButton.addEventListener("click",function(){
const divEl=document.querySelector("div");
const yas =document.querySelector("input[name='yas']").value; 

let result=2022-yas; 
divEl.innerHTML= `Your age is ${result}`; 

if(Math.sign(result)== -1){
    divEl.innerHTML= `Your age cannot be a negative number`;
}
if(result>118){
    divEl.innerHTML= `Wow...Are you sure you are alive? Try again`;
}
if(Number.isInteger(result) == false){
    divEl.innerHTML= `Please only enter a number`;
}

});