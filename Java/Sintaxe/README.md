<div align="center">

![Java](https://img.shields.io/badge/Java-17+-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![OOP](https://img.shields.io/badge/OOP-FF6B6B?style=for-the-badge&logo=java&logoColor=white)
![DIO](https://img.shields.io/badge/DIO-Bootcamp-00D4FF?style=for-the-badge&logo=dio&logoColor=white)
![Status](https://img.shields.io/badge/Status-Ativo-2ECC40?style=for-the-badge)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

# 🏗️ Anatomia das Classes Java

**Estudo aprofundado sobre estrutura e organização de classes em Java**

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com)

</div>

## 📋 Sobre o Projeto

Este projeto faz parte do **Bootcamp Fullstack Java + Angular** da [DIO](https://dio.me) e tem como objetivo explorar a **anatomia das classes Java**, fornecendo uma base sólida para desenvolvimento orientado a objetos.

## 🎯 Objetivos de Aprendizado

- ✅ Compreender a estrutura completa de uma classe Java
- ✅ Dominar modificadores de acesso (`public`, `private`, `protected`, `default`)
- ✅ Entender o conceito de pacotes e importações
- ✅ Aplicar convenções de nomenclatura Java (Oracle Standards)
- ✅ Implementar construtores sobrecarregados
- ✅ Criar métodos estáticos e de instância
- ✅ Aplicar conceitos de encapsulamento
- ✅ Utilizar JavaDoc para documentação
- ✅ Implementar getters e setters otimizados
- ✅ Seguir princípios SOLID
- ✅ Organizar código em estrutura de pacotes
- ✅ Implementar validações e tratamento de erros
- ✅ Escrever código limpo e legível

## 📁 Estrutura do Projeto

```
Java/Sintaxe/
├── 📂 src/
│   └── 📂 edu/
│       └── 📂 dio/
│           └── 📂 anatomia/
│               ├── 📄 MinhaClasse.java      # Classe principal com método main
│               ├── 📄 Pessoa.java           # Modelo de entidade com encapsulamento
│               ├── 📄 Calculadora.java      # Métodos estáticos e utilitários
│               ├── 📄 ContaBancaria.java    # Exemplo de negócio real
│               └── 📄 ValidadorCPF.java     # Validações e regex
├── 📂 bin/                                  # Bytecode compilado (.class)
├── 📂 lib/                                  # Bibliotecas externas (JARs)
├── 📂 docs/                                 # JavaDoc gerado
├── 📄 .gitignore                           # Arquivos ignorados pelo Git
└── 📄 README.md                            # Este arquivo de documentação
```

### 🗂️ Organização dos Pacotes

- **`edu.dio.anatomia`** - Pacote principal com exemplos básicos
- **`edu.dio.anatomia.modelo`** - Classes de modelo/entidade
- **`edu.dio.anatomia.util`** - Classes utilitárias
- **`edu.dio.anatomia.servico`** - Lógica de negócio

## 🏗️ Anatomia de uma Classe Java

### 📋 Estrutura Completa
```java
package edu.dio.anatomia;  // 1. Declaração do pacote

import java.util.Scanner;  // 2. Importações de bibliotecas
import java.time.LocalDate;
import java.util.Objects;

/**
 * 3. Documentação JavaDoc da classe
 * 
 * Esta classe demonstra a estrutura completa de uma classe Java,
 * incluindo todos os elementos fundamentais da orientação a objetos.
 * 
 * @author Seu Nome
 * @version 1.0
 * @since 2025
 */
public class MinhaClasse { // 4. Declaração da classe
    
    // 5. Constantes da classe (static final)
    public static final String VERSAO = "1.0.0";
    private static final int IDADE_MINIMA = 0;
    private static final int IDADE_MAXIMA = 150;
    
    // 6. Atributos de classe (static)
    private static int contadorInstancias = 0;
    
    // 7. Atributos de instância
    private String nome;
    private int idade;
    private LocalDate dataNascimento;
    private boolean ativo;
    
    // 8. Bloco de inicialização estático
    static {
        System.out.println("Classe MinhaClasse carregada!");
    }
    
    // 9. Bloco de inicialização de instância
    {
        contadorInstancias++;
        ativo = true;
    }
    
    // 10. Construtor padrão
    public MinhaClasse() {
        this("Sem nome", 0);
    }
    
    // 11. Construtor com parâmetros
    public MinhaClasse(String nome, int idade) {
        setNome(nome);
        setIdade(idade);
        this.dataNascimento = LocalDate.now().minusYears(idade);
    }
    
    // 12. Métodos de acesso (Getters)
    public String getNome() {
        return nome;
    }
    
    public int getIdade() {
        return idade;
    }
    
    public LocalDate getDataNascimento() {
        return dataNascimento;
    }
    
    public boolean isAtivo() {
        return ativo;
    }
    
    // 13. Métodos modificadores (Setters) com validação
    public void setNome(String nome) {
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("Nome não pode ser vazio");
        }
        this.nome = nome.trim();
    }
    
    public void setIdade(int idade) {
        if (idade < IDADE_MINIMA || idade > IDADE_MAXIMA) {
            throw new IllegalArgumentException(
                "Idade deve estar entre " + IDADE_MINIMA + " e " + IDADE_MAXIMA
            );
        }
        this.idade = idade;
    }
    
    // 14. Métodos de negócio
    public void apresentar() {
        System.out.printf("Olá! Eu sou %s, tenho %d anos.%n", nome, idade);
    }
    
    public boolean ehMaiorDeIdade() {
        return idade >= 18;
    }
    
    // 15. Métodos estáticos
    public static int getContadorInstancias() {
        return contadorInstancias;
    }
    
    public static String getVersao() {
        return VERSAO;
    }
    
    // 16. Sobrescrita de métodos da classe Object
    @Override
    public String toString() {
        return String.format("MinhaClasse{nome='%s', idade=%d, ativo=%s}", 
                           nome, idade, ativo);
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        MinhaClasse that = (MinhaClasse) obj;
        return idade == that.idade && 
               Objects.equals(nome, that.nome);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(nome, idade);
    }
    
    // 17. Método principal (ponto de entrada)
    public static void main(String[] args) {
        System.out.println("=== Demonstração da Anatomia de Classes Java ===");
        
        // Criando instâncias
        MinhaClasse pessoa1 = new MinhaClasse();
        MinhaClasse pessoa2 = new MinhaClasse("João Silva", 25);
        
        // Demonstrando funcionalidades
        pessoa1.setNome("Maria Santos");
        pessoa1.setIdade(30);
        
        pessoa1.apresentar();
        pessoa2.apresentar();
        
        System.out.println("Instâncias criadas: " + getContadorInstancias());
        System.out.println("Versão da classe: " + getVersao());
    }
}
```

### 🔍 Elementos Detalhados

| Elemento | Descrição | Exemplo |
|----------|-----------|---------|
| **Package** | Organização hierárquica | `package edu.dio.anatomia;` |
| **Imports** | Bibliotecas utilizadas | `import java.util.Scanner;` |
| **JavaDoc** | Documentação da classe | `/** Descrição da classe */` |
| **Modificadores** | Controle de acesso | `public`, `private`, `protected` |
| **Constantes** | Valores imutáveis | `public static final String` |
| **Atributos** | Estado do objeto | `private String nome;` |
| **Construtores** | Inicialização | `public MinhaClasse()` |
| **Métodos** | Comportamento | `public void apresentar()` |

## 🔧 Modificadores de Acesso

### 📊 Tabela de Visibilidade

| Modificador | Classe | Pacote | Subclasse | Global | Uso Recomendado |
|-------------|--------|--------|-----------|--------|-----------------|
| `public`    | ✅     | ✅     | ✅        | ✅     | APIs públicas, interfaces |
| `protected` | ✅     | ✅     | ✅        | ❌     | Herança, extensibilidade |
| `default`   | ✅     | ✅     | ❌        | ❌     | Pacotes internos |
| `private`   | ✅     | ❌     | ❌        | ❌     | Encapsulamento interno |

### 🎯 Exemplos Práticos

```java
public class ExemplosModificadores {
    
    // ✅ PUBLIC - Acesso total
    public String nomeCompleto;
    public void metodoPúblico() { /* ... */ }
    
    // 🔒 PRIVATE - Apenas dentro da classe
    private String senha;
    private void validarSenha() { /* ... */ }
    
    // 👨‍👩‍👧‍👦 PROTECTED - Família (herança)
    protected String email;
    protected void notificar() { /* ... */ }
    
    // 📦 DEFAULT - Mesmo pacote
    String numeroDocumento;
    void processarDocumento() { /* ... */ }
}
```

### 🛡️ Boas Práticas de Encapsulamento

```java
public class ContaCorrente {
    private double saldo; // Sempre private para dados sensíveis
    private String numeroConta;
    
    // Acesso controlado através de métodos
    public double getSaldo() {
        return saldo;
    }
    
    public void depositar(double valor) {
        if (valor <= 0) {
            throw new IllegalArgumentException("Valor deve ser positivo");
        }
        this.saldo += valor;
    }
    
    public boolean sacar(double valor) {
        if (valor <= 0 || valor > saldo) {
            return false;
        }
        this.saldo -= valor;
        return true;
    }
}
```

## 📝 Convenções de Nomenclatura (Oracle Standards)

### 🏢 Classes
- **PascalCase**: `MinhaClasse`, `ContaBancaria`, `ProcessadorTexto`
- **Regras**: Substantivos, primeira letra maiúscula, sem underscores
- **Exemplos**: `Usuario`, `RelatorioVendas`, `ValidadorCPF`

### ⚡ Métodos
- **camelCase**: `calcularSaldo()`, `obterNome()`, `validarEmail()`
- **Regras**: Verbos de ação, primeira letra minúscula
- **Padrões**:
  - **Get/Set**: `getNome()`, `setIdade()`
  - **Is/Has**: `isAtivo()`, `hasPermissao()`
  - **Ações**: `processar()`, `calcular()`, `validar()`

### 📊 Variáveis e Atributos
- **camelCase**: `nomeCompleto`, `idadeUsuario`, `valorTotal`
- **Regras**: Substantivos descritivos, sem abreviações
- **Exemplos**:
  ```java
  private String endercoResidencial;  // ✅ Descritivo
  private String end;                 // ❌ Abreviado
  private boolean isAtivo;           // ✅ Boolean com 'is'
  private int count;                 // ❌ Muito genérico
  private int totalProdutos;         // ✅ Específico
  ```

### 🔒 Constantes
- **SNAKE_CASE**: `VALOR_MAXIMO`, `TAXA_JUROS`, `MENSAGEM_ERRO`
- **Regras**: Todas maiúsculas, palavras separadas por underscore
- **Exemplo**:
  ```java
  public static final String FORMATO_DATA = "dd/MM/yyyy";
  public static final int LIMITE_TENTATIVAS = 3;
  public static final double PI = 3.14159265359;
  ```

### 📦 Pacotes
- **lowercase**: `com.empresa.projeto`, `edu.dio.anatomia`
- **Regras**: Hierarquia invertida do domínio, apenas minúsculas
- **Estrutura**:
  ```
  edu.dio.anatomia          # Pacote raiz
  edu.dio.anatomia.modelo   # Modelos/Entidades
  edu.dio.anatomia.servico  # Lógica de negócio
  edu.dio.anatomia.util     # Utilitários
  ```

### 🎯 Interfaces
- **PascalCase com 'I' ou sufixo 'able'**:
  - `Comparable`, `Runnable`, `Serializable`
  - `IProcessador`, `IValidador` (menos comum)

### 🔄 Enums
- **PascalCase para enum, SNAKE_CASE para valores**:
  ```java
  public enum StatusPedido {
      PENDENTE,
      PROCESSANDO,
      ENVIADO,
      ENTREGUE,
      CANCELADO
  }
  ```

## 🚀 Como Executar

### ⚙️ Pré-requisitos

| Ferramenta | Versão Mínima | Link Download |
|------------|---------------|---------------|
| **Java JDK** | 17+ (LTS) | [Oracle JDK](https://www.oracle.com/java/technologies/javase-downloads.html) |
| **VS Code** | 1.70+ | [Visual Studio Code](https://code.visualstudio.com/) |
| **Extension Pack for Java** | Última | [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack) |

### 📋 Passos para Execução

#### 🔧 Método 1: Terminal (Windows PowerShell)

1. **📂 Navegue até o diretório:**
   ```powershell
   cd "c:\Users\Pichau\OneDrive\Área de Trabalho\Projetos de Programaçao\DIO\Fullstack Java+Angular\Java\Sintaxe"
   ```

2. **🏗️ Compile as classes:**
   ```powershell
   javac -d bin src\edu\dio\anatomia\*.java
   ```

3. **🚀 Execute a classe principal:**
   ```powershell
   java -cp bin edu.dio.anatomia.MinhaClasse
   ```

4. **📚 Gerar documentação JavaDoc:**
   ```powershell
   javadoc -d docs -sourcepath src -subpackages edu.dio.anatomia
   ```

#### 🎯 Método 2: VS Code (Recomendado)

1. **📁 Abra o projeto no VS Code:**
   ```powershell
   code .
   ```

2. **▶️ Execute diretamente:**
   - Pressione `Ctrl+F5` (executar sem debug)
   - Ou `F5` (executar com debug)
   - Ou clique no botão "Run" na classe principal

3. **🔧 Use o terminal integrado:**
   - `Ctrl+`` para abrir terminal
   - Execute comandos diretamente

#### 🐳 Método 3: Docker (Opcional)

```dockerfile
# Dockerfile
FROM openjdk:17-slim
COPY src/ /app/src/
WORKDIR /app
RUN javac -d bin src/edu/dio/anatomia/*.java
CMD ["java", "-cp", "bin", "edu.dio.anatomia.MinhaClasse"]
```

```powershell
# Construir e executar
docker build -t java-anatomia .
docker run java-anatomia
```

### 🛠️ Configuração do VS Code

#### 📦 Extensões Recomendadas

```json
{
  "recommendations": [
    "vscjava.vscode-java-pack",
    "redhat.java",
    "vscjava.vscode-java-debug",
    "vscjava.vscode-java-test",
    "vscjava.vscode-maven",
    "SonarSource.sonarlint-vscode"
  ]
}
```

#### ⚙️ Configurações do Workspace

```json
{
  "java.configuration.updateBuildConfiguration": "automatic",
  "java.saveActions.organizeImports": true,
  "java.format.enabled": true,
  "files.autoSave": "afterDelay"
}
```

## 📚 Conceitos Fundamentais Abordados

### 1. 🔐 Encapsulamento
**Princípio**: Ocultar detalhes internos e expor apenas interface necessária.

```java
public class ContaBancaria {
    // ❌ Atributos privados - não acessíveis externamente
    private double saldo;
    private String numeroConta;
    private boolean contaAtiva;
    
    // ✅ Construtor com validação
    public ContaBancaria(String numeroConta, double saldoInicial) {
        if (numeroConta == null || numeroConta.trim().isEmpty()) {
            throw new IllegalArgumentException("Número da conta é obrigatório");
        }
        if (saldoInicial < 0) {
            throw new IllegalArgumentException("Saldo inicial não pode ser negativo");
        }
        
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
        this.contaAtiva = true;
    }
    
    // ✅ Acesso controlado através de métodos
    public double getSaldo() {
        verificarContaAtiva();
        return saldo;
    }
    
    public boolean depositar(double valor) {
        if (valor <= 0) {
            System.err.println("Valor de depósito deve ser positivo");
            return false;
        }
        
        verificarContaAtiva();
        this.saldo += valor;
        System.out.printf("Depósito realizado: R$ %.2f%n", valor);
        return true;
    }
    
    public boolean sacar(double valor) {
        if (valor <= 0) {
            System.err.println("Valor de saque deve ser positivo");
            return false;
        }
        
        verificarContaAtiva();
        
        if (valor > saldo) {
            System.err.println("Saldo insuficiente");
            return false;
        }
        
        this.saldo -= valor;
        System.out.printf("Saque realizado: R$ %.2f%n", valor);
        return true;
    }
    
    // 🔒 Método privado para validações internas
    private void verificarContaAtiva() {
        if (!contaAtiva) {
            throw new IllegalStateException("Conta inativa");
        }
    }
}
```

### 2. 🏗️ Construtores Avançados
**Conceito**: Múltiplas formas de inicializar objetos.

```java
public class Pessoa {
    private String nome;
    private int idade;
    private String email;
    private LocalDate dataNascimento;
    
    // 🔧 Construtor padrão
    public Pessoa() {
        this("Nome não informado", 0, "email@exemplo.com");
    }
    
    // 🔧 Construtor básico
    public Pessoa(String nome, int idade) {
        this(nome, idade, null);
    }
    
    // 🔧 Construtor completo (master constructor)
    public Pessoa(String nome, int idade, String email) {
        setNome(nome);
        setIdade(idade);
        setEmail(email);
        this.dataNascimento = LocalDate.now().minusYears(idade);
    }
    
    // 🔧 Construtor por data de nascimento
    public Pessoa(String nome, LocalDate dataNascimento) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.idade = Period.between(dataNascimento, LocalDate.now()).getYears();
    }
    
    // Métodos de validação nos setters...
    public void setNome(String nome) {
        if (nome == null || nome.trim().length() < 2) {
            throw new IllegalArgumentException("Nome deve ter pelo menos 2 caracteres");
        }
        this.nome = nome.trim();
    }
    
    public void setIdade(int idade) {
        if (idade < 0 || idade > 150) {
            throw new IllegalArgumentException("Idade deve estar entre 0 e 150 anos");
        }
        this.idade = idade;
    }
    
    public void setEmail(String email) {
        if (email != null && !email.matches("^[\\w\\.-]+@[\\w\\.-]+\\.[a-zA-Z]{2,}$")) {
            throw new IllegalArgumentException("Email inválido");
        }
        this.email = email;
    }
}
```

### 3. ⚡ Métodos Estáticos vs. Instância
**Diferenças**: Contexto de execução e acesso a dados.

```java
public class Calculadora {
    // 📊 Atributo de classe (compartilhado)
    private static int numeroOperacoes = 0;
    
    // 📊 Atributo de instância (individual)
    private String modelo;
    private boolean ligada;
    
    // 🏗️ Construtor
    public Calculadora(String modelo) {
        this.modelo = modelo;
        this.ligada = false;
    }
    
    // ⚡ Método estático - não precisa de instância
    public static double somar(double a, double b) {
        numeroOperacoes++; // ✅ Pode acessar variáveis estáticas
        return a + b;
    }
    
    public static double subtrair(double a, double b) {
        numeroOperacoes++;
        return a - b;
    }
    
    public static double multiplicar(double a, double b) {
        numeroOperacoes++;
        return a * b;
    }
    
    public static double dividir(double a, double b) {
        if (b == 0) {
            throw new ArithmeticException("Divisão por zero não permitida");
        }
        numeroOperacoes++;
        return a / b;
    }
    
    // 🔧 Método de instância - precisa de objeto
    public void ligar() {
        this.ligada = true; // ✅ Pode acessar atributos de instância
        System.out.println("Calculadora " + modelo + " ligada");
    }
    
    public void desligar() {
        this.ligada = false;
        System.out.println("Calculadora " + modelo + " desligada");
    }
    
    public double calcularPorcentagem(double valor, double percentual) {
        if (!ligada) {
            throw new IllegalStateException("Calculadora está desligada");
        }
        numeroOperacoes++; // ✅ Pode acessar variáveis estáticas
        return (valor * percentual) / 100;
    }
    
    // 📊 Método estático para estatísticas
    public static int getNumeroOperacoes() {
        return numeroOperacoes;
    }
    
    // 📊 Método para resetar contador
    public static void resetarContador() {
        numeroOperacoes = 0;
    }
}
```

### 4. 📝 JavaDoc Profissional
**Importância**: Documentação automatizada e padrão da indústria.

```java
/**
 * Representa um usuário do sistema com informações básicas e métodos
 * para autenticação e gerenciamento de perfil.
 * 
 * <p>Esta classe implementa validações rigorosas para garantir a
 * integridade dos dados do usuário e fornece métodos seguros para
 * manipulação de senhas.</p>
 * 
 * <p><strong>Exemplo de uso:</strong></p>
 * <pre>{@code
 * Usuario usuario = new Usuario("João Silva", "joao@email.com");
 * usuario.definirSenha("minhasenha123");
 * boolean autenticado = usuario.autenticar("minhasenha123");
 * }</pre>
 * 
 * @author Seu Nome
 * @version 2.1
 * @since 1.0
 * @see ContaBancaria
 * @see ValidadorCPF
 */
public class Usuario {
    
    /**
     * Nome completo do usuário.
     * Deve conter pelo menos 2 caracteres.
     */
    private String nome;
    
    /**
     * Endereço de email único do usuário.
     * Utilizado para login e comunicações.
     */
    private String email;
    
    /**
     * Autentica o usuário com a senha fornecida.
     * 
     * <p>Este método verifica se a senha fornecida corresponde
     * à senha armazenada de forma segura usando hash.</p>
     * 
     * @param senhaFornecida a senha a ser verificada
     * @return {@code true} se a senha estiver correta, {@code false} caso contrário
     * @throws IllegalArgumentException se a senha for nula ou vazia
     * @throws IllegalStateException se o usuário não possuir senha definida
     * 
     * @since 1.0
     * @see #definirSenha(String)
     */
    public boolean autenticar(String senhaFornecida) {
        // Implementação do método...
        return false;
    }
    
    /**
     * Define uma nova senha para o usuário.
     * 
     * <p>A senha deve atender aos seguintes critérios:</p>
     * <ul>
     *   <li>Mínimo de 8 caracteres</li>
     *   <li>Pelo menos uma letra maiúscula</li>
     *   <li>Pelo menos uma letra minúscula</li>
     *   <li>Pelo menos um dígito</li>
     * </ul>
     * 
     * @param novaSenha a nova senha a ser definida
     * @throws IllegalArgumentException se a senha não atender aos critérios
     * @throws NullPointerException se a senha for nula
     * 
     * @since 1.0
     */
    public void definirSenha(String novaSenha) {
        // Implementação do método...
    }
}
```

## 🧪 Exemplos Práticos e Casos de Uso

### 🏦 Classe Modelo Completa - Sistema Bancário
```java
package edu.dio.anatomia.modelo;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

/**
 * Representa uma conta bancária com operações básicas e histórico.
 * 
 * @author DIO Bootcamp
 * @version 1.0
 */
public class ContaBancaria {
    
    // 🔢 Constantes da classe
    public static final double SALDO_MINIMO = 0.0;
    public static final double LIMITE_SAQUE_DIARIO = 1000.0;
    private static final String FORMATO_CONTA = "\\d{5}-\\d{1}";
    
    // 📊 Controle de instâncias
    private static int contadorContas = 0;
    
    // 📋 Atributos da instância
    private final String numeroConta;
    private final String titular;
    private double saldo;
    private boolean ativa;
    private final LocalDateTime dataAbertura;
    private final List<String> historicoTransacoes;
    
    // 🏗️ Construtor
    public ContaBancaria(String numeroConta, String titular, double saldoInicial) {
        // Validações
        validarNumeroConta(numeroConta);
        validarTitular(titular);
        validarSaldoInicial(saldoInicial);
        
        // Inicialização
        this.numeroConta = numeroConta;
        this.titular = titular;
        this.saldo = saldoInicial;
        this.ativa = true;
        this.dataAbertura = LocalDateTime.now();
        this.historicoTransacoes = new ArrayList<>();
        
        // Registro da abertura
        contadorContas++;
        registrarTransacao("Conta aberta com saldo inicial: R$ " + saldoInicial);
    }
    
    // 💰 Operações bancárias
    public boolean depositar(double valor) {
        if (!validarOperacao(valor)) return false;
        
        this.saldo += valor;
        registrarTransacao("Depósito: +R$ " + valor);
        return true;
    }
    
    public boolean sacar(double valor) {
        if (!validarOperacao(valor)) return false;
        
        if (valor > saldo) {
            registrarTransacao("Tentativa de saque negada: saldo insuficiente");
            return false;
        }
        
        this.saldo -= valor;
        registrarTransacao("Saque: -R$ " + valor);
        return true;
    }
    
    public boolean transferir(ContaBancaria contaDestino, double valor) {
        if (contaDestino == null) {
            throw new IllegalArgumentException("Conta destino não pode ser nula");
        }
        
        if (this.sacar(valor)) {
            if (contaDestino.depositar(valor)) {
                registrarTransacao("Transferência enviada para " + 
                                 contaDestino.getNumeroConta() + ": -R$ " + valor);
                contaDestino.registrarTransacao("Transferência recebida de " + 
                                               this.numeroConta + ": +R$ " + valor);
                return true;
            } else {
                // Reverter saque em caso de falha no depósito
                this.saldo += valor;
                registrarTransacao("Transferência cancelada: falha no depósito");
                return false;
            }
        }
        return false;
    }
    
    // 🔍 Métodos de consulta
    public double getSaldo() {
        verificarContaAtiva();
        return saldo;
    }
    
    public List<String> getHistoricoTransacoes() {
        return Collections.unmodifiableList(historicoTransacoes);
    }
    
    public String getExtrato() {
        StringBuilder extrato = new StringBuilder();
        extrato.append("=== EXTRATO BANCÁRIO ===\n");
        extrato.append("Conta: ").append(numeroConta).append("\n");
        extrato.append("Titular: ").append(titular).append("\n");
        extrato.append("Saldo Atual: R$ ").append(String.format("%.2f", saldo)).append("\n");
        extrato.append("Data Abertura: ").append(dataAbertura.toLocalDate()).append("\n\n");
        extrato.append("=== TRANSAÇÕES ===\n");
        
        for (String transacao : historicoTransacoes) {
            extrato.append(transacao).append("\n");
        }
        
        return extrato.toString();
    }
    
    // 🔒 Métodos privados (auxiliares)
    private void validarNumeroConta(String numero) {
        if (numero == null || !numero.matches(FORMATO_CONTA)) {
            throw new IllegalArgumentException("Número da conta deve estar no formato XXXXX-X");
        }
    }
    
    private void validarTitular(String titular) {
        if (titular == null || titular.trim().length() < 2) {
            throw new IllegalArgumentException("Nome do titular deve ter pelo menos 2 caracteres");
        }
    }
    
    private void validarSaldoInicial(double saldo) {
        if (saldo < SALDO_MINIMO) {
            throw new IllegalArgumentException("Saldo inicial deve ser maior ou igual a " + SALDO_MINIMO);
        }
    }
    
    private boolean validarOperacao(double valor) {
        if (valor <= 0) {
            System.err.println("Valor deve ser positivo");
            return false;
        }
        
        verificarContaAtiva();
        return true;
    }
    
    private void verificarContaAtiva() {
        if (!ativa) {
            throw new IllegalStateException("Operação não permitida: conta inativa");
        }
    }
    
    private void registrarTransacao(String descricao) {
        String transacao = LocalDateTime.now().toString() + " - " + descricao;
        historicoTransacoes.add(transacao);
    }
    
    // 📊 Métodos estáticos
    public static int getTotalContas() {
        return contadorContas;
    }
    
    // 🔧 Getters básicos
    public String getNumeroConta() { return numeroConta; }
    public String getTitular() { return titular; }
    public boolean isAtiva() { return ativa; }
    public LocalDateTime getDataAbertura() { return dataAbertura; }
    
    // ⚙️ Métodos Object
    @Override
    public String toString() {
        return String.format("ContaBancaria{conta='%s', titular='%s', saldo=%.2f, ativa=%s}", 
                           numeroConta, titular, saldo, ativa);
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        ContaBancaria that = (ContaBancaria) obj;
        return Objects.equals(numeroConta, that.numeroConta);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(numeroConta);
    }
}
```

### 🧮 Classe Utilitária - Validador de CPF
```java
package edu.dio.anatomia.util;

/**
 * Utilitário para validação de CPF brasileiro.
 * Implementa algoritmo oficial da Receita Federal.
 */
public final class ValidadorCPF {
    
    // 🚫 Construtor privado - classe utilitária não deve ser instanciada
    private ValidadorCPF() {
        throw new UnsupportedOperationException("Classe utilitária não pode ser instanciada");
    }
    
    // 📋 CPFs inválidos conhecidos
    private static final String[] CPFS_INVALIDOS = {
        "00000000000", "11111111111", "22222222222", "33333333333",
        "44444444444", "55555555555", "66666666666", "77777777777",
        "88888888888", "99999999999"
    };
    
    /**
     * Valida um CPF brasileiro.
     * 
     * @param cpf o CPF a ser validado (com ou sem formatação)
     * @return true se o CPF for válido, false caso contrário
     */
    public static boolean validar(String cpf) {
        if (cpf == null || cpf.trim().isEmpty()) {
            return false;
        }
        
        // Remove formatação
        cpf = cpf.replaceAll("[^0-9]", "");
        
        // Verifica tamanho
        if (cpf.length() != 11) {
            return false;
        }
        
        // Verifica CPFs inválidos conhecidos
        for (String cpfInvalido : CPFS_INVALIDOS) {
            if (cpf.equals(cpfInvalido)) {
                return false;
            }
        }
        
        // Calcula dígitos verificadores
        return calcularDigitoVerificador(cpf, 9) == Character.getNumericValue(cpf.charAt(9)) &&
               calcularDigitoVerificador(cpf, 10) == Character.getNumericValue(cpf.charAt(10));
    }
    
    /**
     * Formata um CPF válido.
     * 
     * @param cpf o CPF a ser formatado
     * @return CPF formatado (XXX.XXX.XXX-XX) ou null se inválido
     */
    public static String formatar(String cpf) {
        if (!validar(cpf)) {
            return null;
        }
        
        cpf = cpf.replaceAll("[^0-9]", "");
        return cpf.substring(0, 3) + "." + 
               cpf.substring(3, 6) + "." + 
               cpf.substring(6, 9) + "-" + 
               cpf.substring(9, 11);
    }
    
    private static int calcularDigitoVerificador(String cpf, int posicao) {
        int soma = 0;
        int multiplicador = posicao + 1;
        
        for (int i = 0; i < posicao; i++) {
            soma += Character.getNumericValue(cpf.charAt(i)) * multiplicador--;
        }
        
        int resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    }
}
```

### 🏃‍♂️ Classe Principal - Demonstração
```java
package edu.dio.anatomia;

import edu.dio.anatomia.modelo.ContaBancaria;
import edu.dio.anatomia.util.ValidadorCPF;

/**
 * Classe principal para demonstração dos conceitos de anatomia de classes.
 */
public class DemonstradorAnatomia {
    
    public static void main(String[] args) {
        System.out.println("🏗️ === DEMONSTRAÇÃO: ANATOMIA DAS CLASSES JAVA ===\n");
        
        // 🧪 Teste de validação de CPF
        demonstrarValidadorCPF();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // 🏦 Teste de operações bancárias
        demonstrarContaBancaria();
        
        System.out.println("\n🎯 Demonstração concluída com sucesso!");
    }
    
    private static void demonstrarValidadorCPF() {
        System.out.println("🔍 === TESTE: VALIDADOR DE CPF ===");
        
        String[] cpfsParaTeste = {
            "123.456.789-09",  // Válido
            "111.111.111-11",  // Inválido (sequência)
            "12345678909",     // Válido (sem formatação)
            "123.456.789-10",  // Inválido (dígito errado)
            null,              // Inválido (nulo)
            ""                 // Inválido (vazio)
        };
        
        for (String cpf : cpfsParaTeste) {
            boolean valido = ValidadorCPF.validar(cpf);
            String formatado = ValidadorCPF.formatar(cpf);
            
            System.out.printf("CPF: %-15s | Válido: %-5s | Formatado: %s%n", 
                            cpf, valido, formatado);
        }
    }
    
    private static void demonstrarContaBancaria() {
        System.out.println("🏦 === TESTE: CONTA BANCÁRIA ===");
        
        try {
            // Criando contas
            ContaBancaria conta1 = new ContaBancaria("12345-6", "João Silva", 1000.0);
            ContaBancaria conta2 = new ContaBancaria("65432-1", "Maria Santos", 500.0);
            
            System.out.println("✅ Contas criadas com sucesso!");
            System.out.println("📊 Total de contas: " + ContaBancaria.getTotalContas());
            
            // Operações
            System.out.println("\n💰 Realizando operações...");
            conta1.depositar(200.0);
            conta1.sacar(150.0);
            conta1.transferir(conta2, 300.0);
            
            // Exibindo extratos
            System.out.println("\n📄 EXTRATO CONTA 1:");
            System.out.println(conta1.getExtrato());
            
            System.out.println("\n📄 EXTRATO CONTA 2:");
            System.out.println(conta2.getExtrato());
            
        } catch (Exception e) {
            System.err.println("❌ Erro: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
```

## 🎓 Roadmap de Aprendizado

### 📚 Fundamentos (Atual)
- [x] ✅ **Anatomia das Classes** - Estrutura e organização
- [x] ✅ **Modificadores de Acesso** - Encapsulamento
- [x] ✅ **Construtores** - Inicialização de objetos
- [x] ✅ **Métodos** - Comportamentos e funcionalidades
- [x] ✅ **Convenções de Nomenclatura** - Padrões da comunidade

### 🔄 Próximos Módulos
- [ ] 🧬 **Herança e Polimorfismo** - Reutilização e extensibilidade
- [ ] 🎭 **Interfaces e Classes Abstratas** - Contratos e abstração
- [ ] 📦 **Collections Framework** - Estruturas de dados avançadas
- [ ] ⚠️ **Tratamento de Exceções** - Robustez e confiabilidade
- [ ] 🌊 **Streams e Programação Funcional** - Paradigmas modernos
- [ ] 🏗️ **Design Patterns** - Soluções arquiteturais

### 🚀 Projetos Práticos Sugeridos
1. **Sistema de Biblioteca** - CRUD completo com OOP
2. **Calculadora Científica** - Interfaces e herança
3. **Sistema Bancário** - Encapsulamento e validações
4. **Agenda de Contatos** - Collections e persistência
5. **API REST** - Spring Boot e arquitetura

### 📊 Métricas de Progresso

| Conceito | Compreensão | Prática | Aplicação |
|----------|-------------|---------|-----------|
| Classes e Objetos | ✅ 100% | ✅ 100% | ✅ 100% |
| Encapsulamento | ✅ 100% | ✅ 100% | ✅ 100% |
| Construtores | ✅ 100% | ✅ 95% | ✅ 90% |
| Métodos Estáticos | ✅ 100% | ✅ 90% | ✅ 85% |
| JavaDoc | ✅ 95% | ✅ 85% | ✅ 80% |

## 🛠️ Ferramentas e Tecnologias

### 🔧 Desenvolvimento
| Ferramenta | Propósito | Status |
|------------|-----------|--------|
| **IntelliJ IDEA** | IDE Principal | 🟢 Opcional |
| **VS Code** | Editor Leve | ✅ Configurado |
| **Eclipse** | IDE Alternativa | 🟡 Compatível |

### 📦 Build e Dependências
| Ferramenta | Descrição | Uso |
|------------|-----------|-----|
| **Maven** | Gerenciamento de dependências | 🔄 Próximo módulo |
| **Gradle** | Build tool alternativo | 🔄 Avançado |
| **JUnit 5** | Testes unitários | 🔄 Próximo módulo |

### 📚 Documentação
| Recurso | Link | Nível |
|---------|------|-------|
| **Oracle Java Docs** | [docs.oracle.com](https://docs.oracle.com/javase/) | 📖 Oficial |
| **Java Code Conventions** | [Oracle Guidelines](https://www.oracle.com/java/technologies/javase/codeconventions-contents.html) | 📋 Padrões |
| **Clean Code Java** | Robert C. Martin | 📚 Livro |

## 🧪 Exercícios Práticos

### 🎯 Nível Básico
1. **Classe Produto** - Criar com nome, preço e categoria
2. **Classe Funcionário** - Implementar com salário e benefícios
3. **Validador de Email** - Métodos estáticos com regex

### 🎯 Nível Intermediário
1. **Sistema de Notas** - Calcular médias e aprovação
2. **Conversor de Moedas** - Taxa de câmbio e histórico
3. **Agenda Telefônica** - CRUD com validações

### 🎯 Nível Avançado
1. **Sistema de Vendas** - Múltiplas classes interagindo
2. **Calculadora Científica** - Operações complexas
3. **Mini Framework** - Abstrações e interfaces

## 🤝 Contribuições e Comunidade

### 💡 Como Contribuir
1. **Fork** este repositório
2. **Crie** uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. **Push** para a branch (`git push origin feature/nova-funcionalidade`)
5. **Abra** um Pull Request

### 🌟 Ideias para Contribuição
- ✨ Novos exemplos práticos
- 📚 Melhorias na documentação
- 🐛 Correções de bugs
- 🎨 Melhorias de design
- 🧪 Novos exercícios

### 👥 Comunidade DIO
- 💬 [Discord DIO](https://discord.gg/dio)
- 🐦 [Twitter @DIOBootcamp](https://twitter.com/dio)
- 📧 [Newsletter DIO](https://dio.me/newsletter)

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License

Copyright (c) 2025 DIO Bootcamp

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 📖 Recursos Adicionais e Referências

### 📚 Documentação Oficial
- 🌐 **[Oracle Java SE Documentation](https://docs.oracle.com/en/java/javase/17/)** - Documentação completa Java 17 LTS
- 📋 **[Java Language Specification](https://docs.oracle.com/javase/specs/jls/se17/html/index.html)** - Especificação técnica da linguagem
- 🎯 **[Java Tutorials](https://docs.oracle.com/javase/tutorial/)** - Tutoriais oficiais Oracle
- 📖 **[OpenJDK Documentation](https://openjdk.org/groups/hotspot/)** - Documentação técnica da JVM

### � Guias de Boas Práticas
- 🎨 **[Google Java Style Guide](https://google.github.io/styleguide/javaguide.html)** - Padrões do Google
- 📐 **[Oracle Code Conventions](https://www.oracle.com/java/technologies/javase/codeconventions-contents.html)** - Convenções oficiais
- 🧹 **[Clean Code Guidelines](https://github.com/leonardolemie/clean-code-java)** - Código limpo em Java
- 🏗️ **[Effective Java (Joshua Bloch)](https://www.oreilly.com/library/view/effective-java/9780134686097/)** - Livro essencial

### 🛠️ Ferramentas de Desenvolvimento
| Ferramenta | Descrição | Link |
|------------|-----------|------|
| **IntelliJ IDEA** | IDE mais popular para Java | [jetbrains.com/idea](https://www.jetbrains.com/idea/) |
| **VS Code** | Editor leve com extensões Java | [code.visualstudio.com](https://code.visualstudio.com/) |
| **Eclipse** | IDE tradicional e gratuita | [eclipse.org](https://www.eclipse.org/) |
| **NetBeans** | IDE oficial Oracle | [netbeans.apache.org](https://netbeans.apache.org/) |

### 🎓 Cursos e Plataformas
- 🎯 **[DIO - Digital Innovation One](https://dio.me)** - Bootcamps e cursos gratuitos
- 📚 **[Oracle University](https://education.oracle.com/java)** - Certificações oficiais
- 🎬 **[Java Brains (YouTube)](https://www.youtube.com/channel/UCYt1sfh5464XaDBH0oH_o7Q)** - Tutoriais avançados
- 💻 **[Coding with John](https://www.youtube.com/channel/UCjSaB-EjsNEJ9FaMN6f6WGg)** - Conceitos práticos

### 🌐 Comunidades e Fóruns
- 💬 **[Stack Overflow](https://stackoverflow.com/questions/tagged/java)** - Perguntas e respostas
- 🗣️ **[Reddit r/learnjava](https://www.reddit.com/r/learnjava/)** - Comunidade de aprendizado
- 👥 **[Oracle Java Community](https://dev.java/)** - Comunidade oficial
- 🐦 **[Java no Twitter](https://twitter.com/java)** - Notícias e atualizações

### 📱 Apps e Recursos Mobile
- 📚 **[SoloLearn](https://www.sololearn.com/Course/Java/)** - Aprendizado interativo
- 🧩 **[Codecademy](https://www.codecademy.com/learn/learn-java)** - Exercícios práticos
- 🎮 **[Codingame](https://www.codingame.com/)** - Programação gamificada

## 📞 Suporte e Contato

### 🆘 Precisa de Ajuda?
- 💭 **Dúvidas Técnicas**: Abra uma [Issue](https://github.com/seu-repo/issues) no GitHub
- 🐛 **Bugs ou Problemas**: Reporte via [Bug Report](https://github.com/seu-repo/issues/new?template=bug_report.md)
- 💡 **Sugestões**: Use [Feature Request](https://github.com/seu-repo/issues/new?template=feature_request.md)
- 📧 **Contato Direto**: [email@exemplo.com](mailto:email@exemplo.com)

### 👨‍💻 Sobre o Autor
- 🌐 **Portfolio**: [github.com/seu-usuario](https://github.com/seu-usuario)
- 💼 **LinkedIn**: [linkedin.com/in/seu-perfil](https://linkedin.com/in/seu-perfil)
- 🐦 **Twitter**: [@seu_usuario](https://twitter.com/seu_usuario)
- 📧 **Email**: [seu.email@exemplo.com](mailto:seu.email@exemplo.com)

### 🤝 Redes Sociais do Projeto
- ⭐ **GitHub**: Dê uma estrela se este projeto foi útil!
- 🔄 **Compartilhe**: Ajude outros desenvolvedores a encontrar este conteúdo
- 📝 **Feedback**: Sua opinião é importante para melhorarmos

---

<div align="center">

### 🚀 Transformando Iniciantes em Desenvolvedores Java

![Java](https://img.shields.io/badge/Made%20with-☕%20Java-orange?style=for-the-badge)
![Love](https://img.shields.io/badge/Made%20with-❤️%20Love-red?style=for-the-badge)
![DIO](https://img.shields.io/badge/Powered%20by-DIO-blue?style=for-the-badge)

**⭐ Se este projeto foi útil, deixe uma estrela!**

**🔗 Desenvolvido como parte do Bootcamp Fullstack Java + Angular da [DIO](https://dio.me)**

*"A jornada de mil milhas começa com um único passo."* - Lao Tzu

</div>
