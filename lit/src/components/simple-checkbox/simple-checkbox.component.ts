import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import styles from './simple-checkbox.styles';

/** A simple checkbox */
@customElement('simple-checkbox')
export class SimpleCheckbox extends LitElement {
  static styles = styles;

  @property() checked = false;

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
