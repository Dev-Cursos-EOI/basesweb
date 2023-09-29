function precioMedio() {
    let prod1 = 10
    let prod2 = 20
    let prod3 = 30

    let result = (prod1 + prod2 + prod3) / 3

    document.getElementById("resMedio").innerHTML = result

    return result
}

function dameIVA(precio) {
    document.getElementById("resIVA").innerHTML = (precio * 1.21)
}

let pMedio = precioMedio()
dameIVA(pMedio)

function datosUsuario() {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value

    document.getElementById("usuario").innerHTML = `${nombre} ${apellido}`
}

const passwordCorrect = "12345"
function checkPass() {
    let pass = document.getElementById("pass").value

    if(pass == passwordCorrect) {
        window.alert("Success!")
    } else {
        window.alert("Contraseña incorrecta")
    }

}