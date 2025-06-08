class TituloDinamico extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    // Criar a base do componente
    const componenteRoot = document.createElement('h1');
    componenteRoot.textContent = this.getAttribute('titulo');

    // Estilizar o componente
    const style = document.createElement('style');
    style.textContent = `
      h1 {
      color: red;
      }`

    // Enviar para o shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(componenteRoot);
    }
}
customElements.define('titulo-dinamico', TituloDinamico);