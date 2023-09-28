//Brug en while-løkke til at udskrive tal fra 1 til 10. 
/*let input = 1;
while (input <= 10) {
 console.log(input);
 input++;
}

//Brug en while-løkke til at udskrive alle lige tal fra 2 til 20. 
let i=1 
while (i<=20){
  if(i%2==0){
  console.log(i)
  }
  i++
}

//Skriv en do...while-løkke, der spørger brugeren om et tal, indtil brugeren indtaster et ulige tal. 
/*const readline = require('readline-sync');

let number = null;
do {
  number = readline.question(`Input a number:`, number);
} while (number % 2 === 0);*/

//Brug en while-løkke til at beregne summen af alle tal fra 1 til 100. 
let counter = 1;
let accumulator = 0
while (counter <= 100) {
    accumulator = accumulator + counter
    counter++;
}

console.log(accumulator)

/*Skriv en do...while-løkke, der spørger brugeren om et tal, indtil brugeren indtaster et tal, 
der er større end 100. Den tilsvarende bedømmelse (f.eks. "A" -> "Fremragende", "B" -> "Godt", osv.). */




