"use strict";
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
class Carro {
    constructor(name, modelo, novo) {
        this.name = name;
        this.modelo = modelo;
        this.novo = novo;
    }
    modelodoCarro() {
        console.log(`O modelo do carro é: ${this.modelo}`);
    }
}
class CarroEletrico extends Carro {
    constructor(name, modelo, novo, bateria) {
        super(name, modelo, novo);
        this.bateria = bateria;
    }
    mostrarBateria() {
        console.log(`A bateria do carro é de ${this.bateria} kWh`);
    }
}
const carroEletrico = new CarroEletrico("Tesla", 2022, true, 75);
const carro = new Carro("Fusca", 1980, false);
console.log(carro);
console.log(carroEletrico);
