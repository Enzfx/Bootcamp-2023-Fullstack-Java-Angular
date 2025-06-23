<div align="center">
  <a href="">
    <img src="public/estrela.png" alt="Logo do Projeto" width="150px"/>
  </a>
</div>

# 🚀 Angular Blog

## 🌍 Sobre o Projeto

O **Angular Blog** é um projeto de blog pessoal desenvolvido em Angular, com foco em componentização, responsividade e navegação dinâmica. Ele permite a publicação de artigos, notícias ou portfólio, sendo ideal para quem deseja praticar ou demonstrar habilidades com Angular.

---

## 🔧 Funcionalidades

- **Página Inicial:** Exibe um card principal em destaque e outros artigos em formato de lista.
- **Navegação Dinâmica:** Clique em qualquer card para acessar o conteúdo completo do artigo.
- **Menu Responsivo:** Barra de navegação lateral adaptável para dispositivos móveis, com links para redes sociais.
- **Componentização:** Estrutura baseada em componentes reutilizáveis para fácil manutenção e expansão.
- **Estilização Responsiva:** Layout adaptado para diferentes tamanhos de tela.
- **Dados Simulados:** Os artigos são carregados a partir de um arquivo de dados fake, facilitando testes e desenvolvimento.

---

## 👀 Demonstração

![Demonstração do Blog](https://i.imgur.com/z3KjMjL.jpeg)

---

## 📁 Estrutura de Pastas

```
pages/
  home/
  content/
```

---

## 📃 Documentação dos Componentes

- [`MenuBarComponent`](src/app/components/menu-bar/menu-bar.ts): Barra de navegação com links para redes sociais e menu responsivo.
- [`BigCard`](src/app/components/big-card/big-card.ts): Card principal em destaque na home.
- [`SmallCard`](src/app/components/small-card/small-card.ts): Cards menores para outros artigos.
- [`MenuTitle`](src/app/components/menu-title/menu-title.ts): Título de apresentação na página inicial.
- [`Home`](src/app/pages/home/home.ts): Página inicial que organiza os cards.
- [`Content`](src/app/pages/content/content.ts): Página de exibição do conteúdo completo do artigo selecionado.

---

## 💡 Como Executar o Projeto

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/angular-blog.git
   cd angular-blog
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```sh
   npm start
   ```

O projeto estará disponível em http://localhost:4200/.

---

## 🛠️ Como Adicionar Novos Artigos

Edite o arquivo dataFake.ts e adicione um novo objeto ao array:

```ts
{
  "id": "3",
  "title": "Novo Artigo",
  "description": "Descrição do artigo...",
  "photoCover": "URL_da_imagem"
}
```

---

## 👨‍💻 Tecnologias Utilizadas

* Angular 20+
* TypeScript
* HTML5 & CSS3

---

## 🌐 Visualização Online

Você pode visualizar a página do projeto acessando:  
[https://enzfx.github.io/Bootcamp-2023-Fullstack-Java-Angular/](https://enzfx.github.io/Bootcamp-2023-Fullstack-Java-Angular/)

---

> Projeto desenvolvido para fins de estudo e portfólio pessoal.




