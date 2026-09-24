

// async function probarConexion() {
//     const { data, error } = await supabaseclient.from("productos").select();
//     console.log(data);
//     console.log(error);
// }
// probarConexion();


// js/app.js
async function iniciar() {
    const { data, error } = await supabaseclient.from("productos").select();
    if (error) {
        console.error("Error al leer productos:", error);
        return;
    }
    console.log("Productos encontrados:", data);
}
iniciar();