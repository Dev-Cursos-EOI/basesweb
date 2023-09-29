
function cambiarTexto() {
    document.getElementById("titulo").innerHTML = "La vida es bella"
    document.getElementById("texto").innerHTML = "Lo que tu digas"
    document.getElementById("agua").src = "https://images.pexels.com/photos/18331926/pexels-photo-18331926/free-photo-of-resfriado-glaciar-nieve-paisaje.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

    document.getElementById("micaja").classList.add("blue");
    document.getElementById("micaja").classList.remove("rojo");
}

function sumar() {
    let valor1 = 4
    let valor2 = 6
    let result = parseInt(valor1) + parseInt(valor2)
    document.getElementById("resultado").innerHTML = result
}

function restar() {
    let valor1 = document.getElementById("valor1").value
    let valor2 = document.getElementById("valor2").value
    let result = parseInt(valor1) - parseInt(valor2)
    document.getElementById("resultado").innerHTML = result
}

function multip() {
    let valor1 = document.getElementById("valor1").value
    let valor2 = document.getElementById("valor2").value
    let result = parseInt(valor1) * parseInt(valor2)
    document.getElementById("resultado").innerHTML = result
}

function divid() {
    let valor1 = document.getElementById("valor1").value
    let valor2 = document.getElementById("valor2").value
    let result = parseInt(valor1) / parseInt(valor2)
    document.getElementById("resultado").innerHTML = result
}