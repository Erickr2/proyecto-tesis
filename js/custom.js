//vars

let $containerAnuncios = document.querySelector('main'); //guardamos mi clase "anuncio" en containerAnuncios
let containerCompra = document.querySelector('.contenido'); 

//functions

//agregamos un evento click a mis anuncios(cartas) y le pasamos la funcion addproduct
function EventListener(){
    $containerAnuncios.addEventListener('click', agregarProducto);
 }
 EventListener();


 //imprime el evento click actual
function agregarProducto(e){
     e.preventDefault();
     if(e.target.classList.contains('boton')){ //condicionamos el evento a solo el "boton"
        const productoS = e.target.parentElement;
        contenido(productoS)
    } 
 }

 function contenido(producto){
     const productoD = {
         imagen: producto.querySelector('div img').src,
         precio: producto.querySelector('.precio').textContent,
         titulo: producto.querySelector('.tallas').textContent,
         id: producto.querySelector('a').getAttribute('data-id'),
         modelo: producto.querySelector('.modelo'),
         contador: 1
     }

     comprarE = [...comprarE, productoI]
     cargaHTML();
     console.log(productoI);
     //console.log(productoD); 
 }


 function cargaHTML(){
     comprarE.forEach(producto => {
         
        const {imagen,titulo,precio,modelo,contador} = producto;
        const r = document.createElement('div');
        r.classList.add('contenido-anuncio');
        r.innerHTML = `
        <img src="${imagen}" alt="">
        <div class="contenido">
        <h5>${modelo}</h5>
        <h5 class="precioCA">${precio}</h5>
        <h5 class="${titulo}"></h5>
        <h6>${contador}</h6>
        </div>
        <span class="eliminarO">X</span>
        `
     });
 }

 




