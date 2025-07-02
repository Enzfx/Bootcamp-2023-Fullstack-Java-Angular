package edu.enzo.controlefluxo;

import java.util.Scanner;

public class CaixaEletronico {
    private static double saldo = 1000.0;
    private static final double LIMITE_SAQUE = 500.0;
    private static final double LIMITE_SALDO_BAIXO = 100.0;

    public static void main(String[] args) {
        
        System.out.println("Bem-Vindo ao Caixa Eletrônico!\nSeu saldo atual é: " + saldo);

        try ( Scanner scanner = new Scanner(System.in).useLocale(java.util.Locale.US)) { 
            double valorSaque;

            do {
                System.out.print(" Digite o valor do saque: R$ ");
                valorSaque = scanner.nextDouble();
                
                // Condição composta para saque válido
                if (valorSaque > 0 && valorSaque <= saldo && valorSaque <= LIMITE_SAQUE) {
                    saldo -= valorSaque;
                    String statusSaldo = saldo > LIMITE_SALDO_BAIXO ? "Saldo alto" : "Saldo baixo";
                    System.out.println("\nStatus do saldo: " + statusSaldo);
                    System.out.printf("Saque de R$ %.2f realizado com sucesso!\nSeu novo saldo é: R$ %.2f\nObrigado por usar nosso caixa eletrônico!", valorSaque, saldo);
                    break;
                } else {
                    // Determina o tipo de erro para usar no switch
                    int tipoErro;
                    if (valorSaque <= 0) {
                        tipoErro = 1;
                    } else if (valorSaque > LIMITE_SAQUE) {
                        tipoErro = 2;
                    } else if (valorSaque > saldo) {
                        tipoErro = 3;
                    } else {
                        tipoErro = 0; // erro genérico
                    }
                    
                    // Switch case para tratamento de erros
                    switch (tipoErro) {
                        case 1:
                            System.out.println("Valor inválido. O valor do saque deve ser maior que zero.");
                            break;
                        case 2:
                            System.out.printf("Valor do saque excede o limite de R$ %.2f. Tente novamente.\n", LIMITE_SAQUE);
                            break;
                        case 3:
                            System.out.printf("Valor do saque excede seu saldo de R$ %.2f\n", saldo);
                            break;
                        default:
                            System.out.println("Erro inesperado. Tente novamente.");
                            break;
                    }
                }
            } while (true);


        }   catch(Exception e){
            System.out.println("Erro: Entrada inválida. Por favor, insira apenas números.");
        }
    }
}
