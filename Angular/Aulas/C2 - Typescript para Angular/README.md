<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)

# 📘 C2 - TypeScript para Angular

**Fundamentos do TypeScript - A Base do Desenvolvimento Angular**

</div>

## 📋 Sobre o Projeto

Este projeto faz parte da **Aula 2** do **Bootcamp Fullstack Java + Angular** da [DIO](https://dio.me), explorando os **fundamentos do TypeScript** - a linguagem que forma a base do desenvolvimento Angular moderno.

## 🎯 Objetivos de Aprendizado

- ✅ Compreender os fundamentos do TypeScript
- ✅ Aplicar tipagem estática em JavaScript
- ✅ Trabalhar com interfaces e classes
- ✅ Implementar orientação a objetos
- ✅ Preparar-se para o desenvolvimento Angular
- ✅ Configurar ambiente TypeScript

## 📚 Por que TypeScript?

### 🚀 **Vantagens**
- **Tipagem Estática**: Detecção de erros em tempo de compilação
- **IntelliSense**: Melhor autocomplete e sugestões
- **Refatoração Segura**: Mudanças de código mais confiáveis
- **Escalabilidade**: Ideal para projetos grandes
- **Compatibilidade**: Transpila para JavaScript

### 🎯 **Para Angular**
- Linguagem oficial do framework
- Melhor integração com ferramentas
- Decorators e metadata
- Tipos para APIs do Angular

## 📁 Estrutura do Projeto

```
C2 - TypeScript para Angular/
├── src/
│   ├── index.ts                # Arquivo principal
│   ├── basics/                 # Conceitos básicos
│   │   ├── types.ts           # Tipos primitivos
│   │   ├── functions.ts       # Funções tipadas
│   │   └── arrays.ts          # Arrays e tuplas
│   ├── oop/                   # Orientação a Objetos
│   │   ├── classes.ts         # Classes e herança
│   │   ├── interfaces.ts      # Interfaces
│   │   └── abstract.ts        # Classes abstratas
│   ├── advanced/              # Conceitos avançados
│   │   ├── generics.ts        # Tipos genéricos
│   │   ├── decorators.ts      # Decorators
│   │   └── modules.ts         # Módulos
│   └── angular-prep/          # Preparação para Angular
│       ├── services.ts        # Padrão Service
│       ├── components.ts      # Estrutura de componentes
│       └── models.ts          # Modelos de dados
├── docs/                      # Documentação compilada
├── package.json               # Dependências do projeto
├── tsconfig.json             # Configuração TypeScript
└── README.md                 # Este arquivo
```

## 🔧 Configuração Inicial

### 1. **Instalação**
```bash
# Instalar TypeScript globalmente
npm install -g typescript

# Inicializar projeto
npm init -y

# Instalar dependências de desenvolvimento
npm install -D typescript @types/node ts-node
```

### 2. **Configuração tsconfig.json**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020", "DOM"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "declaration": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## 📝 Conceitos Fundamentais

### 1. **Tipos Básicos**
```typescript
// src/basics/types.ts

// Tipos primitivos
let nome: string = "João";
let idade: number = 25;
let ativo: boolean = true;
let indefinido: undefined = undefined;
let nulo: null = null;

// Arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: Array<string> = ["Ana", "João", "Maria"];

// Tuplas
let pessoa: [string, number] = ["João", 25];

// Enum
enum Status {
  ATIVO = "ativo",
  INATIVO = "inativo",
  PENDENTE = "pendente"
}

// Union Types
let resultado: string | number = "sucesso";
resultado = 200;

// Literal Types
let direcao: "norte" | "sul" | "leste" | "oeste" = "norte";

// Type Alias
type Usuario = {
  id: number;
  nome: string;
  email: string;
  ativo: boolean;
};

let usuario: Usuario = {
  id: 1,
  nome: "João Silva",
  email: "joao@email.com",
  ativo: true
};
```

### 2. **Funções Tipadas**
```typescript
// src/basics/functions.ts

// Função com tipos
function somar(a: number, b: number): number {
  return a + b;
}

// Função com parâmetro opcional
function cumprimentar(nome: string, sobrenome?: string): string {
  return sobrenome ? `Olá, ${nome} ${sobrenome}!` : `Olá, ${nome}!`;
}

// Função com parâmetro padrão
function criar Usuario(nome: string, idade: number = 18): Usuario {
  return {
    id: Math.random(),
    nome,
    email: `${nome.toLowerCase()}@email.com`,
    ativo: true
  };
}

// Arrow functions
const multiplicar = (a: number, b: number): number => a * b;

// Função como tipo
type OperacaoMatematica = (a: number, b: number) => number;

const dividir: OperacaoMatematica = (a, b) => a / b;

// Rest parameters
function calcularMedia(...numeros: number[]): number {
  const soma = numeros.reduce((acc, num) => acc + num, 0);
  return soma / numeros.length;
}

// Overloads
function converter(valor: string): number;
function converter(valor: number): string;
function converter(valor: string | number): string | number {
  if (typeof valor === "string") {
    return parseInt(valor);
  }
  return valor.toString();
}
```

### 3. **Classes e Orientação a Objetos**
```typescript
// src/oop/classes.ts

// Classe básica
class Animal {
  protected nome: string;
  private idade: number;
  public especie: string;

  constructor(nome: string, idade: number, especie: string) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  // Getter
  get getNome(): string {
    return this.nome;
  }

  // Setter
  set setIdade(novaIdade: number) {
    if (novaIdade > 0) {
      this.idade = novaIdade;
    }
  }

  // Método público
  public apresentar(): string {
    return `${this.nome} é um ${this.especie} de ${this.idade} anos`;
  }

  // Método protegido
  protected dormir(): void {
    console.log(`${this.nome} está dormindo...`);
  }
}

// Herança
class Cachorro extends Animal {
  private raca: string;

  constructor(nome: string, idade: number, raca: string) {
    super(nome, idade, "Cachorro");
    this.raca = raca;
  }

  // Sobrescrever método
  public apresentar(): string {
    return `${super.apresentar()} da raça ${this.raca}`;
  }

  // Método específico
  public latir(): void {
    console.log(`${this.nome} está latindo: Au au!`);
  }

  // Método estático
  static criarCachorroGenerico(): Cachorro {
    return new Cachorro("Rex", 3, "Vira-lata");
  }
}

// Classe abstrata
abstract class Veiculo {
  protected marca: string;
  protected modelo: string;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }

  // Método concreto
  public getInfo(): string {
    return `${this.marca} ${this.modelo}`;
  }

  // Método abstrato
  abstract acelerar(): void;
}

class Carro extends Veiculo {
  acelerar(): void {
    console.log("Carro acelerando com motor...");
  }
}
```

### 4. **Interfaces**
```typescript
// src/oop/interfaces.ts

// Interface básica
interface Pessoa {
  readonly id: number;
  nome: string;
  email: string;
  idade?: number; // Propriedade opcional
}

// Interface para métodos
interface Calculadora {
  somar(a: number, b: number): number;
  subtrair(a: number, b: number): number;
}

// Implementação de interface
class CalculadoraBasica implements Calculadora {
  somar(a: number, b: number): number {
    return a + b;
  }

  subtrair(a: number, b: number): number {
    return a - b;
  }
}

// Interface estendida
interface Funcionario extends Pessoa {
  cargo: string;
  salario: number;
  departamento: string;
}

// Interface para funções
interface ProcessadorDados {
  (dados: any[]): any[];
}

const filtrarDados: ProcessadorDados = (dados) => {
  return dados.filter(item => item !== null);
};

// Interface genérica
interface Repositorio<T> {
  buscarPorId(id: number): T | undefined;
  buscarTodos(): T[];
  criar(item: T): T;
  atualizar(id: number, item: Partial<T>): T | undefined;
  deletar(id: number): boolean;
}

class UsuarioRepositorio implements Repositorio<Usuario> {
  private usuarios: Usuario[] = [];

  buscarPorId(id: number): Usuario | undefined {
    return this.usuarios.find(u => u.id === id);
  }

  buscarTodos(): Usuario[] {
    return [...this.usuarios];
  }

  criar(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);
    return usuario;
  }

  atualizar(id: number, dadosAtualizacao: Partial<Usuario>): Usuario | undefined {
    const usuario = this.buscarPorId(id);
    if (usuario) {
      Object.assign(usuario, dadosAtualizacao);
      return usuario;
    }
    return undefined;
  }

  deletar(id: number): boolean {
    const index = this.usuarios.findIndex(u => u.id === id);
    if (index > -1) {
      this.usuarios.splice(index, 1);
      return true;
    }
    return false;
  }
}
```

### 5. **Generics**
```typescript
// src/advanced/generics.ts

// Função genérica
function primeiro<T>(array: T[]): T | undefined {
  return array[0];
}

// Uso
const primeiroNumero = primeiro([1, 2, 3]); // number | undefined
const primeiraString = primeiro(["a", "b", "c"]); // string | undefined

// Classe genérica
class Lista<T> {
  private itens: T[] = [];

  adicionar(item: T): void {
    this.itens.push(item);
  }

  remover(index: number): T | undefined {
    return this.itens.splice(index, 1)[0];
  }

  obter(index: number): T | undefined {
    return this.itens[index];
  }

  obterTodos(): T[] {
    return [...this.itens];
  }

  get tamanho(): number {
    return this.itens.length;
  }
}

// Interface genérica com constraints
interface Comparavel {
  comparar(outro: any): number;
}

function ordenar<T extends Comparavel>(itens: T[]): T[] {
  return itens.sort((a, b) => a.comparar(b));
}

// Utility Types
type UsuarioSemId = Omit<Usuario, 'id'>;
type UsuarioParcial = Partial<Usuario>;
type UsuarioObrigatorio = Required<Usuario>;
type CamposUsuario = keyof Usuario;
```

### 6. **Decorators (Preparação Angular)**
```typescript
// src/advanced/decorators.ts

// Class decorator
function Entidade(tabela: string) {
  return function<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      tabela = tabela;
      
      salvar() {
        console.log(`Salvando na tabela ${tabela}`);
      }
    };
  };
}

// Property decorator
function Coluna(nome?: string) {
  return function(target: any, propertyKey: string) {
    const nomeColuna = nome || propertyKey;
    console.log(`Propriedade ${propertyKey} mapeada para coluna ${nomeColuna}`);
  };
}

// Method decorator
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value;
  
  descriptor.value = function(...args: any[]) {
    console.log(`Chamando método ${propertyKey} com argumentos:`, args);
    const resultado = metodoOriginal.apply(this, args);
    console.log(`Método ${propertyKey} retornou:`, resultado);
    return resultado;
  };
}

// Parameter decorator
function Validar(target: any, propertyKey: string, parameterIndex: number) {
  console.log(`Parâmetro ${parameterIndex} do método ${propertyKey} será validado`);
}

// Uso dos decorators
@Entidade("usuarios")
class UsuarioModel {
  @Coluna("id")
  id: number;

  @Coluna("nome_completo")
  nome: string;

  @Coluna()
  email: string;

  constructor(id: number, nome: string, email: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
  }

  @Log
  atualizar(@Validar novoNome: string): void {
    this.nome = novoNome;
  }
}
```

## 🚀 Como Executar

### Pré-requisitos
- **Node.js** (versão 16 ou superior)
- **TypeScript** instalado globalmente

### Instalação e Execução

1. **Navegue até o diretório:**
   ```bash
   cd "Angular/Aulas/C2 - TypeScript para Angular"
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Compile o TypeScript:**
   ```bash
   # Compilação única
   npx tsc
   
   # Modo watch (recompila automaticamente)
   npx tsc --watch
   ```

4. **Execute o código JavaScript gerado:**
   ```bash
   node dist/index.js
   ```

5. **Ou execute diretamente com ts-node:**
   ```bash
   npx ts-node src/index.ts
   ```

## 🎯 Preparação para Angular

### 1. **Estrutura de Componente**
```typescript
// src/angular-prep/components.ts

// Simulação de um componente Angular
interface ComponenteAngular {
  selector: string;
  template: string;
  styles?: string[];
}

interface OnInit {
  ngOnInit(): void;
}

interface OnDestroy {
  ngOnDestroy(): void;
}

// Classe base para componentes
abstract class BaseComponent implements OnInit, OnDestroy {
  protected isDestroyed = false;

  ngOnInit(): void {
    console.log('Componente inicializado');
  }

  ngOnDestroy(): void {
    this.isDestroyed = true;
    console.log('Componente destruído');
  }
}

// Exemplo de componente
class UserComponent extends BaseComponent {
  private user: Usuario | null = null;

  constructor(private userService: UserService) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.loadUser();
  }

  private loadUser(): void {
    // Simulação de carregamento de usuário
    setTimeout(() => {
      if (!this.isDestroyed) {
        this.user = {
          id: 1,
          nome: "João Silva",
          email: "joao@email.com",
          ativo: true
        };
      }
    }, 1000);
  }
}
```

### 2. **Padrão Service**
```typescript
// src/angular-prep/services.ts

// Interface para HTTP Client (simulação)
interface HttpClient {
  get<T>(url: string): Promise<T>;
  post<T>(url: string, data: any): Promise<T>;
  put<T>(url: string, data: any): Promise<T>;
  delete(url: string): Promise<void>;
}

// Service base
abstract class BaseService {
  constructor(protected http: HttpClient) {}
}

// User Service
class UserService extends BaseService {
  private readonly baseUrl = '/api/users';

  async buscarTodos(): Promise<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl);
  }

  async buscarPorId(id: number): Promise<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/${id}`);
  }

  async criar(usuario: Omit<Usuario, 'id'>): Promise<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario);
  }

  async atualizar(id: number, usuario: Partial<Usuario>): Promise<Usuario> {
    return this.http.put<Usuario>(`${this.baseUrl}/${id}`, usuario);
  }

  async deletar(id: number): Promise<void> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
```

## 🔧 Scripts Disponíveis

```bash
# Compilação
npm run build          # Compilar para JavaScript
npm run build:watch    # Compilar em modo watch

# Execução
npm start             # Executar código compilado
npm run dev           # Executar com ts-node

# Validação
npm run type-check    # Verificar tipos sem compilar
npm run lint          # Análise de código
```

## ⚡ Boas Práticas

### 1. **Tipagem Rigorosa**
```typescript
// ✅ Usar strict mode
"strict": true

// ✅ Tipar todas as funções
function processar(dados: string[]): number {
  return dados.length;
}

// ✅ Evitar 'any'
const dados: unknown = fetchData();
if (typeof dados === 'string') {
  console.log(dados.toUpperCase());
}
```

### 2. **Nomenclatura Consistente**
```typescript
// ✅ PascalCase para classes e interfaces
class UserService {}
interface ApiResponse {}

// ✅ camelCase para variáveis e funções
const userName = 'João';
function getUserData() {}

// ✅ UPPER_CASE para constantes
const API_BASE_URL = 'https://api.exemplo.com';
```

### 3. **Organização de Código**
```typescript
// ✅ Imports organizados
import { Component, OnInit } from '@angular/core';
import { Usuario } from './models/usuario';
import { UserService } from './services/user.service';

// ✅ Exports explícitos
export { Usuario, UserService };
export type { ApiResponse };
```

## 📈 Próximos Passos

- [ ] Integração com Angular
- [ ] Testes com Jest/Jasmine
- [ ] Configuração de lint (ESLint + Prettier)
- [ ] Build optimization
- [ ] Documentação com TypeDoc

## 📖 Recursos Adicionais

- [📚 TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [🎯 TypeScript Playground](https://www.typescriptlang.org/play)
- [📖 Angular TypeScript Guide](https://angular.io/guide/typescript-configuration)

## 📞 Contato

- **GitHub**: [Seu GitHub](https://github.com/seu-usuario)
- **LinkedIn**: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)

---

<div align="center">
  <p>⭐ Construindo bases sólidas com TypeScript!</p>
  <p>Desenvolvido como parte do Bootcamp DIO</p>
</div>
