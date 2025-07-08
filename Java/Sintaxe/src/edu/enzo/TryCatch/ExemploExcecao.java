package edu.enzo.TryCatch;

import java.text.NumberFormat;
import java.text.ParseException;

// ExemploExcecao.java
public class ExemploExcecao {
    public static void main(String[] args) {
        Number valor;
        try {
            valor = NumberFormat.getInstance().parse("a1.75");
            System.out.println("Valor: " + valor);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        
    }
}