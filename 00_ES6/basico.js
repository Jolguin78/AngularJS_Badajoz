// Ejemplo de código en ES6
var data = [{precio: 12}, {precio: 34}, {precio: 19}];

// Función arrow =>
// Con muchos elementos Arrow: () => {}
// Con un solo elemento: Arrow: (a,b) => a+b

data.forEach( elem =>{
if (true) {

   const iva = 1.16
   let precioFinal = elem.precio * iva
  
   console.log(`
   Oferta:
   El precio final es ${precioFinal}`) // Comillas francesas, crean un template de String donde se respetan los retornos de carro, etc
}

// Fuera del bloque las variables no son accesibles
//console.log (precioFinal)
});