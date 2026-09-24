
// function saludar() {
//     return console.log("hola");
// }

// saludar();

// const saludar = () => console.log("hola amigos");
// saludar();

// const triple = (n) => n * 3;

// console.log(triple(4));


// const ingresodisco = (edad) => {
//     if (edad >= 18) {
//         console.log("puedes entrar");
//     } else {
//         console.log("no puedes entrar");
//     }
// }

// ingresodisco(19);


// let cantidad = 3;
// let preciounitario = 50;

// const subtotal = (c, p) => c * p;

// console.log(subtotal(cantidad, preciounitario));


//template strings

// let nombre = "elias";
// let edad = 15;
// console.log(nombre + "tiene" + edad + "amos");

// console.log(´´)

// const producto = {
//     id: 2,
//     nombre: "martillo",
//     precio: 45,
//     stock: 12,
// };

// const nombre = producto.nombre;
// console.log(nombre);

// const id = producto.id;
// console.log(id);

// const { id, nombre } = producto;

// console.log(id);
// console.log("tienes ${stock} ${nombre}s");


// const usuario = {
//     id: 3,
//     nombre: "elias",
//     rol: "admin",
//     edad: 25,
// };

// const { nombre, edad } = usuario;
// console.log(`${nombre} tiene ${edad} años`);


// const respuesta = {
//     data: ["matillo", "alicate", "taladro"],
//     error: null,
// };

// const { data, error } = respuesta;
// console.log(`${data}`);

// console.log(`${data} ${error}`);


// const productos = [
//     { nombre: "Martillo", precio: 45, existencia: 12 },
//     { nombre: "Taladro", precio: 350, existencia: 5 },
//     { nombre: "Clavos", precio: 15, existencia: 40 },
// ];

// const nombres = productos.map((p) => p.nombre);
// console.log(nombres);

// const precios = productos.map((p) => p.precio);
// console.log(precios);

// const preciosiva = productos.map((p) => p.precio * 1.13);
// console.log(preciosiva);

// const preciosmayorcien = productos.map((p) =>{
//     if (p.precio > 100) {
//         return p.nombre;
//     }
//     else{
// return null;
//     }
// });
//  console.log(preciosmayorcien);


// const preciosmayorcien = productos.filter((p) => p.precio > 100);
// console.log(preciosmayorcien);

// const stockmenores = productos.filter((p) => p.existencia < 10);
// console.log(stockmenores);

// const taladro = productos.find((p) => p.nombre === "Taladro");
// console.log(taladro);


// const totalInventario = productos.reduce((suma, p) => suma + p.precio, 0);
// console.log(totalInventario);


// const costototal = productos.reduce((total, p) => total + p.precio * p.existencia, 0);
// console.log(costototal);


// function esperar(ms) {
//     return new Promise((resolve) => setTimeout(() => resolve("listo"), ms));
// }

// const mipromesa = esperar(3000);
// console.log(mipromesa);


// async function ejemplo() {
//     console.log("antes de esperar");
//     const resultado = await esperar(5000);
//     console.log("despues de esperar", resultado);
// }

// ejemplo();
// console.log("esto se imprime mientras se espera");

