const questions = [
    {
        title: "¿Qué es HTML?",
        answers: ["Un lenguaje de programación", "Lenguaje de marcas", "No es nada"],
        correct: 1
    },
    {
        title: "¿Qué es CSS?",
        answers: ["Un lenguaje de programación", "Hace bonito el HTML", "No es nada"],
        correct: 1
    },
    {
        title: "¿Qué es JavaScript?",
        answers: ["Un lenguaje de programación", "Un navegador web", "Un sistema operativo"],
        correct: 0
    },
    {
        title: "¿Cuál es el símbolo utilizado para declarar una variable en un string en JavaScript?",
        answers: ["$", "&", "@"],
        correct: 0
    },
    {
        title: "¿Qué significa CSS en programación web?",
        answers: ["Cascading Style Sheets", "Computer System Syntax", "Coding Style Structure"],
        correct: 0
    },
    {
        title: "¿Qué etiqueta se utiliza para crear una lista ordenada en HTML?",
        answers: ["ul", "li", "ol"],
        correct: 2
    },
    {
        title: "¿Cuál es el lenguaje de programación utilizado tradicionalmente en el lado del servidor en la web?",
        answers: ["HTML", "JavaScript", "PHP"],
        correct: 2
    },
    {
        title: "¿Qué significa la sigla API?",
        answers: ["Application Programming Interface", "Advanced Programming Instruction", "Automated Processing Interface"],
        correct: 0
    },
    {
        title: "¿Qué es un bucle 'for' en programación?",
        answers: ["Una estructura de control", "Un tipo de variable", "Un operador lógico"],
        correct: 0
    },
    {
        title: "¿Qué lenguaje de marcado se utiliza para diseñar la estructura de una página web?",
        answers: ["CSS", "HTML", "JavaScript"],
        correct: 1
    }
];

let pos = 0
let puedeContestar = true

let correctas = 0

function initQuestion() {

    document.getElementById("page").innerHTML = (pos + 1) + " de " + questions.length + " preguntas";

    document.getElementById("title").innerHTML = questions[pos].title;

    document.getElementById("btn1").innerHTML = questions[pos].answers[0];
    document.getElementById("btn2").innerHTML = questions[pos].answers[1];
    document.getElementById("btn3").innerHTML = questions[pos].answers[2];
}

function checkAnswer(idPressed) {
    console.log("Has pulsado", idPressed)

    if (puedeContestar == false) {
        return
    }

    puedeContestar = false

    // si el botón que ha pulsado el usuario es la respuesta correcta de la pregunta actual
    // si idPressed es igual a questions[pos].correct
    if (idPressed == questions[pos].correct) {

        let btnPulsado = "btn" + (idPressed + 1)
        document.getElementById(btnPulsado).classList.remove("bg-slate-300")
        document.getElementById(btnPulsado).classList.add("bg-green-500")

        correctas++

    } else {
        console.log("No es correcta")

        let btnPulsado = "btn" + (idPressed + 1)
        document.getElementById(btnPulsado).classList.remove("bg-slate-300")
        document.getElementById(btnPulsado).classList.add("bg-red-500")

    }

}

// btn de siguiente
function next() {

    // si la pregunta actual (pos) es la última (questions.length)
    if (pos == questions.length - 1) {
        document.getElementById("quiz").classList.add("hidden")
        document.getElementById("resultado").classList.remove("hidden")
        document.getElementById("score").innerHTML = "Correctas " + correctas + "/" + questions.length
        return
    }

    pos++

    initQuestion()
    reset()
    puedeContestar = true
    // TODO comprobar que no ha pasado del limite
}

function reset() {
    let estilo = "bg-slate-300 p-3 rounded-lg transition-all hover:bg-slate-400"
    document.getElementById("btn1").className = estilo
    document.getElementById("btn2").className = estilo
    document.getElementById("btn3").className = estilo
}

function restartQuiz() {
    document.getElementById("quiz").classList.remove("hidden")
    document.getElementById("resultado").classList.add("hidden")
    pos = 0
    correctas = 0
    puedeContestar = true
    initQuestion()
}

// primera ejecucion
initQuestion()


