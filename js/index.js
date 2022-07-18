
document.addEventListener('DOMContentLoaded', ()=>{

const modal = document.querySelector("#menuModal");
const hamburger = document.querySelector("#hamburger");
const closeButton = document.querySelector("#closeButton");
const listOption = document.querySelector("#menuList");

console.log('javascript is working');

hamburger.addEventListener('click', ()=>{
    modal.classList.add("open-smooth");
    modal.classList.remove("close-smooth"); 
    modal.style.display = "block";
});

closeButton.addEventListener('click', ()=>{
    modal.classList.remove("open-smooth");   
    modal.classList.add("close-smooth");

    setTimeout (()=>{
        modal.style.display = "none";
    }
    ,500);
})

listOption.addEventListener('click', ()=>{
    modal.style.display = "none";
})


});