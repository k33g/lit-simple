import { LitElement, html } from '../web_modules/lit-element.js'
import {} from './AppTitle.js'
import {} from './AppSubtitle.js'

export class MainApplication extends LitElement {

  static get styles() { return [window.simpleCssResult] }
  
  render() {
    return html`
      <div class="container">
        <div>
          <app-title></app-title>
          <app-subtitle></app-subtitle>
        </div>
      </div>
    `
  }
}

customElements.define('main-application', MainApplication)