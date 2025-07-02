package exercise.enzo.project.SistemaSmart;

public class App {
    boolean ligada = false;
    int canal = 1;
    int volume = 25;
    // Método para mudar o canal
    public void mudarCanal(int novoCanal) {
        canal = novoCanal;
    }
    public void aumentarCanal() {
        canal++;
        System.out.println("Canal aumentado para: " + canal);
    }
    public void diminuirCanal() {
        canal--;
        System.out.println("Canal diminuído para: " + canal);
    }



    // Método para aumentar o volume
    public void aumentarVolume() {
            volume++;
            System.out.println("Volume aumentado para: " + volume);
    }
    // Método para diminuir o volume
    public void diminuirVolume() {
            volume--;
            System.out.println("Volume diminuído para: " + volume);
    }

    // Método para ligar e desligar a TV
    public void ligar() {
        ligada = true;
    }
    public void desligar() {
        ligada = false;
    }
}