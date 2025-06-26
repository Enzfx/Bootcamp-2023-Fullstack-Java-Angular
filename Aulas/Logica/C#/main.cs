using System;

class Program
{
    static void Main(string[] args)
    {
        float salario = float.Parse(Console.ReadLine());
        float beneficio = float.Parse(Console.ReadLine());

        float imposto = 0;
        if (salario >= 0 && salario <= 1100)
        {
            imposto = 0.05f;
        }
        else if (salario >= 1100.01 && salario <= 2500)
        {
            imposto = 0.10f;
        }
        else if (salario > 2500)
        {
            imposto = 0.15f;
        }

        float finaldosalario = salario - (salario * imposto) + beneficio;
        Console.WriteLine($"Valor do salario depois do desconto é de: {finaldosalario:F2}");
    }
}


