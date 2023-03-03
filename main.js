let eleccion= +prompt("Elige una tarjeta : 1-SantanderVisa 2-MasterCard 3-AmericanExpress ")
let monto = +prompt('Elige el monto de la compra')
let SantanderVisa = 1
let MasterCard = 2;
let AmericanExpress = 3

// prompt('La tarjeta elegida es :'+ eleccion)

if (eleccion ===1){
    alert('La tarjeta elegida es Santander Visa')

    let cuotas = +prompt('En cuantas cuotas quiere operar? : 12 - 24 -36 ')
    if (cuotas ===12){
        calcularInteres(1)
     alert('El interés en 12 cuotas le queda en : $'+ monto + ' por mes')

    } else if (cuotas === 24) {
        calcularInteres(1);
        alert('El interés en 24 cuotas le queda en : $ '+ monto + ' por mes')
    } else if (cuotas === 36) {
        calcularInteres(1);
        alert('El interés en 36 cuotas le queda en : $ '+ monto + ' por mes')
    } else {
        alert("El numero seleccionado no es correcto")
    }
   
}else if (eleccion===2) {
    alert('La tarjeta elegida es MasterCard')
    let cuotas = +prompt('En cuantas cuotas quiere operar? : 12 - 24 -36 ')
    if (cuotas ===12){
        calcularInteres(2)
     alert('El interés en 12 cuotas le queda en : $'+ monto + ' por mes')

    } else if (cuotas === 24) {
        calcularInteres(2)
        alert('El interés en 24 cuotas le queda en : $ '+ monto + ' por mes')
    } else if (cuotas === 36) {
        calcularInteres(2)
        alert('El interés en 36 cuotas le queda en : $ '+ monto + ' por mes')
    } else {
        alert("El numero seleccionado no es correcto")
    }
} else {
    alert('La tarjeta elegida es AmericanExpress')
    let cuotas = +prompt('En cuantas cuotas quiere operar? : 12 - 24 -36 ')
    if (cuotas ===12){
        calcularInteres(3)
     alert('El interés en 12 cuotas le queda en : $'+ monto + ' por mes')

    } else if (cuotas === 24) {
        calcularInteres(3)
        alert('El interés en 24 cuotas le queda en : $ '+ monto + ' por mes')
    } else if (cuotas === 36) {
        calcularInteres(3)
        alert('El interés en 36 cuotas le queda en : $ '+ monto + ' por mes')
    } else {
        alert("El numero seleccionado no es correcto")
    }
}
// FUNCION CALCULO

function calcularInteres (){
   let cuotas = 0;
    switch (eleccion) {
        case 1:
              alert("El interes con esta tarjeta es del 10 %")
              monto = Math.round(monto*10)/100;
              

            break;
        case 2:
            alert("El interes con esta tarjeta es del 20 %")
            monto = Math.round(monto*20)/100;
            
            break;
         case 3:
            alert("El interes con esta tarjeta es del 30 %")
            monto = Math.round(monto*30)/100;
            
            break;
    
        default: alert('Opción Incorrecta');
            break;
    }
}
