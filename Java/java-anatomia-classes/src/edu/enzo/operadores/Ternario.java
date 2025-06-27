package edu.enzo.operadores;

public class Ternario {
    public static void main (String[] args){
        // classe Operadores.java
        int a, b;

        a = 5;
        b = 5;

        //  EXEMPLO DE CONDICIONAL UTILIZANDO UMA ESTRUTURA IF/ELSE
        // if(a==b)
        // resultado = "verdadeiro";
        // else
        // resultado = "falso";
        

        //MESMA CONDICIONAL, MAS DESSA VEZ, UTILIZANDO O OPERADOR CONDICIONAL TERNÁRIO

        // <Expressão Condicional>`` ?``<Caso condição seja true>``: ``<Caso condição seja false>
        
        // Expressao boolean
        String resultado = (a==b) ? "verdadeiro" : "falso";


        System.out.println(resultado);
    }
}
