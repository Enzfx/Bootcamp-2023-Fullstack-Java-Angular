<div align="center">

![Java Logo](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![OOP](https://img.shields.io/badge/OOP-FF6B6B?style=for-the-badge&logo=java&logoColor=white)

# 🏗️ Anatomia das Classes Java

**Estudo aprofundado sobre estrutura e organização de classes em Java**

</div>

## 📋 Sobre o Projeto

Este projeto faz parte do **Bootcamp Fullstack Java + Angular** da [DIO](https://dio.me) e tem como objetivo explorar a **anatomia das classes Java**, abordando:

- 🏗️ Estrutura básica de uma classe
- 📦 Organização em pacotes (packages)
- 🔧 Modificadores de acesso
- 🎯 Métodos e construtores
- 📝 Convenções de nomenclatura
- 🧱 Princípios da Programação Orientada a Objetos

## 🎯 Objetivos de Aprendizado

- ✅ Compreender a estrutura de uma classe Java
- ✅ Aprender sobre modificadores de acesso (`public`, `private`, `protected`)
- ✅ Entender o conceito de pacotes e importações
- ✅ Conhecer convenções de nomenclatura Java
- ✅ Praticar criação de métodos e construtores
- ✅ Aplicar conceitos de encapsulamento

## 📁 Estrutura do Projeto

```
java-anatomia-classes/
├── src/
│   └── edu/
│       └── dio/
│           └── anatomia/
│               ├── MinhaClasse.java      # Classe principal
│               ├── Pessoa.java           # Exemplo de classe modelo
│               └── Calculadora.java      # Exemplos de métodos
├── bin/                                  # Bytecode compilado
├── lib/                                  # Bibliotecas externas
└── README.md                            # Documentação
```

## 🏗️ Anatomia de uma Classe Java

### Estrutura Básica
```java
package edu.dio.anatomia;  // 1. Declaração do pacote

import java.util.Scanner;  // 2. Importações

/**
 * 3. Documentação da classe
 */
public class MinhaClasse { // 4. Declaração da classe
    
    // 5. Atributos (variáveis de instância)
    private String nome;
    private int idade;
    
    // 6. Construtor
    public MinhaClasse(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    // 7. Métodos
    public void apresentar() {
        System.out.println("Olá, eu sou " + nome);
    }
    
    // 8. Getters e Setters
    public String getNome() {
        return nome;
    }
    
    public void setNome(String nome) {
        this.nome = nome;
    }
}
```

## 🔧 Modificadores de Acesso

| Modificador | Classe | Pacote | Subclasse | Global |
|-------------|--------|--------|-----------|--------|
| `public`    | ✅     | ✅     | ✅        | ✅     |
| `protected` | ✅     | ✅     | ✅        | ❌     |
| `default`   | ✅     | ✅     | ❌        | ❌     |
| `private`   | ✅     | ❌     | ❌        | ❌     |

## 📝 Convenções de Nomenclatura

### Classes
- **PascalCase**: `MinhaClasse`, `ContaBancaria`, `ProcessadorTexto`
- Substantivos que representam entidades

### Métodos
- **camelCase**: `calcularSaldo()`, `obterNome()`, `validarEmail()`
- Verbos que indicam ações

### Variáveis
- **camelCase**: `nomeCompleto`, `idadeUsuario`, `valorTotal`
- Substantivos descritivos

### Constantes
- **SNAKE_CASE**: `VALOR_MAXIMO`, `TAXA_JUROS`, `MENSAGEM_ERRO`
- Todas as letras maiúsculas

### Pacotes
- **lowercase**: `com.empresa.projeto`, `edu.dio.anatomia`
- Hierarquia invertida do domínio

## 🚀 Como Executar

### Pré-requisitos
- **Java Development Kit (JDK)** 8 ou superior
- **VS Code** com Extension Pack for Java

### Passos para Execução

1. **Navegue até o diretório:**
   ```bash
   cd Java/java-anatomia-classes
   ```

2. **Compile as classes:**
   ```bash
   javac src/edu/dio/anatomia/*.java -d bin
   ```

3. **Execute a classe principal:**
   ```bash
   java -cp bin edu.dio.anatomia.MinhaClasse
   ```

### Usando VS Code

1. Abra o projeto no VS Code
2. Execute com `Ctrl+F5` ou `F5`
3. Use o terminal integrado para compilação manual

## 📚 Conceitos Abordados

### 1. Encapsulamento
```java
public class ContaBancaria {
    private double saldo; // Atributo privado
    
    public double getSaldo() { // Método público para acessar
        return saldo;
    }
    
    public void depositar(double valor) { // Controle de acesso
        if (valor > 0) {
            saldo += valor;
        }
    }
}
```

### 2. Construtores
```java
public class Pessoa {
    private String nome;
    private int idade;
    
    // Construtor padrão
    public Pessoa() {
        this.nome = "Sem nome";
        this.idade = 0;
    }
    
    // Construtor com parâmetros
    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
```

### 3. Métodos Estáticos
```java
public class Calculadora {
    public static double somar(double a, double b) {
        return a + b;
    }
    
    public static double PI = 3.14159; // Constante estática
}
```

## 🧪 Exemplos Práticos

### Classe Modelo - Pessoa
```java
package edu.dio.anatomia;

public class Pessoa {
    private String nome;
    private int idade;
    private String email;
    
    public Pessoa(String nome, int idade, String email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
    
    public void apresentar() {
        System.out.println("Nome: " + nome + ", Idade: " + idade);
    }
    
    // Getters e Setters...
}
```

## 🎓 Próximos Passos

- [ ] Herança e Polimorfismo
- [ ] Interfaces e Classes Abstratas
- [ ] Collections Framework
- [ ] Tratamento de Exceções
- [ ] Programação Funcional com Streams
- [ ] Design Patterns

## 📖 Recursos Adicionais

- [📚 Oracle Java Tutorials](https://docs.oracle.com/javase/tutorial/)
- [📖 Java Code Conventions](https://www.oracle.com/java/technologies/javase/codeconventions-contents.html)
- [🎓 DIO - Cursos Java](https://dio.me)

## 📞 Contato

- **GitHub**: [Seu GitHub](https://github.com/seu-usuario)
- **LinkedIn**: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)

---

<div align="center">
  <p>⭐ Construindo uma base sólida em Java!</p>
  <p>Desenvolvido como parte do Bootcamp DIO</p>
</div>
