console.log('up and running');
//Aquí va el codigo javascripv
const muestraProducto = document.getElementById('muestra-producto');
const muestraTipo = document.getElementById('muestra-tipo');
const muestraDescripcion = document.getElementById('muestra-descripcion');
const muestraId = document.getElementById('muestra-id');

const formulario = document.getElementById('form-captura');

formulario.addEventListener("submit", myfunction)

function myfunction(e){
    e.preventDefault()
    let Id = document.getElementById('ID').value;
    let Nombre = document.getElementById('Nombre').value;
    let Tipo = document.getElementById('Tipo').value;
    let descrip = document.getElementById('descrip').value;

    muestraId.innerHTML = "("+Id+")";
    muestraProducto.innerHTML = Nombre;
    muestraTipo.innerHTML = Tipo;
    muestraDescripcion.innerHTML = descrip;
}