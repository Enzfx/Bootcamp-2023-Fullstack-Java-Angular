/**
 * variaveis
 */

// Tipos primitivos: boolean, number e string.
    // let Ligado: boolean = true;
    // let numero: number = 10;
    // let nome: string = "Enzo";
// Tipos Especiais: null e undefined
    // let nulo: null = null;
    // let indefinido: undefined = undefined;

// Tipos abrangentes: any e void
    // let qualquerCoisa: any = "pode ser qualquer coisa";
    // let vazio: void

// Tipos de objetos: object sem previsibilidade de estrutura
    // let objeto: object = {
    //     nome: "Enzo",
    //     idade: 18,
    //     Estudando: true
    // };
// Tipos de objetos: Object Tipado
    // type Pessoa = {
    //     nome: string;
    //     idade: number;
    //     Estudando: boolean;
    // }
    // let pessoa: Pessoa = {
    //     nome: "Enzo",
    //     idade: 18,
    //     Estudando: true
    // };

    /**
    Arrays
    */

    // let numeros: number[] = [1, 2, 3, 4, 5]; // Recomendado
    // let numerosGenericos: Array<number> = [1, 2, 3, 4, 5]; // Alternativa

    // let infos: (string | number)[] = ["Enzo", 18, "Estudando"]; // Array com tipos mistos
    // let infosGenericas: Array<string | number> = ["Enzo", 18, "Estudando"]; // Alternativa

    /**
     * Tuplas
     */

    // let tupla: [string, number, boolean] = ["Enzo", 18, true]; // Ordem importar

    /**
     * Arrays metodos
     */
    // numeros.push(); // Adiciona um elemento ao final do array

    /**
     * Dates
     */

    // let aniversario: Date = new Date("2006-09-15 05:00"); // Data de aniversário
    // console.log(aniversario.toString());

    /**
     * Funções
     */

    // function addnumber(a: number, b: number): number {
    //     return a + b;
    // }
    // async function getDatabase(id: number): Promise<string> {
    //     return "Enzo";

    // }
    // let somar: number = addnumber(10, 20);
    // console.log(somar);

    /**
     * Interfaces(types x interfaces)
     */

    // type robot = {
    //     id: number;
    //     nome: string;
    // };
// Interface, trabalhar com classes
// Contratos
    // interface robt2 {
    //     id: number;
    //     nome: string;
    // }

    /**
     * Classes
     */
    /**

    /**
     * Datar modifiers
     * public: Acessível de qualquer lugar
     * private: Acessível apenas dentro da classe
     * protected: Acessível dentro da classe e em classes que herdam dela
     */

    // class Carro{
    //     name: string;
    //     modelo: number;
    //     novo: boolean;

    //     constructor(name: string, modelo: number, novo: boolean) {
    //         this.name = name;
    //         this.modelo = modelo;
    //         this.novo = novo;
    //     }
    //     modelodoCarro(): void {
    //         console.log(`O modelo do carro é: ${this.modelo}`);
    //     }
        
    // }
    // Subclasse CarroEletrico que herda de Carro
    // class CarroEletrico extends Carro {
    //     bateria: number;

    //     constructor(name: string, modelo: number, novo: boolean, bateria: number) {
    //         super(name, modelo, novo);
    //         this.bateria = bateria;
    //     }

    //     mostrarBateria(): void {
    //         console.log(`A bateria do carro é de ${this.bateria} kWh`);
    //     }
    // }
    // const carroEletrico = new CarroEletrico("Tesla", 2022, true, 75);
    // const carro = new Carro("Fusca", 1980, false);
    // console.log(carro);
    // console.log(carroEletrico);


    /**
     * Genrics
     */

    // function concatArray<T>(...itens: T[]): T[] {
    //     return new Array().concat(...itens);
    // }
    // const numeros = concatArray<number[]>([1, 2, 3], [4, 5, 6]);
    // const letras = concatArray<string[]>(["a", "b"], ["c"]);

    // console.log(numeros);
    // console.log(letras);
    
/**
 * Decorators
 */
// function Nome (target: any){
//     console.log(target);
// }
// @Nome
// class Funcionario{}

function ApiVersion(version:string) {
    return (target: any)=>{
        Object.assign(target.prototype, {__version: version})
    };
}
// @ApiVersion("1.0")
function minlength(length:number){
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () =>_value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`O valor deve ter pelo menos ${length} caracteres.`);
            } else {
            _value = value;
            }
         };
        Object.defineProperty(target, key, {
             get: getter,
             set: setter,
            });
    }
}
class Api {
    @minlength(5)
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
const api = new Api("ApiTeste");
console.log(api.name);
