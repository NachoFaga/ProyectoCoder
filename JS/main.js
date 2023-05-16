const toggle = document.querySelector('.toggle')
const links = document.querySelector('.links')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('rotate')
    links.classList.toggle('active')
})


/* Lo de arriba no lo hice yo */


let testJS = 5 

if (testJS == 5){
    console.log("El JS funciona correctamente!")
}

let nombreUsuario = prompt("Hola bienvendio! cual es tu nombre?")

if (nombreUsuario == "") {
    alert("Hola?")
}
else {
    alert("Bienvenido, " + nombreUsuario + "!")
}

let servicio = prompt("Un gusto " + nombreUsuario +", Estas aqui de 'Visita' o buscas 'Presupuesto'?");

if((servicio == "Visita") || (servicio == "Presupuesto")){
    alert("Seleccionaste " + servicio + ".")
}else{
    alert("Ingrese una opcion valida porfavor.")
}



function presupuesto (primerNumero, segundoNumero, operacion){
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero
        case "-":
            return primerNumero - segundoNumero
        case "*":
            return primerNumero * segundoNumero
        case "/":
            return primerNumero / segundoNumero
        default:
            return primerNumero * segundoNumero
    }
}
console.log(presupuesto(10, 2, "*"));