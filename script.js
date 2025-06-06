let rolledAmount = 0;

const resetDiceButton = document.querySelector(".reset-dice");
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
resetDiceButton.addEventListener('click', () => resetDice());

// Roll Dice Event Listeners
d4RollDice.addEventListener('click', () => rollDice(validDice[0].count,validDice[0].key));
d6RollDice.addEventListener('click', () => rollDice(validDice[1].count,validDice[1].key));
d8RollDice.addEventListener('click', () => rollDice(validDice[2].count,validDice[2].key));
d10RollDice.addEventListener('click', () => rollDice(validDice[3].count,validDice[3].key));
d12RollDice.addEventListener('click', () => rollDice(validDice[4].count,validDice[4].key));
d20RollDice.addEventListener('click', () => rollDice(validDice[5].count,validDice[5].key));
d100RollDice.addEventListener('click', () => rollDice(validDice[6].count,validDice[6].key));

// Fear
const fear1 = document.querySelector(".fear-counter1");
const fear2 = document.querySelector(".fear-counter2");
const fear3 = document.querySelector(".fear-counter3");

// Fear Event Listeners
fear1.addEventListener('click', () => markFear(fear1));
fear2.addEventListener('click', () => markFear(fear2));
fear3.addEventListener('click', () => markFear(fear3));

/* 
    Somehow dice dont roll if there is only a count of 1
*/

const d4 = {name:"d4",sides:4,count:1,key:0,display:d4CountDisplay,output:d4rollOutput};
const d6 = {name:"d6",sides:6,count:1,key:1,display:d6CountDisplay,output:d6rollOutput};
const d8 = {name:"d8",sides:8,count:1,key:2,display:d8CountDisplay,output:d8rollOutput};
const d10 = {name:"d10",sides:10,count:1,key:3,display:d10CountDisplay,output:d10rollOutput};
const d12 = {name:"d12",sides:12,count:1,key:4,display:d12CountDisplay,output:d12rollOutput};
const d20 = {name:"d20",sides:20,count:1,key:5,display:d20CountDisplay,output:d20rollOutput};
const d100 = {name:'d100',sides:100,count:1,key:6,display:d100CountDisplay,output:d100rollOutput};

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
function rollDice(diceToRoll,key) {
    if (validDice[key].count < 1) {
        alert("Can't roll negative dice!")
    } else {
        for (let i = 0; i < diceToRoll; i++) {
            rolledAmount += Math.floor(Math.random()*validDice[key].sides+1);
            validDice[key].output.textContent = rolledAmount;
        }
    }
    rolledAmount = 0;
}
function resetDice() {
    for (key in validDice) {
        validDice[key].count = 1;
        validDice[key].display.textContent = 1;
        validDice[key].output.textContent = "Total Rolled:  0";
    }
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