let userScore = 0;
let AIScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");

const userScoreNum = document.querySelector("#user-score");
const AIScoreNum = document.querySelector("#AI-score");

const genAIChoice = () => {
    const Options = ["stone", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return Options[randIdx];
};

const DrawGame = () => {
    // sconsole.log('It\'s a DRAW!');
    message.innerText = "It's a draw!";
    message.style.backgroundColor = "white";
    message.style.color = "black";
};

const showWinner = (UserWin, userChoice, AIChoice) => {
    if (UserWin) {
        userScore++;
        userScoreNum.innerText = userScore;
        // console.log('User WINS!');
        message.innerText = `You WIN! Your ${userChoice} beats ${AIChoice}`;
        message.style.backgroundColor = "green";
        message.style.color = "white";
    } else {
        AIScore++;
        AIScoreNum.innerText = AIScore;
        // console.log('AI WINS!');
        message.innerText = `You LOSE! ${AIChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
        message.style.color = "white";
    }
};

const playGame = (userChoice) => {
    // console.log('User choice is', userChoice);
    const AIChoice = genAIChoice();
    // console.log('AI choice is', AIChoice);
    if (userChoice === AIChoice) {
        DrawGame();
    }
    else {
        let UserWin = true;
        if (userChoice === "stone"){
            //paper or scissor
            UserWin = AIChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            //scissor or stone
            UserWin = AIChoice === "scissor" ? false : true;
        } else if (userChoice === "scissor"){
            //paper or stone
            UserWin = AIChoice === "stone" ? false : true;
        }
        showWinner(UserWin, userChoice, AIChoice);
    };
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log('Choice was clicked', userChoice);
        playGame(userChoice);
    });
});