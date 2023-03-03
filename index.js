class Tarjeta{
    constructor( nombre, id, cuota12, cuota24, cuota36) {
        this.nombre = nombre
        this.id = id
        this.cuota12 = cuota12
        this.cuota24 = cuota24
        this.cuota36 = cuota36

    }
}
const tarjetaVisa = new Tarjeta("tarjetVisa",1,10,11,12) 
const tarjetaAmerica = new Tarjeta("tarjetAmerica",22,15,18,20) 
const tarjetaMastercard = new Tarjeta("tarjetMastercard",10,5,10,15) 
const tarjetaCabal = new Tarjeta("tarjetCabal",5,12,18,25) 

const tarjetaDeseada = parseInt(prompt("Elije el numero de la tarjeta que deseas utilizar? 1.tarjetaVisa - 2.tarjetaAmerica - 3.tarjetaMastercard - 4.tarjetaCabal")) 

let eligioTarjeta = false

let infoTarjetaElegida

while(eligioTarjeta === false){
    if(tarjetaDeseada === 1){
        eligioTarjeta = true;
        infoTarjetaElegida = tarjetaVisa
    }
   else if(tarjetaDeseada === 2){
        eligioTarjeta = true;
        infoTarjetaElegida = tarjetaAmerica
    }
    else if(tarjetaDeseada === 3){
        eligioTarjeta = true;
        infoTarjetaElegida = tarjetaMastercard
    }
    else if(tarjetaDeseada === 4){
        eligioTarjeta = true;
        infoTarjetaElegida = tarjetaCabal
    }
    else (tarjetaDeseada = parseInt(prompt("Elije un numero de la tarjeta que deseas utilizar? 1.tarjetaVisa - 2.tarjetaAmerica - 3.tarjetaMastercard - 4.tarjetaCabal")) )
}
const montoSolicitado =parseInt(prompt("ingrese el monto que necesites"))



const cuotaSolicitada =parseInt(prompt("ingrese las cuotas que necesites 1.12 - 2.24 - 3.36"))

let eligioCuotas = false

while(eligioCuotas === false){
    if(cuotaSolicitada === 12){
        eligioCuotas = true;
        
    }
   else if(cuotaSolicitada === 24){
        eligioTarjeta = true;
        
    }
    else if(cuotaSolicitada === 36){
        eligioTarjeta = true;
    }
else(cuotaSolicitada =parseInt(prompt("ingrese las cuotas que necesites 1.12 - 2.24 - 3.36")))
}

const cuota12 = calcularCuota(montoSolicitado,infoTarjetaElegida.tasa12,12)
const cuota24 = calcularCuota(tarjetaDeseada,infoTarjetaElegida.tasa24,24)
const cuota36 = calcularCuota(tarjetaDeseada,infoTarjetaElegida.tasa36,36)
console. log (cuota12, cuota24, cuota36)

function calcularCuota(monto,interes,meses) {
    const cuota =((monto * (monto*interes))/100)/meses
    return cuota
}
alert(`Las cuotas que te ofrece ${infoTarjetaElegida.nombre} son: 1.${cuota12} tasa a 12 cuotas - 2. ${cuota24}  tasa a 24 cuotas- 3. ${cuota36} tasa a 36 cuotas ` )
console. log ("calcularCuota", infoTarjetaElegida, montoSolicitado)
