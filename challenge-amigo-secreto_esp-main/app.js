let lista_Amigos = [];

function agregarAmigo (){
    let nombre = document.getElementById("amigo").value;

    console.log("Amigo agregado");

    if (nombre === ""){
        alert ("Por favor, inserte un nombre.");
    } else {
        lista_Amigos.push(nombre);
        actualizarLista();
        limpiarCaja();
        console.log(lista_Amigos); 
    }
    return; 
}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
    return;

}

function actualizarLista() {
    let listaAmigosElementos = document.getElementById("listaAmigos");
    listaAmigosElementos.innerHTML = "";  

    for (let i = 0; i < lista_Amigos.lenght;i++){
        let li = document.createElement("li");
        li.textContent = lista_Amigos[i];
        listaAmigosElementos.appendChild(li);
    }
}

function sortearAmigo() {
    if (lista_Amigos.length === 0) {
        alert("Por favor, añada amigos primero.");
        return;
    }

    let numeroAleatorio = Math.floor(Math.random() * lista_Amigos.length);
    let amigoSecreto = lista_Amigos[numeroAleatorio];
   
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
    console.log(`El amigo secreto es: ${amigoSecreto}`);
}

