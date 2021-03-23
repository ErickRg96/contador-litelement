// Basic required imports
import { LitElement, html, css } from "lit-element";

// Create a class form your component and extend the LitElement
class MyCounter extends LitElement {
    static get properties() {
        return {
            count: { type: Number },
        };
    }

    constructor() {
        super();
        this.count = 0;
    }

    render() {
        return html`
            <div>
                <h1>${this.count}</h1>
                <button @click=${this._onIncrement}>Increment</button>
                <button @click=${() => (this.count -= 1)}>Decrement</button>
            </div>
        `;
    }

    _onIncrement() {
        this.count += 1;
    }
}

// Register yout element to sutom elements
customElements.define("my-counter", MyCounter);
