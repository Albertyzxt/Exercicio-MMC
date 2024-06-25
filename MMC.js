const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularMDC(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function calcularMMC(a, b) {
    return Math.abs(a * b) / calcularMDC(a, b);
}

function calcular() {
    rl.question('Digite o primeiro número: ', (input1) => {
        const numero1 = parseInt(input1);
        rl.question('Digite o segundo número: ', (input2) => {
            const numero2 = parseInt(input2);

            if (isNaN(numero1) || isNaN(numero2)) {
                console.log("Por favor, insira números válidos.");
            } else {
                const mdc = calcularMDC(numero1, numero2);
                const mmc = calcularMMC(numero1, numero2);
                console.log(`O MDC de ${numero1} e ${numero2} é ${mdc}`);
                console.log(`O MMC de ${numero1} e ${numero2} é ${mmc}`);
            }
            rl.close();
        });
    });
}

calcular();

