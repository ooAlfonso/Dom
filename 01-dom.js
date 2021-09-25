/* documen.wrire(`hola desde java script`) */

/* devuelve un arreglo de los elemetos que tengan etiquetq */
// const title = document.getElementsByTagName('h1');
// title[0].innerHTML = 'Titulo cambiado desde javascript';
// const texto = document.getElementById('text')
// texto.innerHTML = 'este texto esta escrito desde javascript';
// texto.style.background = 'blue';
// texto.style.color = '';
// console.log(Texto);



const texto = document.querySelector(`#text`);
Texto.textContent = 'estoy escribiendo desde java script';


/* obtiene un elemento por id  */
document.getElementById
/* obtine todos los elemento de una clase y devuelve un arreglo */

document.getElementsByClassName
/* obtine todos los elemento por nombre y devuelveun arreglo */
document.getElementsByName


const texto = document.querySelector(`#text`);
Texto.textContent = 'estoy escribiendo desde java script';


/*para crear elementos html  */

const div = document.createElement('div');
const body = document.querySelector('body');

body.append(div);
