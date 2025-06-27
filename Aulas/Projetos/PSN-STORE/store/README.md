# PSN Store Clone 🎮

Uma aplicação web que replica a interface da PlayStation Store, desenvolvida com Angular 20 como projeto educacional do bootcamp Fullstack Java+Angular da DIO (Digital Innovation One).

![Angular](https://img.shields.io/badge/Angular-20.0.0-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue?style=for-the-badge&logo=typescript)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Execução](#instalação-e-execução)
- [Componentes](#componentes)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🎯 Sobre o Projeto

O PSN Store Clone é uma recriação da interface da PlayStation Store, focada em demonstrar conceitos fundamentais do Angular como:

- Componentes reutilizáveis
- Data binding
- Roteamento
- Arquitetura modular
- Boas práticas de desenvolvimento front-end

Este projeto faz parte do bootcamp **Fullstack Java+Angular** da **DIO (Digital Innovation One)** e tem como objetivo consolidar os conhecimentos em Angular através de um projeto prático e visual.

## ✨ Funcionalidades

- 🏠 **Página Home**: Exibição de cards de jogos em destaque
- 🎮 **Cards de Jogos**: Componentes interativos com informações dos games
- 🏷️ **Labels**: Sistema de categorização (EXCLUSIVE, etc.)
- 💰 **Preços**: Exibição de preços e tipo de plataforma
- 🧭 **Menu de Navegação**: Header fixo com links de navegação
- 📱 **Design Responsivo**: Interface adaptável para diferentes telas

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Angular 20.0.0** - Framework principal
- **TypeScript 5.8.2** - Linguagem de programação
- **CSS3** - Estilização
- **HTML5** - Estrutura

### Ferramentas de Desenvolvimento
- **Angular CLI 20.0.3** - Interface de linha de comando
- **Karma** - Test runner
- **Jasmine** - Framework de testes
- **RxJS** - Programação reativa

## 📁 Estrutura do Projeto

```
store/
├── public/                     # Arquivos estáticos
│   ├── ac-cover.jpg           # Imagens dos jogos
│   ├── bt-*.jpg               # Capas dos jogos Battlefield
│   ├── ps-logo.png            # Logo da PlayStation
│   └── favicon.ico            # Ícone da aplicação
├── src/
│   ├── app/
│   │   ├── components/        # Componentes reutilizáveis
│   │   │   ├── card/          # Componente principal de card
│   │   │   │   ├── card-label/      # Sub-componente de label
│   │   │   │   └── card-pricing/    # Sub-componente de preço
│   │   │   └── menu/          # Componente de navegação
│   │   ├── pages/             # Páginas da aplicação
│   │   │   └── home/          # Página inicial
│   │   ├── app.config.ts      # Configurações globais
│   │   ├── app.routes.ts      # Definição de rotas
│   │   └── app.ts             # Componente raiz
│   ├── index.html             # HTML principal
│   ├── main.ts                # Ponto de entrada
│   └── styles.css             # Estilos globais
├── angular.json               # Configuração do Angular
├── package.json               # Dependências do projeto
└── README.md                  # Documentação
```

## 🚀 Instalação e Execução

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **Angular CLI** (versão 20 ou superior)

### Passos para Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd store
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute a aplicação**
```bash
npm start
# ou
ng serve
```

4. **Acesse a aplicação**
```
http://localhost:4200
```

## 🧩 Componentes

### Card Component
Componente principal para exibição de jogos.

**Propriedades de Input:**
- `gameCover`: String - URL da imagem de capa
- `gameLabel`: String - Label do jogo (ex: "EXCLUSIVE")
- `gamePrice`: String - Preço do jogo
- `gameType`: String - Tipo/plataforma (ex: "DIGITAL | PS4")

**Exemplo de uso:**
```html
<app-card 
  gameLabel="EXCLUSIVE" 
  gameCover="bt-5.jpg" 
  gamePrice="R$200,00" 
  gameType="DIGITAL | PS4">
</app-card>
```

### Card Label Component
Sub-componente para exibição de labels/categorias.

### Card Pricing Component
Sub-componente para exibição de preços e tipos de plataforma.

### Menu Component
Componente de navegação fixo no topo da página.

**Funcionalidades:**
- Logo da PlayStation
- Links de navegação (Home, Games, Deals, News, Support)
- Efeitos hover
- Posicionamento fixo

## 📜 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run watch` - Compila com modo watch ativo
- `npm test` - Executa os testes unitários
- `ng serve` - Inicia o servidor de desenvolvimento
- `ng build` - Compila o projeto
- `ng test` - Executa testes

## 🎨 Recursos Visuais

### Paleta de Cores
- **Background**: #fff (branco)
- **Texto Principal**: #000 (preto)
- **Hover/Destaque**: #007bff (azul)
- **Sombras**: rgba(0, 0, 0, 0.5)

### Tipografia
- **Fonte Principal**: 'Segoe UI', sans-serif

### Layout
- **Design**: Flexbox
- **Responsividade**: Adaptável
- **Header**: Fixo com z-index 999

## 🤝 Contribuição

Este é um projeto educacional, mas contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é apenas para fins educacionais como parte do bootcamp da DIO.

## 👨‍💻 Desenvolvedor

Projeto desenvolvido durante o bootcamp **Fullstack Java+Angular** da **[DIO - Digital Innovation One](https://dio.me/)**.

---

⭐ **Se este projeto foi útil para você, não esqueça de dar uma estrela!**