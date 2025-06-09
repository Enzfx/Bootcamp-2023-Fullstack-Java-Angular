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
        autor.textContent ="By " + (this.getAttribute('autor') || "Anonymous");

        const titulo = document.createElement('h1');
        titulo.textContent = this.getAttribute('titulo');

        const conteudo = document.createElement('p');
        conteudo.textContent = this.getAttribute('conteudo');

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


    style () {
        const style = document.createElement('style');
        style.textContent = `
            .card {
                width: 400px;      /* ajuste para o tamanho desejado */
                height: 180px;     /* ajuste para o tamanho desejado */
                box-shadow: 10px 10px 18px -3px rgba(0,0,0,0.69);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }

            .left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
                flex: 1;
            }

            .right {
                height: 100%;
                display: flex;
                align-items: center;
            }

            .right img {
                height: 100%;
                width: auto;
                object-fit: cover;
                margin-left: 10px;
            }

            .left > span {
                font-weight: 400;
            }

            .left > h1 {
                color: #333;
                margin-top: 17px;
            }

            .left > p {
                color: #666;
                margin-top: 10px;
            }`;
        return style;
    }}




customElements.define('card-news', CardNews);
