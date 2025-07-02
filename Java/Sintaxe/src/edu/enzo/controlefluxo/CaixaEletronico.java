package edu.enzo.controlefluxo;

import java.util.Scanner;

public class CaixaEletronico {
    private static double saldo = 1000.0;
    public static void main(String[] args) {
        System.out.println("Bem-Vindo ao Caixa Eletrônico!\nSeu saldo atual é: " + saldo);

        try ( Scanner scanner = new Scanner(System.in).useLocale(java.util.Locale.US)) { 
            double valorSaque;

            do {
                System.out.print(" Digite o valor do saque: R$ ");
                valorSaque = scanner.nextDouble();

                if (valorSaque <= 0) {
                System.out.println("Valor inválido. O valor do saque deve ser maior que zero.");
                }  else if (valorSaque > saldo) {
                System.out.printf("Valor do saque excede o limite de " + saldo);
                } else {
                    saldo -= valorSaque;
                    System.out.printf("Saque realizado com sucesso! Seu novo saldo é: %.2f%n", saldo);
                    System.out.printf("Valor sacado: " + valorSaque);
                    System.out.printf("Seu novo saldo é: " + saldo);
                    System.out.println("Obrigado por usar nosso caixa eletrônico!");
                    break;
                }
            } while (true);

        }   catch(Exception e){
            System.out.println("Erro: Entrada inválida. Por favor, insira apenas números.");
        }
    }
}
 