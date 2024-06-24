const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numero2 = 0;
let numero1 = 0;

rl.question(
  "Vou pegar 2 número e calcular o MMC, digite o primeiro número: ",
  (num1) => {
    numero1 = Number(num1);

    rl.question("Digite o segundo número: ", (num2) => {
      numero2 = Number(num2);

      let maior = Math.max(numero1, numero2);
      let menor = Math.min(numero1, numero2);

      let mmc = maior;

      while (mmc % menor !== 0) {
        mmc += maior;
      }

      console.log(`O MMC de ${numero1} e ${numero2} é ${mmc}!`);
      rl.close();
    });
  }
);
