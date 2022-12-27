function consulta() {
    let respuesta = prompt("Desea hacer una simulacion? (Y/N):");
    if ((respuesta == "Y") || (respuesta == "y") || (respuesta == "N") || (respuesta == "n")){
        return respuesta;
    } else {
        alert("No es una respuesta valida. (Conteste con Y o N)");
    }
}

function consulta2() {
    let respuesta = prompt("Desea hacer otra simulacion? (Y/N):");
    if ((respuesta == "Y") || (respuesta == "y") || (respuesta == "N") || (respuesta == "n")){
        return respuesta;
    } else {
        alert("No es una respuesta valida. (Conteste con Y o N)");
    }
}

function consulta3() {
    let respuesta = prompt("Desea ver el historial de simulaciones? (Y/N):");
    if ((respuesta == "Y") || (respuesta == "y") || (respuesta == "N") || (respuesta == "n")){
        return respuesta;
    } else {
        alert("No es una respuesta valida. (Conteste con Y o N)");
    }
}

function consulta4() {
    let respuesta = prompt("Desea buscar la simulacion de una persona en particular? (Y/N):");
    if ((respuesta == "Y") || (respuesta == "y") || (respuesta == "N") || (respuesta == "n")){
        return respuesta;
    } else {
        alert("No es una respuesta valida. (Conteste con Y o N)");
    }
}

function nombre() {
    let nombrePersona = prompt("Ingrese Su nombre:");
    return nombrePersona;
}

function precio() {
    let precioSim = parseInt(prompt("Ingrese el precio del articulo:"));
    return precioSim;
}

function banco() {
    let bancoEmisor = prompt("Ingrese el banco emisor de la tarjeta:");
    if ((bancoEmisor == "Nacion") || (bancoEmisor == "Santander") || (bancoEmisor == "Galicia") || (bancoEmisor == "BBVA")){
        return bancoEmisor;
    } else {
        alert("No aceptamos tarjetas emitidas por este banco");
    }
}

function tarjeta() {
    let nombreTarjeta = prompt("Ingrese la red de la tarjeta:");
    if ((nombreTarjeta == "Visa") || (nombreTarjeta == "Mastercard") || (nombreTarjeta == "Cabal")){
        return nombreTarjeta;
    } else {
        alert("No aceptamos tarjetas emitidas por esta red");
    }
}

function cuotas() {
    let numeroCuotas = parseInt(prompt("Ingrese la cantidad de cuotas:"));
    if ((numeroCuotas == 1) || (numeroCuotas == 3) || (numeroCuotas == 6) || (numeroCuotas == 12)){
        return numeroCuotas;
    } else {
        alert("No disponemos de esa cantidad de cuotas");
    }
}

function costo() {
    if ((numeroCuotas == 1)){
        return numeroCuotas;
    } else {
        alert("No disponemos de esa cantidad de cuotas");
    }
}

class Simulacion {
    constructor(nombre1, precio1, emisor1, red1, financiacion1, resultado1, cuota1) {
        this.nombre = nombre1;
        this.precio = precio1;
        this.emisor = emisor1;
        this.red = red1;
        this.financiacion = financiacion1;
        this.resultado = resultado1;
        this.cuota = cuota1;
    }
}

const agregarPersona = () => {
    let persNueva = new Simulacion(persona, precioSimulado, emisor, red, financiacion, resultado, cuota);
    listaPersonas.push(persNueva);
    return listaPersonas;
}

let persona, precioSimulado, emisor, red, financiacion, resultado, cuota;
let listaPersonas = [];
let respuesta = consulta();

while (respuesta == "Y" || respuesta == "y") {
    persona = nombre();
    precioSimulado = precio();
    
    do {
        emisor = banco();
    } while ((emisor != "Nacion") && (emisor != "Santander") && (emisor != "Galicia") && (emisor != "BBVA"));
    
    do {
        red = tarjeta();
    } while ((red != "Visa") && (red != "Mastercard") && (red != "Cabal"));
    
    do {
        financiacion = cuotas();
    } while ((financiacion != 1) && (financiacion != 3) && (financiacion != 6) && (financiacion != 12));
    
    switch(financiacion){
        case 1:
            resultado = precioSimulado;
            cuota = resultado;  
            break;
        case 3:
            resultado = precioSimulado;
            cuota = resultado/3;
            break;
        case 6:
            if ((red == "Visa") || (red== "Mastercard")){
                resultado = precioSimulado;
            } else {
                resultado = precioSimulado + precioSimulado*0.25;
            }
            cuota = resultado/6;
            break;
        case 12:
            if ((red == "Visa") && (emisor == "Santander")){
                resultado = precioSimulado;
            } else {
                resultado = precioSimulado + precioSimulado*0.5;
            }
            cuota = resultado/12;
            break;
    }
    agregarPersona();
    alert (`El precio total a pagar será: $${resultado}`);
    alert (`El valor de la cuota mensual será: $${cuota}`);
    respuesta = consulta3();
    if (respuesta == "Y" || respuesta == "y"){
        listaPersonas.forEach((persona)=> {
            alert(`La simulacion de ${persona.nombre} para el precio $${persona.precio} en ${persona.financiacion} cuotas con tarjeta ${persona.red} del banco ${persona.emisor} es de $${persona.cuota} mensuales`)
        })
    }
    respuesta = consulta4();
    if (respuesta == "Y" || respuesta == "y"){
        let busquedaPersona = prompt("A que persona queres buscar?")
        if (listaPersonas.some(persona => persona.nombre == busquedaPersona)){
            const busqueda = listaPersonas.find(persona => persona.nombre == busquedaPersona);
            console.log(busqueda)
        } else {
            alert ("Esa persona no ha generado ninguna simulacion");
        }
    }
    respuesta = consulta2();
}



