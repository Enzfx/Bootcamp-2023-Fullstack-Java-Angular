package edu.enzo.operadores;

public class Aritmeticos {
    public static void main(String[] args){
    //classe Operadores.java
    double soma = 10.5 + 15.7;
    int subtração = 113 - 25;
    int multiplicacao = 20 * 7;
    int divisao = 15 / 3;
    int modulo = 18 % 3;
    double resultado = (10 * 7) + (20/4);

    //classe Operadores.java
    String nomeCompleto = "LINGUAGEM" + "JAVA";
    // Resultado do nomeCompleto: "LINGUAGEMJAVA"
            
    //qual o resultado das expressoes abaixo?
    String concatenacao ="?"; 

    concatenacao = 1+1+1+"1";
    System.out.print(concatenacao);   // Resultado: "31"

    concatenacao = 1+"1"+1+1;
    System.out.print(concatenacao);   // Resultado: "1111"

    concatenacao = 1+"1"+1+"1";
    System.out.print(concatenacao);  // Resultado: "1111"

    concatenacao = "1"+1+1+1;   
    System.out.print(concatenacao); // Resultado: "1111"

    concatenacao = "1"+(1+1+1);  // Resultado: "13"

    //System.out.println("Resultado: " + resultado);
    System.out.print(concatenacao);
    }
}