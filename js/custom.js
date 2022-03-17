//vars

let $containerAnuncios = document.querySelector(".seccion"); //guardamos mi clase "anuncio" en containerAnuncios
let $containerCompra = document.querySelector(".container-sm");
let $precioTotal = document.querySelector('.precio-total');


let comprarP = [];
let Ptotal = 0;

//functions

//agregamos un evento click a mis anuncios(cartas) y le pasamos la funcion addproduct
EventListener();
function EventListener() {
  $containerAnuncios.addEventListener("click", agregarProducto);
  $containerCompra.addEventListener("click", eliminarProducto);
}

//imprime el evento click actual
function agregarProducto(e) {
  e.preventDefault();
  if (e.target.classList.contains("boton")) {
    //condicionamos el evento a solo el "boton"
    const productoS = e.target.parentElement;
    contenido(productoS);
  }
}

function eliminarProducto(e) {
  if (e.target.classList.contains("eliminarO")) {
    const eliminarid = e.target.getAttribute("data-id");

    comprarP.forEach(value =>{
        if (value.id === eliminarid) {
            let retsarP = parseFloat(value.precio) * parseFloat(value.contador);
            Ptotal = Ptotal - retsarP;
            Ptotal = Ptotal.toFixed(2);
        }
    })
    comprarP = comprarP.filter((producto) => producto.id !== eliminarid);
  }
  cargaHTML();
}

function contenido(producto) {
  const productoI = {
    imagen: producto.querySelector("div img").src,
    precio: producto.querySelector(".precio").textContent,
    titulo: producto.querySelector(".tallas").textContent,
    modelo: producto.querySelector("h3").textContent,
    id: producto.querySelector("a").getAttribute("data-id"),
    contador: 1
  };

  Ptotal = parseFloat(Ptotal) + parseFloat(productoI.precio);
  Ptotal = Ptotal.toFixed(2);

  const repetido = comprarP.some(producto => producto.id === productoI.id);
  if (repetido) {
      const p = comprarP.map(producto =>{
          if (producto.id === productoI.id) {
              producto.contador++;
              return producto;
          }else{
              return producto;
          }
      });
      comprarP = [...p];
  }else{

      comprarP = [...comprarP, productoI];
  }

  cargaHTML();
}

function cargaHTML() {
  limpiar();
  comprarP.forEach((producto) => {
    const { imagen, precio, titulo, modelo, contador, id } = producto;
    const r = document.createElement("div");
    r.classList.add("container-sm");
    r.innerHTML = `
         <div class="container-sm">
         <div class="anuncio">
         <div class="contenido-anuncio">
             <img src="${imagen}" alt="">
             <h3 class="modelo">${modelo}</h3>
             <p class="precio">${precio}</p>
             <p class="tallas">${titulo}</p>
            <button><span class="eliminarO" data-id="${id}">X</span></button> 
            <p class="contador">contador:${contador}</p>
         </div>
     </div>
                            </div>
         `;

    $containerCompra.appendChild(r);

    $precioTotal.innerHTML = Ptotal;
  });
}

function limpiar() {
  $containerCompra.innerHTML = "";
}
