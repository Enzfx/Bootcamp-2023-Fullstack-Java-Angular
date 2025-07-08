package edu.enzo.TryCatch;

public class TryCatch {
    public static void main(String[] args) {
        try {
            // Simulando uma operação que pode gerar uma exceção
            int resultado = 10 / 1; // Isso vai gerar uma ArithmeticException
            System.out.println("Resultado: " + resultado);
        } catch (ArithmeticException e) {
            // Tratando a exceção
            System.out.println("Erro: Divisão por zero não é permitida.");
        } 
    }
}

