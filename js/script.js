
tab_pc = ["Rock", "Paper", "Scissors"]

let playerS = "";
let scoreplayer = 0;
let scorePC = 0;

let player = () => {
    let p = false;
    while(p === false) {
        playerS = prompt("Rock, Paper, or Scissors");
        if (playerS) {
            p = playerS.toUpperCase() === tab_pc[0].toUpperCase()||
             playerS.toUpperCase() === tab_pc[1].toUpperCase() ||
              playerS.toUpperCase() === tab_pc[2].toUpperCase();
        };
    };
    return playerS;
};

let computerPlay = () => {
    return tab_pc[Math.floor(Math.random() * 3)];
};

function playRound(playerSelection, computerSelection) {
    play = playerSelection.toUpperCase();
    compu = computerSelection.toUpperCase();
    if (compu === play) {
        return (`macht nul, you play ${playerSelection} and computer play ${computerSelection}, \n you : ${scoreplayer}, computer : ${scorePC}`);
    } else if ( compu === "ROCK" && play === "SCISSORS" ||
     compu === "SCISSORS" && play === "PAPER" ||
     compu === "PAPER" && play === "ROCK") {
        return (`you loose, you play ${playerSelection} and computer play ${computerSelection}, \n you : ${scoreplayer}, computer : ${++scorePC}`);
    } else {
        return (`you win, you play ${playerSelection} and computer play ${computerSelection}, \n you : ${++scoreplayer} computer : ${scorePC}`);
    };
};

let game = () => {
    while (scorePC < 5 && scoreplayer < 5) {
        console.log(playRound(player(), computerPlay()));
    };
    console.log(scorePC !== 5 ? "YOU WIN" : "YOU LOOSE");
};

game();