import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/** A simple checkbox */
@customElement('simple-checkbox')
export class SimpleCheckbox extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    label {
      user-select: none;
      color: blue;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
    }

    label input[type='checkbox'] {
      margin: 0;
    }

    label span {
      text-transform: capitalize;
    }
  `;

  @property() checked: boolean = false;

  onChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.checked = checkbox.checked;
    this.dispatchEvent(
      new Event('change', {
        bubbles: true,
        cancelable: false,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <label>
        <input type="checkbox" @change=${this.onChange} />
        <span>${this.checked.toString()}</span>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'simple-checkbox': SimpleCheckbox;
  }
}
