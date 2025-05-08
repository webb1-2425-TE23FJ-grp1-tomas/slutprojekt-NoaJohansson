const bodyconst= document.body
const buttonconst=document.getElementById("color-button");
const albumlist=document.getElementsByClassName("albumlist")

buttonconst.addEventListener("click" , function(){

console.log("det fungerar");
bodyconst.classList.toggle("temp-color")

})