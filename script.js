let d4Count = 0;
let d6Count = 0;
let d8Count = 0;
let d10Count = 0;
let d12Count = 0;
let d20Count = 0;
let d100Count = 0;
let rolledAmount = 0;

const resetDice = document.querySelector(".reset-dice");
// Plus Buttons
const d4PlusButton = document.querySelector(".d4plus");
const d6PlusButton = document.querySelector(".d6plus");
const d8PlusButton = document.querySelector(".d8plus");
const d10PlusButton = document.querySelector(".d10plus");
const d12PlusButton = document.querySelector(".d12plus");
const d20PlusButton = document.querySelector(".d20plus");
const d100PlusButton = document.querySelector(".d100plus");
// Minus Buttons
const d4MinusButton = document.querySelector(".d4minus");
const d6MinusButton = document.querySelector(".d6minus");
const d8MinusButton = document.querySelector(".d8minus");
const d10MinusButton = document.querySelector(".d10minus");
const d12MinusButton = document.querySelector(".d12minus");
const d20MinusButton = document.querySelector(".d20minus");
const d100MinusButton = document.querySelector(".d100minus");
// Dice Count to Roll
const d4CountDisplay = document.querySelector(".d4-count-display");
const d6CountDisplay = document.querySelector(".d6-count-display");
const d8CountDisplay = document.querySelector(".d8-count-display");
const d10CountDisplay = document.querySelector(".d10-count-display");
const d12CountDisplay = document.querySelector(".d12-count-display");
const d20CountDisplay = document.querySelector(".d20-count-display");
const d100CountDisplay = document.querySelector(".d100-count-display");
// Roll Amount of Dice for Button
const d4RollDice = document.querySelector(".d4-roll-dice");
const d6RollDice = document.querySelector(".d6-roll-dice");
const d8RollDice = document.querySelector(".d8-roll-dice");
const d10RollDice = document.querySelector(".d10-roll-dice");
const d12RollDice = document.querySelector(".d12-roll-dice");
const d20RollDice = document.querySelector(".d20-roll-dice");
const d100RollDice = document.querySelector(".d100-roll-dice");
// Display Dice Result
const d4rollOutput = document.querySelector(".d4-roll-output");
const d6rollOutput = document.querySelector(".d6-roll-output");
const d8rollOutput = document.querySelector(".d8-roll-output");
const d10rollOutput = document.querySelector(".d10-roll-output");
const d12rollOutput = document.querySelector(".d12-roll-output");
const d20rollOutput = document.querySelector(".d20-roll-output");
const d100rollOutput = document.querySelector(".d100-roll-output");
// Dice Count Event Listeners
d4PlusButton.addEventListener('click', () => modifyDiceCount(0,validDice,"plus"));
d4MinusButton.addEventListener('click', () =>  modifyDiceCount(0,validDice, "minus"));
d6PlusButton.addEventListener('click', () =>  modifyDiceCount(1,validDice,"plus"));
d6MinusButton.addEventListener('click', () =>  modifyDiceCount(1,validDice, "minus"));
d8PlusButton.addEventListener('click', () =>  modifyDiceCount(2,validDice,"plus"));
d8MinusButton.addEventListener('click', () =>  modifyDiceCount(2,validDice, "minus"));
d10PlusButton.addEventListener('click', () =>  modifyDiceCount(3,validDice, "plus"));
d10MinusButton.addEventListener('click', () =>  modifyDiceCount(3,validDice, "minus"));
d12PlusButton.addEventListener('click', () =>  modifyDiceCount(4,validDice, "plus"));
d12MinusButton.addEventListener('click', () =>  modifyDiceCount(4,validDice, "minus"));
d20PlusButton.addEventListener('click', () =>  modifyDiceCount(5,validDice, "plus"));
d20MinusButton.addEventListener('click', () =>  modifyDiceCount(5,validDice, "minus"));
d100PlusButton.addEventListener('click', () =>  modifyDiceCount(6,validDice, "plus"));
d100MinusButton.addEventListener('click', () =>  modifyDiceCount(6,validDice, "minus"));
resetDice.addEventListener('click', () => resetAllDice());

// Roll Dice Event Listeners
d4RollDice.addEventListener('click', () => rollAllDice(validDice[0].count,"d4"));
d6RollDice.addEventListener('click', () => rollAllDice(validDice[1].count,"d6"));
d8RollDice.addEventListener('click', () => rollAllDice(validDice[2].count,"d8"));
d10RollDice.addEventListener('click', () => rollAllDice(validDice[3].count,"d10"));
d12RollDice.addEventListener('click', () => rollAllDice(validDice[4].count,"d12"));
d20RollDice.addEventListener('click', () => rollAllDice(validDice[5].count,"d20"));
d100RollDice.addEventListener('click', () => rollAllDice(validDice[6].count,"d100"));

// Fear
const fear1 = document.querySelector(".fear-counter1");
const fear2 = document.querySelector(".fear-counter2");
const fear3 = document.querySelector(".fear-counter3");

// Fear Event Listeners
fear1.addEventListener('click', () => markFear(fear1));
fear2.addEventListener('click', () => markFear(fear2));
fear3.addEventListener('click', () => markFear(fear3));


// Refactor functions to use the dice object instead of the variables above
const d4 = {name:"d4",sides:4,count:0,key:0,selectUp:d4PlusButton,selectDown:d4MinusButton,display:d4CountDisplay};
const d6 = {name:"d6",sides:6,count:0,key:1,selectUp:d6PlusButton,selectDown:d6MinusButton,display:d6CountDisplay};
const d8 = {name:"d8",sides:8,count:0,key:2,selectUp:d8PlusButton,selectDown:d8MinusButton,display:d8CountDisplay};
const d10 = {name:"d10",sides:10,count:0,key:3,selectUp:d10PlusButton,selectDown:d10MinusButton,display:d10CountDisplay};
const d12 = {name:"d12",sides:12,count:0,key:4,selectUp:d12PlusButton,selectDown:d12MinusButton,display:d12CountDisplay};
const d20 = {name:"d20",sides:20,count:0,key:5,selectUp:d20PlusButton,selectDown:d20MinusButton,display:d20CountDisplay};
const d100 = {name:'d100',sides:100,count:0,key:6,selectUp:d100PlusButton,selectDown:d100MinusButton,display:d100CountDisplay};

const validDice = [d4,d6,d8,d10,d12,d20,d100];

function modifyDiceCount(key,array,modification) {
        if (modification === "plus") {
            array[key].count++;
            array[key].display.textContent = array[key].count;
        } else if (modification === "minus") {
            array[key].count--;
            array[key].display.textContent = array[key].count;
        }
}

function rollAllDice (number, type) {
    if (!isNaN(number) && number > 0) {
        if (type === "d4") {
            for (let i = 1; i <= number; i++) {
                rolledAmount+= Math.floor(Math.random()*4+1);
                d4rollOutput.textContent = rolledAmount;
            }
        } else if (type === "d6") {
            for (let i = 1; i <= number; i++) {
                rolledAmount+= Math.floor(Math.random()*6+1);
                d6rollOutput.textContent = rolledAmount;
            }
        } else if (type === "d8") {
            for (let i = 1; i <= number; i++) {
                rolledAmount+= Math.floor(Math.random()*8+1);
                d8rollOutput.textContent = rolledAmount;
            }
        } else if (type === "d10") {
            for (let i = 1; i <= number; i++) {
                rolledAmount+= Math.floor(Math.random()*10+1);
                d10rollOutput.textContent = rolledAmount;
            }
        } else if (type === "d12") {
            for (let i = 1; i <= number; i++) {
                rolledAmount+= Math.floor(Math.random()*12+1);
                d12rollOutput.textContent = rolledAmount;
            }
        }else if (type === "d20") {
            for (let i = 1; i <= number; i++) {
                rolledAmount+= Math.floor(Math.random()*20+1);
                d20rollOutput.textContent = rolledAmount;
            }
        } else if (type === "d100") {
            for (let i = 1; i <= number; i++) {
                rolledAmount+= Math.floor(Math.random()*100+1);
                d100rollOutput.textContent = rolledAmount;
            }
        }
    }
    rolledAmount=0;
}
function resetAllDice() {
    d4Count=0;
    d6Count=0;
    d8Count=0;
    d10Count=0;
    d12Count=0;
    d20Count=0;
    d100Count=0;
    rolledAmount=0;
    d4CountDisplay.textContent = 0;
    d6CountDisplay.textContent = 0;
    d8CountDisplay.textContent = 0;
    d10CountDisplay.textContent = 0;
    d12CountDisplay.textContent = 0;
    d20CountDisplay.textContent = 0;
    d100CountDisplay.textContent = 0;
    d4rollOutput.textContent = 0;
    d6rollOutput.textContent = 0;
    d8rollOutput.textContent = 0;
    d10rollOutput.textContent = 0;
    d12rollOutput.textContent = 0;
    d20rollOutput.textContent = 0;
    d100rollOutput.textContent = 0;
}
function markFear(button) {
    if (button.style.backgroundColor = "purple") {
        button.style.backgroundColor = "yellow";
        button.style.color = "purple";
    } else {
        button.style.backgroundColor = "purple";
    }
    // When clicked, the .fear-counter div will change color to denote that it is marked active.
}

// Depreciated Code

/* 
function diceCount(die,modifier) {
    if (modifier === "plus") {
        if (die === "d4") {
            d4Count++;
            d4CountDisplay.textContent = d4Count;
        } else if (die === "d6") {
            d6Count++;
            d6CountDisplay.textContent = d6Count;
        } else if (die === "d8") {
            d8Count+=1
            d8CountDisplay.textContent = d8Count;
        } else if (die === "d10") {
            console.log("hi")
            d10Count+=1
            d10CountDisplay.textContent = d10Count;
        } else if (die === "d12") {
            d12Count+=1
            d12CountDisplay.textContent = d12Count;
        }else if (die === "d20") {
            d20Count+=1
            d20CountDisplay.textContent = d20Count;
        } else if (die === "d100") {
            d100Count+=1
            d100CountDisplay.textContent = d100Count;
        }
    } else if (modifier === "minus") {
        if (die === "d4") {
            d4Count-=1
            d4CountDisplay.textContent = d4Count;
        } else if (die === "d6") {
            d6Count-=1
            d4CountDisplay.textContent = d6Count;
        } else if (die === "d8") {
            d8Count-=1
            d8CountDisplay.textContent = d8Count;
        } else if (die === "d10") {
            d10Count-=1
            d10CountDisplay.textContent = d10Count;
        } else if (die === "d12") {
            d12Count-=1
            d12CountDisplay.textContent = d12Count;
        }else if (die === "d20") {
            d20Count-=1
            d20CountDisplay.textContent = d20Count;
        } else if (die === "d100") {
            d100Count-=1
            d100CountDisplay.textContent = d100Count;
        }
    } else {
        throw console.error("This is not accepted by the function");
    }
}
*/