// Basic required imports
import { LitElement, html, css } from "lit-element";
import "./my-counter";

// Create a class form your component and extend the LitElement
class MyApp extends LitElement {
    static get properties() {
        return {};
    }

    constructor() {
        super();
    }

    render() {
        return html` <my-counter></my-counter> `;
    }
}

// Register yout element to sutom elements
customElements.define("my-app", MyApp);
