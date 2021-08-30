let buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const choosenImg = button.querySelector("img")
        const playerPoints = document.querySelector(".pointsPlayer")
        const pcPoints = document.querySelector(".pointsMaquina")


        let playerOption = choosenImg.alt

        let options = ["pedra", "papel", "tesoura"]
        let computerOption = options[parseInt(Math.random() * 3)]

        playRound(playerOption, computerOption)

        if (playerPoints.innerText == "5" || pcPoints.innerText == "5") {
            endGame()
        }
    })
})

function playRound(player, computer) {
    const resultado = document.querySelector(".fraseResult")

    if (player.toLowerCase() == computer.toLowerCase()) {
        resultado.innerText = "EMPATE! Parece que ambos escolheram a mesma coisa, é uma batalha de Sharigan?"
    }

    else if (computer == "pedra") {
        if (player.toLowerCase() == "tesoura") {
            resultado.innerText = "Pedra quebra tesoura, escolha melhor na proxima idiota!"
            attScore(".pointsMaquina")
        } else if (player.toLowerCase() == "papel") {
            resultado.innerText = "WTF!! Papel vence pedra?? Okay, eu não fiz as regras né!"
            attScore(".pointsPlayer")
        }

    }

    else if (computer == "tesoura") {
        if (player.toLowerCase() == "papel") {
            resultado.innerText = "Tesoura corta papel! Vai me dizer que isso não era obvio para você?"
            attScore(".pointsMaquina")
        } else if (player.toLowerCase() == "pedra") {
            resultado.innerText = "Boaa! Pedra quebra tesoura."
            attScore(".pointsPlayer")
        }

    }

    else if (computer == "papel") {
        if (player.toLowerCase() == "pedra") {
            resultado.innerText = "Perdeu trouxa! Papel engole pedra!"
            attScore(".pointsMaquina")
        } else if (player.toLowerCase() == "tesoura") {
            resultado.innerText = "Parabens, tesoura corta papel! Obvio!"
            attScore(".pointsPlayer")
        }
    }
    window.scrollTo(1000, 1000);

}

function attScore(roundWinner) {
    let pontosTags = document.querySelector(roundWinner);
    let pontos = pontosTags.innerText;
    pontos++;
    pontosTags.innerText = `${pontos}`
}

function endGame() {
    let playerPoints = document.querySelector(".pointsPlayer").innerText
    let pcPoints = document.querySelector(".pointsMaquina").innerText

    const resultado = document.querySelector(".fraseResult").innerText = ""

    let divRestart = document.querySelector(".restartGame")
    divRestart.classList.add("active")

    const resultadoFinal = document.querySelector(".mensagemFinal");

    if (playerPoints > pcPoints) {

        resultadoFinal.innerText = "Você ganhou, mas não merece PARABENS! Não fez mais que sua obrigação!"
    } else {
        resultadoFinal.innerText = "Como eu esperava, você não passa de um perdedor!"
    }

    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.setAttribute("disabled", "disabled")
    })

    document.querySelector(".armas").classList.add("disabled");


    const buttonReset = document.querySelector(".buttonRestart");

    buttonReset.addEventListener("click", resetGame); _
}


function resetGame() {
    let playerPoints = document.querySelector(".pointsPlayer").innerText = 0
    let pcPoints = document.querySelector(".pointsMaquina").innerText = 0

    let divRestart = document.querySelector(".restartGame")
    divRestart.classList.remove("active")

    const resultado = document.querySelector(".fraseResult").innerText = ""

    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.removeAttribute("disabled", "disabled")
    })

    document.querySelector(".armas").classList.remove("disabled");
}
