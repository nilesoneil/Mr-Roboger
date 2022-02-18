let thisArray = [];


function mrRobo(userInput = i) {
  thisArray.push(userInput)
}

let thisArray = [];
const userInput = 6
for (let index = 0; index <= userInput; index++) {
  let appendable = index
  if (index === 1) {
    appendable = "beep";
  }
  if (index === 2) {
    appendable = "boop";
  }
  thisArray.push(appendable);
}
console.log(thisArray)
