package edu.enzo.controlefluxo;

public class ExemploDoWhile {
    public static void main(String[] args) {
        int contador = 10;

        // Loop do-while que imprime números de 1 a 10
        do {
            System.out.println("Número: " + contador);
            contador++;
        } while (contador <= 10);

        // Exemplo de loop do-while com condição falsa
        int numero = 0;
        do {
            System.out.println("Este número não será impresso: " + numero);
            numero++;
        } while (numero < 5);
    }
}
