package exercise.enzo.project.Candidatura;

import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class ProcessoSeletivo {
    public static void main(String[] args) {
        String [] candidatos = {"João", "Maria", "Pedro", "Ana" ,"Lucas"};
        for (String candidato : candidatos) {
            entrandoEmContato(candidato);
        }
    }

    static void entrandoEmContato(String candidato) {
        int tentativasRealizadas = 0;
        boolean continuarTentando = true;
        boolean atendeu = false;
        do {
            atendeu = atender();
            continuarTentando = !atendeu;
            if(continuarTentando) {
                tentativasRealizadas++;
            } else {
                System.out.println("Contato realizado com sucesso!");
            }
        } while(continuarTentando && tentativasRealizadas < 3);
        if(atendeu) {
            System.out.println(" O Candidato(a): " + candidato + " foi contatado com sucesso!");
        } else {
            System.out.println("Não foi possível contatar o candidato(a):" + candidato + " após " + tentativasRealizadas + " tentativas.");
        }
    }


    // metodo auxiliar
    static boolean atender(){
        return new Random().nextInt(3)==1;
    }









    static void imprimirSelecionados(){
        String[] candidatos = {"João", "Maria", "Pedro", "Ana" ,"Lucas"};
        System.out.println("Candidatos selecionados:");
        for (int indice = 0; indice < candidatos.length; indice++) {
            System.out.println("O candidato de numero " + (indice + 1) + " é o(a) " + candidatos[indice]);
        }
        System.out.println("Forma abrevida de interação for each");
        for (String candidato : candidatos) {
            System.out.println("Candidato: " + candidato);
        }
    }













    static void selecaoCandidatos() {
        String[] candidatos = {"João", "Maria", "Pedro", "Ana" ,"Lucas", "Fernanda", "Roberto", "Carla", "Tiago", "Juliana", "Enzo"};
        int candidatosSelecionados = 0;
        int candidatoAtual = 0;
        double salarioBase = 2000.00;
        while(candidatosSelecionados <= 5 && candidatoAtual < candidatos.length) {
            String candidato = candidatos[candidatoAtual];
            double salarioPretendido = valorPretendido();
            
            System.out.println("Candidato: " + candidato + ", Salário Pretendido: " + salarioPretendido);
            if(salarioBase >= salarioPretendido){
                System.out.println("Candidato selecionado: " + candidato);
                candidatosSelecionados++;
            }
            candidatoAtual++;
        }

    }

    static double valorPretendido(){
        return ThreadLocalRandom.current().nextDouble(1800.00, 2200.00);
    }


    static void analisarCandidato(double salarioPretendido) {
        double salarioBase = 2000.00;
        if (salarioBase > salarioPretendido) {
        System.out.println("Ligar para o candidato!");
        }  else if (salarioBase == salarioPretendido) {
            System.out.println("Ligar para o candidato com contra proposta!");
        } else {
            System.out.println("Aguardando o resultado dos demais candidatos!");
        }
    }
}
