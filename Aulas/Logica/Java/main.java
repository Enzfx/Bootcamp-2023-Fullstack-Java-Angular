import java.util.Scanner;
public class main {
    public static void main(String[] args) {
    Scanner LeitoresdeEntrada = new Scanner(System.in);
    float salario = LeitoresdeEntrada.nextFloat();
    float beneficio = LeitoresdeEntrada.nextFloat();

    float imposto = 0;
        if (salario >= 0 && salario <= 1100) {
            imposto = 0.05f;

            } else if (salario >= 1100.01 && salario <= 2500) {
            imposto = 0.10f;
            } else if (salario > 2500)
            imposto = 0.15f;

    float finaldosalario = salario - (salario * imposto) + beneficio;
    System.out.printf("Valor do salario depois do desconto é de: %.2f\n", finaldosalario);
    LeitoresdeEntrada.close();

}}


