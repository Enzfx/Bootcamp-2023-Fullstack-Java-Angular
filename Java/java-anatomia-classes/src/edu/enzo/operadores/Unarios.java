package edu.enzo.operadores;

public class Unarios {
    public static void main (String[] args){
    
    int numero = 5;
    numero = - numero;        
    System.out.println(numero);
    // para tornar positivo o numero, basta multiplicar por -1
    numero = numero *-1;
    System.out.println(numero);
    // para incrementar o numero, basta somar 1
    // numero = numero + 1; ou numero++;
    numero ++;
    System.out.println(numero);
    // para decrementar o numero, basta subtrair 1
    // numero = numero - 1; ou numero--;
    numero --;
    System.out.println(numero);
    // operador unario de negação
    // o operador unario de negação inverte o valor booleano
    boolean verdadeiro = true;
    System.out.println("Inverteu:" + !verdadeiro);
    }
}