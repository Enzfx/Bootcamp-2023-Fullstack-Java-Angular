//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const valorInicial = parseFloat(gets());
const taxaJuros = parseFloat(gets());
const periodo = parseInt(gets());

if (valorInicial > 0)  {
    let valorFinal = valorInicial;
    for (let i = 0; i < periodo; i++) {
        valorFinal *= (1 + taxaJuros);
        }
    print('Valor final do investimento: R$', valorFinal.toFixed(2));
};
        







