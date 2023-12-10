// jcript.js
const game = () => { 
    let playerScore = 0; 
    let computerScore = 0; 
    let moves = 0; 
  
  
    const playGame = () => { 
        const rockBtn = document.querySelector('.rock'); 
        const paperBtn = document.querySelector('.paper'); 
        const scissorBtn = document.querySelector('.scissor'); 
        const playerOptions = [rockBtn,paperBtn,scissorBtn]; 
        const computerOptions = ['rock','paper','scissors'] 
          
        playerOptions.forEach(option => { 
            option.addEventListener('click',function(){ 
  
                const movesLeft = document.querySelector('.movesleft'); 
                moves++; 
                movesLeft.innerText = ` ${10-moves}`; 
                  
  
                const choiceNumber = Math.floor(Math.random()*3); 
                const computerChoice = computerOptions[choiceNumber]; 
                winner(this.innerText,computerChoice) 
                if(moves == 10){ 
                    gameOver(playerOptions,movesLeft); 
                } 
            }) 
        }) 
          
    } 
    const winner = (player,computer) => { 
        const result = document.querySelector('.result'); 
        const playerScoreBoard = document.querySelector('.p-count'); 
        const computerScoreBoard = document.querySelector('.c-count'); 
        player = player.toLowerCase(); 
        computer = computer.toLowerCase(); 
        if(player === computer){ 
        } 
        else if(player == 'rock'){ 
            if(computer == 'paper'){ 
                computerScore++; 
                computerScoreBoard.textContent = computerScore; 
  
            }else{ 
                playerScore++; 
                playerScoreBoard.textContent = playerScore; 
            } 
        } 
        else if(player == 'scissors'){ 
            if(computer == 'rock'){ 
                computerScore++; 
                computerScoreBoard.textContent = computerScore; 
            }else{ 
                playerScore++; 
                playerScoreBoard.textContent = playerScore; 
            } 
        } 
        else if(player == 'paper'){ 
            if(computer == 'scissors'){ 
                computerScore++; 
                computerScoreBoard.textContent = computerScore; 
            }else{ 
                playerScore++; 
                playerScoreBoard.textContent = playerScore; 
            } 
        } 
    } 
    const gameOver = (playerOptions,movesLeft) => { 
  
        const chooseMove = document.querySelector('.move'); 
        const result = document.querySelector('.result'); 
        const reloadBtn = document.querySelector('.reload'); 
  
        playerOptions.forEach(option => { 
            option.style.display = 'none'; 
        }) 
    } 
    playGame(); 
} 
game();