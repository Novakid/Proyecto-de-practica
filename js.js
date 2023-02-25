//Aquí va el codigo javascripv
let Nombrefun = document.getElementById('Nombrefun'), 
Tipofun = document.getElementById('Tipofun'), 
descripfun = document.getElementById('descripfun');

let boton = document.getElementById('capturar');

boton.addEventListener("submit", myfunction)

function myfunction(e){
    e.preventDefault()
    let Nombre = document.getElementById('Nombre').value;
    let Tipo = document.getElementById('Tipo').value;
    let descrip = document.getElementById('descrip').value;

    Nombrefun.innerHTML = Nombre;
    Tipofun.innerHTML = Tipo;
    descripfun.innerHTML = descrip;
}