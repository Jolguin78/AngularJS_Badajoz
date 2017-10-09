//Ejemplo de código en ES6
let oPrueba = {
    precio: 12,
    iva: 1.16,
};

oPrueba.calculaIvaAsync = function () {
    setTimeout (function() {
        let precioFinal = this.precio * this.iva;
        console.log(`
        Usando una función clásica
        El precio final es ${precioFinal}`)
    }, 1000)
}

oPrueba.calculaIvaAsync();


oPrueba.calculaIvaAsync_Arrow = function () {
    setTimeout (() => {
        let precioFinal = this.precio * this.iva;
        console.log(`
        Usando una función Arrow
        El precio final es ${precioFinal}`)        
    }, 1000)    
}

oPrueba.calculaIvaAsync_Arrow();