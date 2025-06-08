// Desafio 01

const saldoAtual= parseFloat(gets());
const valorDeposito = parseFloat(gets());
const valorRetirada = parseFloat(gets());

let saldofinal = saldoAtual + valorDeposito - valorRetirada;
if (valorRetirada > saldoAtual + valorDeposito) {
        print("Transacao inválida");
} else {
        print(saldofinal.toFixed(1));
}