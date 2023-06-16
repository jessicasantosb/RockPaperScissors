const res = document.querySelector('#result')
const rockBtn = document.querySelector('#rockBtn')
const paperBtn = document.querySelector('#paperBtn')
const scissorsBtn = document.querySelector('#scissorsBtn')

let imgComputer = document.querySelector('#imgComputer')
let imgPlayer = document.querySelector('#imgPlayer')
let computer
let player

let pScore = document.querySelector('.pScore')
let cScore = document.querySelector('.cScore')
let playerScore = 0
let computerScore = 0

res.innerHTML = "Choose your weapon!<br>First to score 5 points wins the game!"

rockBtn.addEventListener('click', () => {
    player = "Rock"
    imgPlayer.setAttribute('src', 'images/rock.png')
    imgPlayer.style.maxHeight = "200px"
    imgPlayer.style.minHeight = "100px"
    computerTurn()        
    res.textContent = checkWinner()
})

paperBtn.addEventListener('click', () => {
    player = "Paper"
    imgPlayer.setAttribute('src', 'images/paper.png')
    imgPlayer.style.maxHeight = "200px"
    imgPlayer.style.minHeight = "100px" 
    computerTurn()        
    res.textContent = checkWinner()      
})

scissorsBtn.addEventListener('click', () => {
    player = "Scissors"
    imgPlayer.setAttribute('src', 'images/scissors.png')
    imgPlayer.style.maxHeight = "200px"
    imgPlayer.style.minHeight = "100px"
    computerTurn()        
    res.textContent = checkWinner()
})
    
function computerTurn() {
    const randomN = Math.floor(Math.random() * 3) + 1
        switch (randomN) {
            case 1:
                computer = "Rock"
                imgComputer.setAttribute('src', 'images/rock.png')
                imgPlayer.style.maxHeight = "200px"
                imgPlayer.style.minHeight = "100px"
                break
            case 2:
                computer = "Paper"
                imgComputer.setAttribute('src', 'images/paper.png')
                imgPlayer.style.maxHeight = "200px"
                imgPlayer.style.minHeight = "100px"
                break
            case 3:  
                computer = "Scissors"                     
                imgComputer.setAttribute('src', 'images/scissors.png')
                imgPlayer.style.maxHeight = "200px"
                imgPlayer.style.minHeight = "100px"
                break
        }             
}

function checkWinner() {
    if (player === computer) {
        return "It's a tie!"               
    } else if ((player === "Paper" && computer === "Rock") || 
    (player === "Scissors" && computer === "Paper") || 
    (player === "Rock" && computer === "Scissors")) {    
        incrementPlayerScore(playerScore++)
        return `You won! ${player} beats ${computer}`       
    } else {
        incrementComputerScore(computerScore++)
        return `You lose! ${player} beats ${computer}`        
    }
}

function incrementPlayerScore() {
    pScore.textContent = playerScore
    if (playerScore === 5) {
        alert(`You win! ${pScore.textContent}:${cScore.textContent}`)
        playerScore = 0
        computerScore = 0
    } else if (playerScore === 5 && computerScore === 5) {
        alert(`Draw! ${pScore.textContent}:${cScore.textContent}`)
    }
}

function incrementComputerScore() {
    cScore.textContent = computerScore
    if (computerScore === 5) {
        alert(`You lose! ${pScore.textContent}:${cScore.textContent}`)
        playerScore = 0
        computerScore = 0              
    } else if (playerScore === 5 && computerScore === 5) {
        alert(`Draw! ${pScore.textContent}:${cScore.textContent}`)
    }
}




