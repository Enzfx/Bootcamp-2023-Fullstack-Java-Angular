package exercise.enzo.project.DesafioControleFluxo;
import java.util.Locale;
import java.util.Scanner;

public class Contador {
	public static void main(String[] args) {
		try (Scanner scanner = new Scanner(System.in).useLocale(Locale.US)) {
            System.out.print("Digite o primeiro parâmetro:");
            int parametroUm = scanner.nextInt();
            System.out.print("Digite o segundo parâmetro:");
            int parametroDois = scanner.nextInt();
            
            try {
            	contar(parametroUm, parametroDois);

            } catch (Exception e) {
            	System.out.println("O segundo parâmetro deve ser maior que o primeiro");
            }
        }
		
	}

    static void contar(int parametroUm, int parametroDois ) throws ParametrosInvalidosException {
		if(parametroUm > parametroDois) {
            throw new ParametrosInvalidosException("O segundo parâmetro deve ser maior que o primeiro");
        } else if (parametroUm < 0 || parametroDois < 0) {
            throw new ParametrosInvalidosException("Os parâmetros devem ser números positivos");
        }
		int contagem = parametroDois - parametroUm;
        System.out.println("Realizando " + contagem + " iterações:");

		for (int i = 1; i <= contagem; i++) {
            System.out.println("Contando: "+ i);
        }
        System.out.println("Contagem finalizada com sucesso!");

	}
}