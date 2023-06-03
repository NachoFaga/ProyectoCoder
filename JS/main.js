
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

const clientes = [
    {cliente: "Adolfo", correo: "Adolfito44@hotmail.com"},
    {cliente: "Roberto", correo:"Robertito@gmail.com"},
    {cliente: "Goku", correo:"GokuDBZ@gmail.com"},
];

clientes.push ({cliente: "Eminem", correo:"d12@gmail.com"});

const cliente = clientes.map ((el) => el.cliente)

console.log(cliente)

const correo = clientes.map ((el) => el.correo)

console.log(correo)