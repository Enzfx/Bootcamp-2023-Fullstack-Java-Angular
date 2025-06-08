class CardNews extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });    
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build () {
        const componenteRoot = document.createElement('div');
        componenteRoot.setAttribute('class', 'card');

        const left = document.createElement('div');
        left.setAttribute('class', 'left');

        const autor = document.createElement('span');
        const titulo = document.createElement('h1');
        const conteudo = document.createElement('p');

        left.appendChild(autor)
        left.appendChild(titulo);
        left.appendChild(conteudo);

        const right = document.createElement('div');
        right.setAttribute('class', 'right');
        const Imagem = document.createElement('img');
        Imagem.setAttribute('src', this.getAttribute('imagem'));
        right.appendChild(Imagem);

        componenteRoot.appendChild(left);
        componenteRoot.appendChild(right);
        
        return componenteRoot;
    }


    style () {}
}


customElements.define('card-news', CardNews);
