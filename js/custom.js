//vars

let $containerAnuncios = document.querySelector('main'); //guardamos mi clase "anuncio" en containerAnuncios
let containerCompra = document.querySelector('.contenido'); 
let priceTotal = document.querySelector('.price-total');
let amountProduct = document.querySelector('.count-product');


let comprarE = [];
let Total = 0; 
let countProduct = 0;


//functions

//agregamos un evento click a mis anuncios(cartas) y le pasamos la funcion addproduct
function EventListener(){
    $containerAnuncios.addEventListener('click', agregarProducto);

    containerCompra.addEventListener('click', borrarProducto); 
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
 function borrarProducto(e){
     if (e.target.classList.contains('eliminar-producto')){
         const eliminarId = e.target.getAttribute('data.id')
         comprarE.forEach(value => {
             if(value.id == deleteId){
                 let priceReduce =parseFloat(value.precio)*parseFloat(value.amount);
                 Total =Total-priceReduce;
                 Total = Total.toFixed(2);
             }
         })
         comprarE = comprarE.filter(productoI => productoI.id !== deleteId); 
         countProduct --;
     }
     cargaHTML();
      
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

     Total = parseFloat (Total)  + parseFloat(infoproduct.precio);
     Total = Total.toFixed(2);

     const exist = comprarE.some(productoI => productoI.id === infoproduct.id);
     if(exist){
         const prod =comprarE.map(producto => {
             if(producto.id === infoproduct.id){
                 producto.agregarProducto++;
                 return producto;
                }else{
                    return producto
                }
             });
            agregarProducto= [...prod];
        }else{
            comprarE = [...comprarE,infoproduct]
            countProduct ++;
        }
     }
     comprarE = [...comprarE, productoI]
     cargaHTML();
     console.log(productoI);
     //console.log(productoD); 
     ;


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
        `;
        containerCompra.agregarProducto(r);

        precio.innerHTML = Total;

        amountProduct.innerHTML = countProduct;
     });
function limpiarHTML(){
        containerCompra.innerHTML = '';

}
 }

 




