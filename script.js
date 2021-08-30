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
        // resultado.innerText = "Você empatou com a maquina, tinha que ser um idiota!"
    }

    else if (computer == "pedra") {
        if (player.toLowerCase() == "tesoura") {
            attScore(".pointsMaquina")
        } else if (player.toLowerCase() == "papel") {
            attScore(".pointsPlayer")
        }

        resultado.innerText = ""
    }

    else if (computer == "tesoura") {
        if (player.toLowerCase() == "papel") {
            attScore(".pointsMaquina")
        } else if (player.toLowerCase() == "pedra") {
            attScore(".pointsPlayer")
        }

        resultado.innerText = ""
    }

    else if (computer == "papel") {
        if (player.toLowerCase() == "pedra") {
            attScore(".pointsMaquina")
        } else if (player.toLowerCase() == "tesoura") {
            attScore(".pointsPlayer")
        }

        resultado.innerText = ""
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



















/*if (playerOption.toLowerCase() == "papel") {

    if (computerOptions == gameOptions[0]) {
        console.log("Você ganhou Papel cobre Pedra");
    } else if (computerOptions == gameOptions[1]) {
        console.log("Empate!! Papel com Papel é igual um papelzão");
    } else {
        console.log("Você perdeu!! Tesoura transforma seu papel em papeizinhos!");
    }
} else if (playerOption.toLowerCase() == "pedra") {

    if (computerOptions == gameOptions[0]) {
        console.log("Empate!! Continue juntando PEDRA com PEDRA e forme uma PEDREIRA");
    } else if (computerOptions == gameOptions[1]) {
        console.log("Você perdeu!! Sua PEDRA foi completamente engolida pelo PAPEL");
    } else {
        console.log("Você Ganhou!! PEDRA esmaga TESOURA!");
    }
} else if (playerOption.toLowerCase() == "tesoura") {

    if (computerOptions == gameOptions[0]) {
        console.log("Você Perdeu!! PEDRA esmaga TESOURA! ");
    } else if (computerOptions == gameOptions[1]) {
        console.log("Você Ganhou!!Sua TESOURA transforma o PAPEL em papeizinhos! ");
    } else {
        console.log("EMPATE!! TESOURA COM TESOURA, DUAS TESOURAS");
    }
}*/