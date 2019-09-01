import { LitElement, html } from '../web_modules/lit-element.js'

export class AppSubtitle extends LitElement {
    
  static get styles() { return [window.simpleCssResult] }

  render() {
    return html`<h2 class="subtitle">made with 🧡 and 🍵</h2>`
  }
}

customElements.define('app-subtitle', AppSubtitle)



