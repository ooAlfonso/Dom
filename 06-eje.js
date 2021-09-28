    //.querySelector hace hace el enlace con los elementos de mi html
const $boton = document.querySelector('#boton')
const $lst =document.querySelector('#lst')

    // .addEventListener hace referencia al evento sobre el boton 
$boton.addEventListener('click', () => {

    //esta parte de codigo se crea un nuevo elemento usando .createElement
    const cntItem = document.createElement(`li`)
    cntItem.textContent = 'nuevo elemento';

    // .appendChild agrega elemento a mi lista 
    $lst.appendChild(cntItem);

});

