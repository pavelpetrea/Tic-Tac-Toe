window.clickedX = 0, clickedO = 0, clickNumber = 0;
window.messageElement = document.getElementById("winning");
window.gameOver = false;
function handlePosition(position) {
    if(window.gameOver) {
        return;
    }
    let input = document.getElementById(position);
    if (input.value == "" && clickedX === 0) {
        input.value = "X";
        clickedX = 1;
        clickedO = 0;
    } else if (input.value == "" && clickedX === 1) {
        input.value = "O";
        clickedO = 1;
        clickedX = 0;
    }
    ++clickNumber;
    checkWinner();
}
    const positions = ["input1", "input2", "input3", "input4", "input5", "input6", "input7", "input8", "input9"];
    for (let i = 0; i < positions.length; i++) {
        document.getElementById(positions[i]).addEventListener("click", function() {
        handlePosition(positions[i]);
    });
}
function restart() {
    for (let i = 1; i <= 9; i++) {
        let position = document.getElementById("input" + i);
            position.value = "";
    }
        window.gameOver = false;
        window.messageElement.textContent = "Tic Tac Toe";
        window.clickedX = 0, clickedO = 0, clickNumber = 0;
  }
function checkWinner() {
    const positions = [];
    for (let i = 1; i <= 9; i++) {
        const position = document.getElementById("input" + i);
        positions.push(position.value);
    }
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];
    for (const condition of winningConditions) {
        const [a, b, c] = condition;
        if (positions[a] && positions[a] === positions[b] && positions[a] === positions[c]) {
            window.messageElement.textContent = positions[a] + " has won!";
            gameOver = true;
            return;
        }
    }    
    if (clickNumber === 9 && window.messageElement.textContent != "X has won!" && 
    window.messageElement.textContent != "O has won!"){
        window.messageElement.textContent = "Draw!";
        window.gameOver = true;
    }
}