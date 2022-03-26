const btn = document.querySelector(".toast-btn");
const msg = document.querySelector(".toast-msg");


btn.addEventListener("click", () => {
    msg.style.display = "block"
    setTimeout(()=> msg.style.display = "none",3000)
})

