package edu.enzo.controlefluxo;

public class ExemploFor {
    // public static void main(String[] args) {
    //     for(int i = 1; i<=10; i++) {
    //         System.out.println(i);
    //     }
    //     System.out.println("Fim do loop for");
    // }

    public static void main(String[] args) {
         String alunos[] = {"Enzo", "João", "Maria", "Ana", "Pedro"};
        // for(int i = 0; i < alunos.length; i++) {
        //     System.out.println(alunos[i] + " é o aluno de número " + (i + 1));
        // }
        for(String aluno : alunos){
            System.out.println(aluno);
        }
    }
}
