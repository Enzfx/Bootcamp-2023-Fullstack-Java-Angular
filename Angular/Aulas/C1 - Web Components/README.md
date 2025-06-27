<div align="center">

![Web Components](https://img.shields.io/badge/Web-Components-orange?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

# 🌐 C1 - Web Components

**Explorando Web Components Nativos - A Base dos Frameworks Modernos**

</div>

## 📋 Sobre o Projeto

Este projeto faz parte da **Aula 1** do **Bootcamp Fullstack Java + Angular** da [DIO](https://dio.me), explorando os **Web Components** - uma tecnologia nativa do navegador que permite criar elementos HTML customizados e reutilizáveis.

## 🎯 Objetivos de Aprendizado

- ✅ Compreender o conceito de Web Components
- ✅ Criar elementos HTML customizados
- ✅ Implementar Shadow DOM para encapsulamento
- ✅ Usar HTML Templates e Slots
- ✅ Entender a base dos frameworks modernos
- ✅ Aplicar boas práticas de componentização

## 🧩 Tecnologias dos Web Components

### 1. **Custom Elements** 🏗️
Permite criar novos elementos HTML ou estender elementos existentes.

```javascript
class MeuComponente extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="meu-componente">
                <h2>Meu Componente Personalizado</h2>
                <p>Este é um Web Component!</p>
            </div>
        `;
    }
}

customElements.define('meu-componente', MeuComponente);
```

### 2. **Shadow DOM** 🌙
Fornece encapsulamento de estilos e DOM, evitando conflitos.

```javascript
class ComponenteComShadow extends HTMLElement {
    constructor() {
        super();
        
        // Criar Shadow DOM
        this.attachShadow({ mode: 'open' });
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 1rem;
                    border: 2px solid #333;
                }
                h2 { color: blue; }
            </style>
            <h2>Título Encapsulado</h2>
            <p>Estilos não vazam para fora!</p>
        `;
    }
}
```

### 3. **HTML Templates** 📋
Define marcação que não é renderizada até ser clonada.

```html
<template id="meu-template">
    <style>
        .card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 1rem;
            margin: 1rem 0;
        }
    </style>
    <div class="card">
        <h3><slot name="titulo">Título Padrão</slot></h3>
        <p><slot name="conteudo">Conteúdo padrão</slot></p>
    </div>
</template>
```

### 4. **HTML Imports** 📦
(Descontinuado - agora usa ES6 Modules)

## 📁 Estrutura do Projeto

```
C1 - Web Components/
├── src/
│   ├── index.html              # Página principal
│   └── componentes/            # Componentes customizados
│       ├── card-component.js   # Componente de card
│       ├── user-profile.js     # Perfil de usuário
│       └── image-gallery.js    # Galeria de imagens
├── assets/                     # Recursos estáticos
│   ├── cat.jpg                # Imagem de exemplo
│   └── Me.jpg                  # Foto de perfil
├── styles/
│   └── style.css              # Estilos globais
└── README.md                  # Documentação
```

## 🧪 Componentes Implementados

### 1. **Card Component**
```javascript
class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        const titulo = this.getAttribute('titulo') || 'Título';
        const conteudo = this.getAttribute('conteudo') || 'Conteúdo';
        const imagem = this.getAttribute('imagem') || '';
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin: 1rem 0;
                }
                .card {
                    border: 1px solid #e0e0e0;
                    border-radius: 12px;
                    padding: 1.5rem;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    transition: transform 0.2s ease;
                }
                .card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
                }
                .card-image {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 8px;
                    margin-bottom: 1rem;
                }
                .card-title {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-bottom: 0.5rem;
                    color: #333;
                }
                .card-content {
                    color: #666;
                    line-height: 1.6;
                }
            </style>
            <div class="card">
                ${imagem ? `<img src="${imagem}" alt="${titulo}" class="card-image">` : ''}
                <h3 class="card-title">${titulo}</h3>
                <p class="card-content">${conteudo}</p>
            </div>
        `;
    }
}

customElements.define('card-component', CardComponent);
```

### 2. **User Profile Component**
```javascript
class UserProfile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    static get observedAttributes() {
        return ['name', 'role', 'avatar'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }
    
    connectedCallback() {
        this.render();
    }
    
    render() {
        const name = this.getAttribute('name') || 'Nome do Usuário';
        const role = this.getAttribute('role') || 'Desenvolvedor';
        const avatar = this.getAttribute('avatar') || 'assets/Me.jpg';
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    max-width: 300px;
                    margin: 0 auto;
                }
                .profile {
                    text-align: center;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 2rem;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                }
                .avatar {
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    border: 4px solid white;
                    margin-bottom: 1rem;
                    object-fit: cover;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                }
                .name {
                    font-size: 1.8rem;
                    font-weight: bold;
                    margin-bottom: 0.5rem;
                }
                .role {
                    font-size: 1rem;
                    opacity: 0.9;
                    font-weight: 300;
                }
            </style>
            <div class="profile">
                <img src="${avatar}" alt="${name}" class="avatar">
                <div class="name">${name}</div>
                <div class="role">${role}</div>
            </div>
        `;
    }
}

customElements.define('user-profile', UserProfile);
```

### 3. **Image Gallery Component**
```javascript
class ImageGallery extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.currentIndex = 0;
        this.images = [];
    }
    
    connectedCallback() {
        this.images = this.getAttribute('images')?.split(',') || [];
        this.render();
        this.setupEventListeners();
    }
    
    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    max-width: 600px;
                    margin: 0 auto;
                }
                .gallery {
                    position: relative;
                    background: #f5f5f5;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }
                .image-container {
                    position: relative;
                    height: 400px;
                    overflow: hidden;
                }
                .gallery-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: opacity 0.3s ease;
                }
                .controls {
                    position: absolute;
                    bottom: 1rem;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 0.5rem;
                }
                .nav-btn {
                    background: rgba(255,255,255,0.8);
                    border: none;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    cursor: pointer;
                    font-size: 1.2rem;
                    transition: background 0.2s ease;
                }
                .nav-btn:hover {
                    background: white;
                }
                .indicators {
                    display: flex;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 1rem;
                }
                .indicator {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: #ddd;
                    cursor: pointer;
                    transition: background 0.2s ease;
                }
                .indicator.active {
                    background: #667eea;
                }
            </style>
            <div class="gallery">
                <div class="image-container">
                    ${this.images.map((img, index) => `
                        <img src="${img}" alt="Gallery Image ${index + 1}" 
                             class="gallery-image" 
                             style="display: ${index === 0 ? 'block' : 'none'}">
                    `).join('')}
                    <div class="controls">
                        <button class="nav-btn" id="prev">‹</button>
                        <button class="nav-btn" id="next">›</button>
                    </div>
                </div>
                <div class="indicators">
                    ${this.images.map((_, index) => `
                        <div class="indicator ${index === 0 ? 'active' : ''}" 
                             data-index="${index}"></div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    setupEventListeners() {
        const prevBtn = this.shadowRoot.getElementById('prev');
        const nextBtn = this.shadowRoot.getElementById('next');
        const indicators = this.shadowRoot.querySelectorAll('.indicator');
        
        prevBtn.addEventListener('click', () => this.previousImage());
        nextBtn.addEventListener('click', () => this.nextImage());
        
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.showImage(index));
        });
    }
    
    showImage(index) {
        const images = this.shadowRoot.querySelectorAll('.gallery-image');
        const indicators = this.shadowRoot.querySelectorAll('.indicator');
        
        images[this.currentIndex].style.display = 'none';
        indicators[this.currentIndex].classList.remove('active');
        
        this.currentIndex = index;
        
        images[this.currentIndex].style.display = 'block';
        indicators[this.currentIndex].classList.add('active');
    }
    
    nextImage() {
        const nextIndex = (this.currentIndex + 1) % this.images.length;
        this.showImage(nextIndex);
    }
    
    previousImage() {
        const prevIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.showImage(prevIndex);
    }
}

customElements.define('image-gallery', ImageGallery);
```

## 🚀 Como Executar

### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Servidor local (opcional, mas recomendado)

### Execução

1. **Abrir diretamente no navegador:**
   ```bash
   # Navegue até a pasta
   cd "Angular/Aulas/C1 - Web Components"
   
   # Abra o index.html no navegador
   open src/index.html
   ```

2. **Usando servidor local (recomendado):**
   ```bash
   # Com Python
   python -m http.server 8000
   
   # Com Node.js
   npx http-server
   
   # Com Live Server (VS Code)
   # Instalar extensão Live Server e clicar com botão direito
   ```

3. **Acesse:** `http://localhost:8000`

## 🎨 Exemplo de Uso

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Components Demo</title>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>
    <header>
        <h1>Demonstração de Web Components</h1>
    </header>
    
    <main>
        <!-- User Profile Component -->
        <user-profile 
            name="João Silva" 
            role="Frontend Developer" 
            avatar="assets/Me.jpg">
        </user-profile>
        
        <!-- Card Components -->
        <card-component 
            titulo="Meu Gato" 
            conteudo="Este é meu gato favorito! Ele é muito fofo e brincalhão." 
            imagem="assets/cat.jpg">
        </card-component>
        
        <card-component 
            titulo="Web Components" 
            conteudo="Tecnologia nativa para criar componentes reutilizáveis.">
        </card-component>
        
        <!-- Image Gallery -->
        <image-gallery 
            images="assets/cat.jpg,assets/Me.jpg">
        </image-gallery>
    </main>
    
    <!-- Scripts dos componentes -->
    <script src="componentes/card-component.js"></script>
    <script src="componentes/user-profile.js"></script>
    <script src="componentes/image-gallery.js"></script>
</body>
</html>
```

## 🔄 Ciclo de Vida dos Components

### Callbacks Principais
```javascript
class MeuComponente extends HTMLElement {
    // 1. Construtor - elemento criado
    constructor() {
        super();
        console.log('Componente criado');
    }
    
    // 2. Conectado ao DOM
    connectedCallback() {
        console.log('Componente adicionado ao DOM');
        this.render();
    }
    
    // 3. Desconectado do DOM
    disconnectedCallback() {
        console.log('Componente removido do DOM');
        this.cleanup();
    }
    
    // 4. Atributo alterado
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Atributo ${name} mudou de ${oldValue} para ${newValue}`);
        this.render();
    }
    
    // 5. Definir atributos observados
    static get observedAttributes() {
        return ['titulo', 'conteudo', 'ativo'];
    }
}
```

## ⚡ Boas Práticas

### 1. **Encapsulamento com Shadow DOM**
```javascript
// ✅ Use Shadow DOM para isolamento
this.attachShadow({ mode: 'open' });

// ✅ Defina estilos dentro do componente
this.shadowRoot.innerHTML = `
    <style>
        :host { /* Estilos do próprio elemento */ }
        .interno { /* Estilos internos */ }
    </style>
    <div class="interno">Conteúdo</div>
`;
```

### 2. **Observação de Atributos**
```javascript
// ✅ Observe apenas atributos necessários
static get observedAttributes() {
    return ['titulo', 'ativo']; // Apenas os que precisam de reatividade
}
```

### 3. **Cleanup de Recursos**
```javascript
disconnectedCallback() {
    // ✅ Limpe event listeners e timers
    this.removeEventListeners();
    clearInterval(this.timer);
}
```

## 🌟 Vantagens dos Web Components

### ✅ **Vantagens**
- **Nativo**: Funciona sem frameworks
- **Encapsulamento**: Estilos e DOM isolados
- **Reutilização**: Componentes portáveis
- **Interoperabilidade**: Funciona com qualquer framework
- **Performance**: Menor overhead

### ⚠️ **Considerações**
- Suporte em navegadores mais antigos
- Curva de aprendizado inicial
- Menos ferramentas de desenvolvimento
- Ecossistema menor comparado aos frameworks

## 📈 Próximos Passos

- [ ] Adicionar testes unitários
- [ ] Implementar slots avançados
- [ ] Criar biblioteca de componentes
- [ ] Integração com frameworks
- [ ] Acessibilidade (ARIA)

## 📖 Recursos Adicionais

- [📚 MDN Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [🌐 Web Components.org](https://www.webcomponents.org/)
- [🎥 Lit Framework](https://lit.dev/)

## 📞 Contato

- **GitHub**: [Seu GitHub](https://github.com/seu-usuario)
- **LinkedIn**: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)

---

<div align="center">
  <p>⭐ Criando componentes nativos para a web!</p>
  <p>Desenvolvido como parte do Bootcamp DIO</p>
</div>
