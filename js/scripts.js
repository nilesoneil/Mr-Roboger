function mrRobo(userInput) {
  let thisArray = [];
for (let index = 0; index <= userInput; index++) {
  let stringIndex = index.toString();
  let appendable = index
  if (stringIndex.includes("1")) {
    appendable = "beep";
  }
  if (stringIndex.includes("2")) {
    appendable = "boop";
  }
  if (stringIndex.includes("3")) {
    appendable = "won't you be my neighbour";
  }
  thisArray.push(appendable);
}
return thisArray
}

let x= mrRobo(23)
console.log(x);


