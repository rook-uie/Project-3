const random = Math.ceil(Math.random() * 100);
console.log(random);
let guesses = 0;
let guess;

document.getElementById("mybtn").onclick = function () {
  
  
    guess = document.getElementById("mguess").value;
    guess=Number(guess);
    guesses += 1;
   
    if (guess > random) 
    {
      document.getElementById("hint").innerHTML = "Go Lower 👇";
    } 
    else if (guess < random)
     {
      document.getElementById("hint").innerHTML = "Go Higher 👆"
    } 
    else if(guess==random)
    {
      document.getElementById("hint").innerHTML = `Bingo 🥳!!! You took ${guesses} guesses`;
      document.getElementById("rno").innerHTML= random;
    }
    else
    {
      document.getElementById("hint").innerHTML = "Enter a valid number"
    }
  
}
