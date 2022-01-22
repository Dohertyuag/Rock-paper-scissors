const game = () => {
    let pScore = 0
    let cScore = 0

    // starting game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button')
        const introScreen = document.querySelector(".intro")
        const match = document.querySelector(".match")

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut")
            match.classList.add("fadeIn")
        })
    }

    //playing match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button")
        const playerHand = document.querySelector(".player-hand")
        const computerHand = document.querySelector(".computer-hand")

        const hands = document.querySelectorAll(".hands img")
        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = ""
            })
        })
        // options for computer
        const computerOptions = ['Rock', 'Paper', 'Scissors']

        options.forEach(option => {
            option.addEventListener("click", function () {
                const computerNumber = Math.floor(Math.random() * 3)
                const computerChoice = computerOptions[computerNumber]

                setTimeout(() => {
                    //call compareHands
                    compareHands(this.textContent, computerChoice)
                    //Update images
                    playerHand.src = `./images/${this.textContent}.png`
                    computerHand.src = `./images/${computerChoice}.png`

                }, 2000)

                playerHand.style.animation = "shakePlayer 2s ease"
                computerHand.style.animation = "shakeComputer 2s ease"
            })
        })
    }

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p")
        const computerScore = document.querySelector(".computer-score p")

        playerScore.textContent = pScore
        computerScore.textContent = cScore
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner")

        //draw
        if (playerChoice === computerChoice) {
            winner.innerHTML = "Draw <br> ＞﹏＜"
            return
        }

        //Check for player choosing Rock
        if (playerChoice === 'Rock') {
            if (computerChoice === 'Paper') {
                winner.innerHTML = "Computer Wins <br> (╯°□°）╯︵ ┻━┻"
                cScore++
                updateScore()
                return
            }
            else {
                winner.innerHTML = "Player Wins <br> (～￣▽￣)～"
                pScore++
                updateScore()
                return
            }
        }

        //Check for player choosing Paper
        if (playerChoice === 'Paper') {
            if (computerChoice === 'Scissors') {
                winner.innerHTML = "Computer Wins <br> (╯°□°）╯︵ ┻━┻)"
                cScore++
                updateScore()
                return
            }
            else {
                winner.innerHTML = "Player Wins <br> (～￣▽￣)～"
                pScore++
                updateScore()
                return
            }
        }

        //Check for player choosing Scissors
        if (playerChoice === 'Scissors') {
            if (computerChoice === 'Rock') {
                winner.innerHTML = "Computer Wins <br> (╯°□°）╯︵ ┻━┻)"
                cScore++
                updateScore()
                return
            }
            else {
                winner.innerHTML = "Player Wins <br> (～￣▽￣)～"
                pScore++
                updateScore()
                return
            }
        }
    }


    // Calling functions
    startGame()
    playMatch()
}


game()