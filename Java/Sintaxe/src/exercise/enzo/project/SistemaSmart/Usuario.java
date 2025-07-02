package exercise.enzo.project.SistemaSmart;

public class Usuario {
    public static void main(String[] args) {
     
        App smartTv = new App();
        smartTv.aumentarVolume();
        smartTv.diminuirVolume();
        System.out.println("Canal atual: " + smartTv.canal);
        smartTv.mudarCanal(10);

        System.out.println("TV ligada? " + smartTv.ligada);
        System.out.println("Canal atual: " + smartTv.canal);
        System.out.println("Volume atual: " + smartTv.volume);

        smartTv.ligar();
        System.out.println("TV ligada? " + smartTv.ligada);
    }
}
