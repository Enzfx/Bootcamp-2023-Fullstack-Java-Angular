package edu.enzo.TryCatch;

public class CepInvalidoException extends Exception {
    private static final long serialVersionUID = 1L;

    public CepInvalidoException(String mensagem) {
        super(mensagem);
    }
    
}
