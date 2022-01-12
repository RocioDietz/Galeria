const menu_= document.querySelector('.menu0');
const menu= document.querySelector('.menu-navegacion');

console.log(menu)
console.log(menu_)

menu_.addEventListener('click', ()=>{
 menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')&& e.target != menu && e.target != menu_)
    menu_
})