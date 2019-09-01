import { LitElement, html } from '../web_modules/lit-element.js'

export class AppTitle extends LitElement {
    
  static get styles() { return [window.simpleCssResult] }

  render() {
    return html`<h1 class="title">🖖 live long and prosper 🌍</h1>`
  }
}

customElements.define('app-title', AppTitle)