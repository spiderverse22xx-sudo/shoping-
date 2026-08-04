async function enviar(){

    let mensaje = document.getElementById("mensaje").value;

    let respuesta = document.getElementById("respuesta");

    respuesta.innerHTML = "Pensando... 🤖";

    let res = await fetch(
        "https://shopinng.app.n8n.cloud/webhook/84216a82-db04-4056-87ce-3255af95964b",
        {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                mensaje: mensaje
            })
        }
    );

    let datos = await res.json();

    respuesta.innerHTML = datos.respuesta;
}
