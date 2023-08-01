// Proceso Inicial

alert ("Bienvenido a Maxikiosco FC");
let validacionsocio = prompt("Tiene cuenta creada? \nIngrese 'Si' o 'No'");

const usuario = prompt("Ingrese su usuario");
const dniCuit = prompt("Ingrese su dni/cuit");

console.log ("Pedido para " + usuario + "| Datos de facturacion: " + dniCuit);

//Variables
const fechaPedido = new Date ()

const productos = [
    {id: 1, nombre: "Galletitas", precio: 520, tipo: "almacen"},
    {id: 2, nombre: "Alfajores", precio: 220, tipo: "almacen"},
	{id: 3, nombre: "Queso crema", precio: 850, tipo: "almacen"},
	{id: 4, nombre: "Agua", precio: 620, tipo: "bebidas"},
	{id: 5, nombre: "Gaseosa", precio: 750, tipo: "bebidas"},
	{id: 6, nombre: "Vino", precio: 1200, tipo: "bebidas alcoholicas"},
	{id: 7, nombre: "Cerveza", precio: 700, tipo: "bebidas alcoholicas"},
];

// Destallo los productos existentes
alert("Nuestros productos disponibles son :\n" + productos.map(prod => `${prod.id}. ${prod.nombre}`).join("\n"));

//Tomar de pedido

let pedidoActual = {
    nombreCliente: usuario,
    prod: [],
    total: 0,
  };

function realizarPedido(){
	alert("Por favor seleccioná la cantidad de cada producto");
	  
    // Iteramos sobre productos y solicitamos la cantidad
    productos.forEach((prod) => {
		const cantidad = parseInt(prompt(`¿Cuánto desea llevar de "${prod.nombre}" a "${prod.precio}" (Ingresa 0 si no deseas llevar esta producto)`));
		if (!isNaN(cantidad) && cantidad >= 0) {
		  pedidoActual.prod.push({ 
					nombre: prod.nombre, 
					cantidad: cantidad, 
					precio: prod.precio
		 });
		  pedidoActual.total += cantidad * prod.precio;
		}
	  });
	
	  console.log("Pedido actual:");
	  console.log(pedidoActual);
	  socio(pedidoActual.total);
	}
	
realizarPedido();

//Uso de switch para calcular valor de envio

let barrioEntrega = prompt("Ingrese su zona de entrega: \nCaba $400, \nZona Norte $500, \nZona Sur $600, \nZona Oeste $600");
console.log ("La zona de entrega elegida es: " + barrioEntrega);

let valorEntrega = 0;
switch (barrioEntrega.toLowerCase()){
        case 'caba': 
            valorEntrega = (400);
            break;   
        case 'zona norte':
            valorEntrega = (500);
            break;   
        case 'zona sur':
            valorEntrega = (600);
            break;   
        case 'zona oeste':
            valorEntrega = (700);
            break;              
        default:
            alert("Opción incorrecta");
            break;
     } 
     console.log ("Valor total con entrega en zona " + barrioEntrega + " es de: $" + valorEntrega)

// let valorTotal = 0

function socio(){
    if(validacionsocio.toLowerCase() === 'si'){
        console.log("Por ser socio aplicar descuento del 10%")
        const descuento = pedidoActual.total * 0.1;
        valorTotal = pedidoActual.total - descuento;
        alert("Su pedido con descuento del 10% por ser socio es de: $" + valorTotal);
        console.log("El valor final es de: $" + valorTotal);
    } else {
        valortotal = pedidoActual.total + valorEntrega
    }
}
socio();

// //Uso de function para hacer la suma final

alert ("Gracias por comprar con nosotros. \nTu pedido por $" + (valorTotal + " con fecha " + fechaPedido.toLocaleDateString() + " sera despachado cuanto antes."))
console.log ("Pedido para: " + usuario + " - Facturacion: " + dniCuit)
console.log ("A despachar a zona " + barrioEntrega +" por valor total de $" + valorTotal)
