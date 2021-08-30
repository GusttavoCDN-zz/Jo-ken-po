let buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const choosenImg = button.querySelector("img")
        const playerPoints = document.querySelector(".pointsPlayer")
        const pcPoints = document.querySelector(".pointsMaquina")

        
        let playerOption = choosenImg.alt

        let options = ["pedra", "papel", "tesoura"]
        let computerOption = options[parseInt(Math.random() * 3)]

        if(playerPoints.innerText == "5"|| pcPoints.innerText == "5") {
            resetGame()
        }

        playRound(playerOption, computerOption)

        if(playerPoints.innerText == "5"|| pcPoints.innerText == "5") {
            endGame()
        }
    })
})

function playRound(player, computer) {
    const resultado = document.querySelector(".fraseResult")

    if (player.toLowerCase() == computer.toLowerCase()) {
        resultado.innerText = "Você empatou com a maquina, tinha que ser um idiota!"
        window.scrollTo(1000, 1000);
    }

    else if (computer == "pedra") {
        if (player.toLowerCase() == "tesoura") {
            resultado.innerText = "Pedra quebra tesoura, escolha melhor na proxima idiota!"
            attScore(".pointsMaquina")
        } else if (player.toLowerCase() == "papel") {
            resultado.innerText = "Papel vence pedra??Okay, eu não fiz as regras né!"
            attScore(".pointsPlayer")
        }

    }

    else if (computer == "tesoura") {
        if (player.toLowerCase() == "papel") {
            resultado.innerText = "Tesoura corta papel, quantos anos você tem?"
            attScore(".pointsMaquina")
        } else if (player.toLowerCase() == "pedra") {
            resultado.innerText = "Boaa! Pedra quebra tesoura. Até que enfim você foi esperto!"
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
    let resultado = document.querySelector(".fraseResult")

    if (playerPoints > pcPoints) {
        resultado.innerText = "Parabens Trouxa!! VOCÊ CONSEGUIU VENCER!"
    } else {
        resultado.innerText = "Como eu esperava, você não passa de um animal!"
    }
}

function resetGame() {


    let playerPoints = document.querySelector(".pointsPlayer").innerText = 0
    let pcPoints = document.querySelector(".pointsMaquina").innerText = 0

}
