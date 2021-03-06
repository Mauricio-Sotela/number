const menor = document.querySelector("#menor");
const mayor = document.querySelector("#mayor");
const start = document.querySelector(".start_button");

const text = document.querySelector(".text");
const number = document.querySelector("#number");
const guess = document.querySelector(".guess_button");

// GENERATE A RANDOM NUMBER
max = parseInt(mayor.value);
min = parseInt(menor.value);
n = 0;
start.addEventListener("click", function () {
  random = Math.floor(Math.random() * (max - min + 1) + min);
  n = random;
  text.innerHTML = "Please guess a number, enter it, and press Guess.";
});

// START THE GAME
times = 1;
guess.addEventListener("click", () => {
  g_number = parseInt(number.value);
  if (g_number > 0) {
    if (n == 0) {
      alert(`press Start to play`);
    } else if (g_number > n) {
      text.innerHTML = `My number is less than ${g_number}.`;
      times++;
    } else if (g_number < n) {
      text.innerHTML = `My number is greater than ${g_number}.`;
      times++;
    } else {
      text.innerHTML = `Congratulations!`;
      alert(`Well Done! It took you ${times} attempts to guess this number`);
    }
  } else {
    alert(`Introduce your number greater than 0`);
  }
});
