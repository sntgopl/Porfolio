
document.addEventListener('DOMContentLoaded', ()=>{

const modal = document.querySelector("#menuModal");
const hamburger = document.querySelector("#hamburger");

console.log('javascript is working');

hamburger.addEventListener('click', ()=>{
    modal.style.display = "block";
});
});