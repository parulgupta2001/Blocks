const modal = document.querySelector(".modal");
const btn = document.querySelector("#myBtn");
const span = document.querySelector(".close");


btn.addEventListener("click", () => 
    modal.style.display = "block")



span.addEventListener("click",()=> modal.style.display = "none") 

