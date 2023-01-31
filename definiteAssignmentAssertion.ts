


let dice!:number//! definite assignment assertion means dice can get one value everytime
function rollDice() {
    dice=(Math.floor(Math.random()*6)+1)
}
rollDice()
console.log("Current Value-:",dice);
