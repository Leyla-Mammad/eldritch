let menu_btn = document.querySelector(".menu-icon-btn")
let menu_dropdown = document.querySelector(".dropdown")
menu_btn.addEventListener("click", function(){
    menu_dropdown.classList.toggle("active")
})
console.log(menu_btn);
console.log(menu_dropdown);


