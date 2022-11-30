export class WCTitle extends HTMLElement {
  public static observedAttributes = ['title'];

  connectedCallback() {
    console.log('Appended and connected to document')
  }

  disconnectedCallback() {
    console.log('Disconnected from document')
  }

  attributeChangedCallback(name: string, old: string, value: string) {
    this.innerHTML = `<h1>Heading Title ${this.title}!</h1>`;
  }
}

customElements.define('wc-title', WCTitle);
