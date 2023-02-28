//Aquí va el codigo javascrip
const muestraNombre = document.getElementById('muestra-nombre'),
muestraTipo = document.getElementById('muestra-tipo'),
muestraDescripcion = document.getElementById('muestra-descripcion'),
muestraId = document.getElementById('muestra-id');

const boton = document.getElementById('form-captura');

boton.addEventListener("submit", myfunction)

function myfunction(e){
    e.preventDefault()
    let Id = document.getElementById('ID').value;
    let Nombre = document.getElementById('Nombre').value;
    let Tipo = document.getElementById('Tipo').value;
    let descrip = document.getElementById('descrip').value;

    muestraId.innerHTML = Id;
    muestraNombre.innerHTML = Nombre;
    muestraTipo.innerHTML = Tipo;
    muestraDescripcion.innerHTML = descrip;
}
let ruta = 'http://localhost:3000'
fetch(ruta,{
     
})