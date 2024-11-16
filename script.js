const titulo = document.getElementById("titulo")


function trocaCorTitulo() {
    if (titulo.style.color == "red") {
        titulo.style.color = "black"
        return
    }
    titulo.style.color = "red"
}

function saudacao() {
    console.log("Olá")
    return
    console.log("Oi!")
}

saudacao()