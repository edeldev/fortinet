const menu = document.querySelector('#menu');
const mostrar = document.querySelector('#mostrar');

menu.addEventListener("click", () => {
    if( mostrar.classList.contains('d-none') ){
        mostrar.style.display = 'block'
        mostrar.classList.remove('d-none');
    } else {
        mostrar.style.display = 'none';
        mostrar.classList.add('d-none');
    }
});