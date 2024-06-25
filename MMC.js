const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numero2 = 0;
let numero1 = 0;

rl.question(
  "Vou pegar 2 números e calcular o MDC, digite o primeiro número: ",
  (num1) => {
    numero1 = Number(num1);

    rl.question("Digite o segundo número: ", (num2) => {
      numero2 = Number(num2);

      let maior = Math.max(numero1, numero2);
      let menor = Math.min(numero1, numero2);

      let mdc = menor;

      while (maior % mdc !== 0 || menor % mdc !== 0) {
        mdc--;
      }

      console.log(`O MDC de ${numero1} e ${numero2} é ${mdc}!`);
      rl.close();
    });
  }
);
