const valor = parseFloat(gets());

if (valor > 0) {
    let saldoAtual = 0;
    saldoAtual+=valor;
    print(`Deposito realizado com sucesso!\nSaldo atual: R$ ${saldoAtual.toFixed(2)}`)
    } else if (valor < 0) {
    print("Valor invalido! Digite um valor maior que zero.");
    } else {
    print("	Encerrando o programa...");
  }