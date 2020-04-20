const menor = document.querySelector("#menor");
const mayor = document.querySelector("#mayor");
const start = document.querySelector(".start_button");

const text = document.querySelector(".text");
const number = document.querySelector("#number");
const guess = document.querySelector(".guess_button");



// GENERATE A RANDOM NUMBER
max=0;
min=0;
n = 0;
start.addEventListener("click", function () {
    max = parseInt(mayor.value);
    min = parseInt(menor.value);
  random = Math.floor(Math.random() * (max - min + 1) + min);
  n = random;
  text.innerHTML = `Guess a number between ${min} and ${max} `;
  number.focus();
});

// START THE GAME
times = 1;
guess.addEventListener("click", () => {
  g_number = parseInt(number.value);
  if (g_number > 0) {
    if (n == 0) {
      alert(`Press Start to play`);
    } else if (g_number > n) {
      text.innerHTML = `My number is less than ${g_number}.`;
      number.select();
      times++;
    } else if (g_number < n) {
      text.innerHTML = `My number is greater than ${g_number}.`;
      number.select();
      times++;
    } else {
      text.innerHTML = `Congratulations!`;
      alert(`Well Done! It took you ${times} attempts to guess this number`);
      times=1
    }
  } else if(min==0||max==0) {
    alert(`Press Start to play`);
  }else {
    alert(`Introduce a number between ${min} and ${max} `);
  }
});
