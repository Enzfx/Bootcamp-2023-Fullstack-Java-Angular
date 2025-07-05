package edu.enzo.controlefluxo;

public class ExemploWhile {
    public static void main(String[] args) {
        int contador = 1;

        // Loop while que imprime números de 0 a 9
        while (contador < 10) {
            System.out.println("Número: " + contador);
            contador++;
        }

        // Exemplo de loop while com condição falsa
        int numero= 0;
        while (numero < 5) {
            System.out.println("Este número não será impresso: " + numero);
            numero++;
        }
    }
}
