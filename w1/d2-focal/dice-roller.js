const args = process.argv;
let result = Number(args.slice(2,3));
let finalresult = [];


const diceRoller = function(num) {
  for (let i = 0; i < num; i++) {
    let rand = Math.floor(Math.random() * 6 + 1);
    finalresult[i] = rand;
  }
  return finalresult;
}
let joinArray = diceRoller(result).join(", ");
console.log(`Rolled ${result} dice: ${joinArray}`);