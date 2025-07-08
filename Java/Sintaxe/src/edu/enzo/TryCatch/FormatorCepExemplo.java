package edu.enzo.TryCatch;

public class FormatorCepExemplo {
    public static void main(String[] args) {
        try {
            String cepFormatado = formatarCep("9123469");
            System.out.println("CEP formatado: " + cepFormatado);
        } catch (CepInvalidoException e) {
            System.out.println("Erro ao formatar CEP: " + e.getMessage());
        }
    }
    static String formatarCep(String cep) throws CepInvalidoException {
        if (cep == null || cep.length() != 8) {
            throw new CepInvalidoException("CEP inválido: " + cep);
        }
        
        return cep.substring(0, 5) + "-" + cep.substring(5);
    }
}
