

async function iniciar() {
    const { data, error } = await supabaseclient.from("productos").select();
    if (error) {
        console.error("Error al leer productos:", error);
        return;
    }
    console.log("Productos encontrados:", data);



    const cuerpoTabla = document.querySelector("#cuerpo-productos");

    const filas = data.map((producto) => `
<tr>
<td>${producto.nombre}</td>
<td>${producto.precio}</td>
<td>${producto.stock}</td>
</tr>
`).join("");

    cuerpoTabla.innerHTML = filas;
}
iniciar();