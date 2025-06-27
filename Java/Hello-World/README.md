<div align="center">

![Java Logo](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)

# ☕ Hello World - Java

**Primeiro programa em Java do Bootcamp Fullstack DIO**

</div>

## 📋 Sobre o Projeto

Este é o projeto inicial de Java do **Bootcamp Fullstack Java + Angular** da [DIO](https://dio.me). O clássico "Hello World" marca o início da jornada de aprendizado em Java, demonstrando:

- Estrutura básica de um programa Java
- Conceitos fundamentais da linguagem
- Configuração do ambiente de desenvolvimento
- Compilação e execução de código Java

## 🎯 Objetivos de Aprendizado

- ✅ Configurar ambiente Java
- ✅ Entender a estrutura de uma classe Java
- ✅ Usar o método `main` como ponto de entrada
- ✅ Compilar código Java com `javac`
- ✅ Executar bytecode com `java`
- ✅ Utilizar VS Code para desenvolvimento Java

## 📁 Estrutura do Projeto

```
Hello-World/
├── src/                    # Código fonte
│   └── App.java           # Classe principal
├── bin/                   # Bytecode compilado
│   └── App.class         # Classe compilada
├── lib/                  # Bibliotecas externas
└── README.md             # Documentação
```

## 🚀 Como Executar

### Pré-requisitos
- **Java Development Kit (JDK)** 8 ou superior
- **VS Code** com Extension Pack for Java (opcional)

### Passos para Execução

1. **Navegue até o diretório do projeto:**
   ```bash
   cd Java/Hello-World
   ```

2. **Compile o código:**
   ```bash
   javac src/App.java -d bin
   ```

3. **Execute o programa:**
   ```bash
   java -cp bin App
   ```

### Usando VS Code

1. Abra o projeto no VS Code
2. Use `Ctrl+F5` para executar sem debug
3. Ou use `F5` para executar com debug

## 📝 Código Principal

```java
public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
    }
}
```

## 🔧 Configuração do Ambiente

### Extensões Recomendadas para VS Code

- **Extension Pack for Java** - Pacote completo para desenvolvimento Java
- **Java Test Runner** - Execução de testes
- **Maven for Java** - Gerenciamento de dependências
- **Spring Boot Tools** - Para projetos Spring (futuro)

### Gerenciamento de Dependências

O **Java Projects** no VS Code permite:
- 📦 Gerenciar dependências do projeto
- 🔧 Configurar classpath
- 📚 Adicionar bibliotecas externas
- 🧪 Executar testes unitários

## 📚 Conceitos Aprendidos

### Estrutura de uma Classe Java
```java
public class NomeDaClasse {
    // Método principal - ponto de entrada
    public static void main(String[] args) {
        // Código a ser executado
    }
}
```

### Palavras-chave Importantes
- `public`: Modificador de acesso
- `class`: Declaração de classe
- `static`: Método pertence à classe, não à instância
- `void`: Método não retorna valor
- `main`: Método principal do programa

## 🎓 Próximos Passos

- [ ] Variáveis e tipos de dados
- [ ] Estruturas de controle (if, for, while)
- [ ] Métodos e funções
- [ ] Programação Orientada a Objetos
- [ ] Collections e estruturas de dados
- [ ] Tratamento de exceções

## 📞 Contato

- **GitHub**: [Seu GitHub](https://github.com/seu-usuario)
- **LinkedIn**: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)

---

<div align="center">
  <p>⭐ Primeiro passo de uma grande jornada em Java!</p>
  <p>Desenvolvido como parte do Bootcamp DIO</p>
</div>
