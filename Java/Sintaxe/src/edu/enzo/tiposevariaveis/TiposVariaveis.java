package edu.enzo.tiposevariaveis;

public class TiposVariaveis {
    // Metodo principal
    public static void main(String[] args) {
        // <Tipo> <nomeVariavel> <atribuicaoDeValorOpcional>

        // Tipos primitivos
        int numero = 5; // Inteiro
        double preco = 19.99; // Ponto flutuante
        char letra = 'A'; // Caractere
        boolean ativo = true; // Booleano

        // Variaveis de referencia
        String nome = "Enzo"; // String

        // Variaveis numericas
        byte idade = 123;
		short ano = 2021;
		int cep = 21070333; // se começar com zero, talvez tenha que ser outro tipo
		long cpf = 98765432109L; // se começar com zero, talvez tenha que ser outro tipo
		float pi = 3.14F;
		double salario = 1275.33;


        // Tipos de erros

        // short numeroCurto = 1;
        // int numeroNormal = numeroCurto;
        // short numeroCurto2 = numeroNormal;
        // short numeroCurto2 = (short) numeroNormal; // Casting necessário para converter de int para short

    // Exibindo os valores
        System.out.println("Número: " + numero);
        System.out.println("Preço: " + preco);
        System.out.println("Letra: " + letra);
        System.out.println("Ativo: " + ativo);
        System.out.println("Nome: " + nome);
        System.out.println("Idade: " + idade);
        System.out.println("Ano: " + ano);
        System.out.println("CEP: " + cep);
        System.out.println("CPF: " + cpf);
        System.out.println("Pi: " + pi);
        System.out.println("Salário: " + salario);
    }
    
}
