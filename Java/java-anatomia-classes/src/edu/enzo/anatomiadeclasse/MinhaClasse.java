package edu.enzo.anatomiadeclasse;
public class MinhaClasse {
    // Metodo princiapl
    public static void main(String[] args){
        int numeroUm = 5;
        int numeroDois = 6;

        int resultado = soma(numeroUm, numeroDois);
        System.out.print("A soma de " + numeroUm + " e " + numeroDois + " é: " + resultado);
        
    }
    // Metodo para somar dois numeros
    public static int soma(int numeroUm, int numeroDois) {
        return numeroUm + numeroDois ;
    }
}
