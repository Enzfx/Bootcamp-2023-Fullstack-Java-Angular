// Entrada de dados
const saldoTotal = parseInt(gets());
const valorSaque = parseInt(gets());

//TODO: Criar as condições necessárias para impressão da saída, vide tabela de exemplos.
  if (valorSaque > saldoTotal ){
    print("Saldo insuficiente. Saque nao realizado!")
  } else {
    var saldoDisponivel = saldoTotal - valorSaque;
    print(`Saque realizado com sucesso! Novo saldo: ${saldoDisponivel}`)
  }