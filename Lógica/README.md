<div align="center">

![Lógica](https://img.shields.io/badge/Lógica-Programming-blue?style=for-the-badge)
![Multi Language](https://img.shields.io/badge/Multi-Language-green?style=for-the-badge)

# 🧠 Lógica de Programação

**Exercícios e Desafios em Múltiplas Linguagens**

</div>

## 📋 Sobre

Esta seção contém exercícios de **lógica de programação** resolvidos em diferentes linguagens, desenvolvidos durante o **Bootcamp Fullstack Java + Angular** da [DIO](https://dio.me). O objetivo é fortalecer o raciocínio lógico e a capacidade de resolução de problemas.

## 🎯 Objetivos

- 🧩 Desenvolver raciocínio lógico
- 💡 Praticar algoritmos fundamentais
- 🔄 Comparar sintaxes entre linguagens
- 📊 Trabalhar com estruturas de dados
- 🎲 Resolver problemas computacionais

## 🗂️ Estrutura dos Exercícios

```
Lógica/
├── 🟨 Javascript/          # Desafios em JavaScript
│   ├── desafio-01.js      # Primeiro desafio
│   ├── desafio-02.js      # Segundo desafio
│   ├── desafio-03.js      # Terceiro desafio
│   ├── desafio-04.js      # Quarto desafio
│   └── desafio-o5.js      # Quinto desafio
├── ☕ Java/               # Exercícios em Java
│   └── main.java          # Algoritmos Java
├── 🟦 C#/                 # Soluções em C#
│   └── main.cs            # Algoritmos C#
└── 🐍 Python/             # Implementações em Python
    └── main.py            # Algoritmos Python
```

## 💻 Linguagens Utilizadas

### 🟨 JavaScript
- **Características**: Interpretada, dinâmica, multiparadigma
- **Foco**: Manipulação de dados, algoritmos web
- **Ambiente**: Node.js / Browser

### ☕ Java
- **Características**: Compilada, orientada a objetos, tipada
- **Foco**: Estruturas de dados, POO, performance
- **Ambiente**: JVM (Java Virtual Machine)

### 🟦 C#
- **Características**: Compilada, .NET Framework, tipada
- **Foco**: Sintaxe similar ao Java, ecossistema Microsoft
- **Ambiente**: .NET Runtime

### 🐍 Python
- **Características**: Interpretada, sintaxe simples, versátil
- **Foco**: Legibilidade, prototipagem rápida
- **Ambiente**: CPython

## 🎲 Tipos de Desafios

### 1. **Algoritmos Básicos**
- Sequências e loops
- Condicionais
- Manipulação de strings
- Cálculos matemáticos

### 2. **Estruturas de Dados**
- Arrays e listas
- Matrizes
- Objetos e registros
- Pilhas e filas

### 3. **Problemas Lógicos**
- Ordenação
- Busca
- Validação de dados
- Transformação de dados

### 4. **Desafios Matemáticos**
- Sequência de Fibonacci
- Números primos
- Fatorial
- Conversões numéricas

## 🚀 Como Executar

### JavaScript
```bash
# Navegar até a pasta
cd Lógica/Javascript

# Executar com Node.js
node desafio-01.js

# Ou abrir no navegador
# Incluir em uma página HTML
```

### Java
```bash
# Navegar até a pasta
cd Lógica/Java

# Compilar
javac main.java

# Executar
java Main
```

### C#
```bash
# Navegar até a pasta
cd Lógica/C#

# Compilar e executar
dotnet run main.cs

# Ou usando compilador direto
csc main.cs
main.exe
```

### Python
```bash
# Navegar até a pasta
cd Lógica/python

# Executar
python main.py

# Ou Python 3
python3 main.py
```

## 📚 Exemplo de Comparação

### Problema: Calcular Fatorial

#### JavaScript
```javascript
function fatorial(n) {
    if (n <= 1) return 1;
    return n * fatorial(n - 1);
}

console.log(fatorial(5)); // 120
```

#### Java
```java
public class Main {
    public static int fatorial(int n) {
        if (n <= 1) return 1;
        return n * fatorial(n - 1);
    }
    
    public static void main(String[] args) {
        System.out.println(fatorial(5)); // 120
    }
}
```

#### C#
```csharp
using System;

class Program {
    static int Fatorial(int n) {
        if (n <= 1) return 1;
        return n * Fatorial(n - 1);
    }
    
    static void Main() {
        Console.WriteLine(Fatorial(5)); // 120
    }
}
```

#### Python
```python
def fatorial(n):
    if n <= 1:
        return 1
    return n * fatorial(n - 1)

print(fatorial(5))  # 120
```

## 🧩 Desafios Implementados

### JavaScript
1. **Desafio 01**: Manipulação de arrays
2. **Desafio 02**: Validação de dados
3. **Desafio 03**: Algoritmos de ordenação
4. **Desafio 04**: Problemas matemáticos
5. **Desafio 05**: Estruturas condicionais

### Outras Linguagens
- Implementações dos mesmos algoritmos
- Comparação de performance
- Diferentes abordagens de solução

## 📊 Complexidade Algorítmica

### Análise de Performance
- **O(1)**: Acesso direto, operações constantes
- **O(n)**: Busca linear, iteração simples
- **O(n²)**: Algoritmos de ordenação básicos
- **O(log n)**: Busca binária, árvores

### Otimização
- Escolha da estrutura de dados adequada
- Minimização de loops aninhados
- Uso eficiente de memória
- Reutilização de cálculos

## 🎓 Conceitos Aprendidos

### Fundamentos
- ✅ Variáveis e tipos de dados
- ✅ Operadores e expressões
- ✅ Estruturas condicionais
- ✅ Loops e iteração

### Intermediário
- ✅ Funções e procedimentos
- ✅ Arrays e coleções
- ✅ Algoritmos de busca
- ✅ Algoritmos de ordenação

### Avançado
- ✅ Recursão
- ✅ Estruturas de dados complexas
- ✅ Otimização de algoritmos
- ✅ Análise de complexidade

## 🔧 Ferramentas Utilizadas

### IDEs e Editores
- **VS Code**: Editor principal
- **IntelliJ IDEA**: Para Java
- **Visual Studio**: Para C#
- **PyCharm**: Para Python

### Ambientes de Execução
- **Node.js**: JavaScript runtime
- **JDK**: Java Development Kit
- **.NET SDK**: C# runtime
- **Python**: Interpretador Python

## 📈 Próximos Passos

- [ ] Algoritmos de grafos
- [ ] Programação dinâmica
- [ ] Estruturas de dados avançadas
- [ ] Algoritmos de machine learning
- [ ] Desafios de programação competitiva

## 📖 Recursos de Estudo

### Livros Recomendados
- 📚 "Algoritmos: Teoria e Prática" - Cormen
- 📚 "Clean Code" - Robert Martin
- 📚 "Structure and Interpretation of Computer Programs"

### Plataformas Online
- 🌐 [LeetCode](https://leetcode.com)
- 🌐 [HackerRank](https://hackerrank.com)
- 🌐 [CodeWars](https://codewars.com)
- 🌐 [URI Online Judge](https://urionlinejudge.com.br)

## 📞 Contato

- **GitHub**: [Seu GitHub](https://github.com/seu-usuario)
- **LinkedIn**: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)

---

<div align="center">
  <p>⭐ Exercitando a mente através da programação!</p>
  <p>Desenvolvido como parte do Bootcamp DIO</p>
</div>
