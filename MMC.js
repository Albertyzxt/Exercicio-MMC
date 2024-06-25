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

      let a = numero1;
      let b = numero2;

      while (b !== 0) {
        let resto = a % b;
        a = b;
        b = resto;
      }
      let mdc = a;

      let mmc = (numero1 * numero2) / mdc
      console.log(`O MDC de ${numero1} e ${numero2} é ${mdc}!`);
      console.log(`O MMC de ${numero1} e ${numero2} é ${mmc}!`);
      rl.close();
    });
  }
);
