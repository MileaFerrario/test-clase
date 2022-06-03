const navegacion = document.querySelector(".navegacion");
const menu = document.querySelector(".menu-navegacion");

console.log(navegacion)
console.log(menu)

navegacion.addEventListener("click", () =>{
    menu.classList.toggle("spread")
})
