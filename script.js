const titulo = document.getElementById("titulo")


function trocaCorTitulo() {
    if (titulo.style.color == "white") {
        titulo.style.color = "black"
        return
    }
    titulo.style.color = "white"
}

function saudacao() {
    console.log("Olá")
    return
    console.log("Oi!")
}

saudacao()