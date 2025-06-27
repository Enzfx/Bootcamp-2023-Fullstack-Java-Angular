package edu.enzo.operadores;

public class Relacionais {
//     public static void main (String[] args) {
// //classe Operadores.java
//     int numero1 = 2;
//     int numero2 = 2;

//     if(numero1 > numero2)
//         System.out.println("Numero 1 maior que numero 2");

//     if(numero1 < numero2)
//         System.out.println("Numero 1 menor que numero 2");

//     if(numero1 >= numero2)
//         System.out.println("Numero 1 maior ou igual que numero 2");

//     if(numero1 <= numero2)
//         System.out.println("Numero 1 menor ou igual que numero 2");

//     if(numero1 != numero2)
//         System.out.println("Numero 1 é diferente de numero 2");
//     }
// }



// ComparacaoAvancada.java
// Utilizando Equals e == para comparar Strings
// public static void main(String[] args) {

//         String nome1 = "JAVA";
//         String nome2 = "JAV";
        
//         System.out.println(nome1 == nome2); //true

//         String nome3 = new String("JAVA");
        
//         // System.out.println(nome1 == nome3); //false

//         String nome4 = nome3;

//         // System.out.println(nome3 == nome4); //true
        
//         //equals na parada
//         System.out.println(nome1.equals(nome2)); //false
//         System.out.println(nome1.equals(nome2)); //??
//         System.out.println(nome2.equals(nome3)); //??
//         System.out.println(nome3.equals(nome4)); //??

//     }

public static void main(String[] args) {
    // ComparacaoAvancada.java
        int numero1 = 130;
        int numero2 = 130;
        System.out.println(numero1 == numero2); //true
        
        Integer numero3 = 130;
        Integer numero4 = 130;

        System.out.println(numero1 == numero2); // true
        
        // A razão pela qual o resultado é false, é devido o Java tratar os valores
        // Como objetos a partir de agora.
        // Qual a solução ?
        // Quando queremos comparar objetos, usamos o método equals
        
         System.out.println(numero3.equals(numero4)); 
    }
 }
