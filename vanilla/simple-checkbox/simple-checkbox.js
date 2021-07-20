/*

    Takeaways

    (+) The most lightweight solution lol

    (-) Low level api and even lower developer experience
    (-) Can not inherit from a subclass of HTMLElement (e.g. HTMLInputElement)
    (-) Thus, crucial attributes are undefined (e.g. checked)
    (-) It's annoying to write and integrate markup and styling
    (-) Adding a event listener has to be done programmatically
    (-) Style import paths are relative of the index html file (fixable?)

*/

class SimpleCheckbox extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.initEventListener();
  }

  disconnectedCallback() {
    this.destoryEventListener();
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `
        <style>@import "./simple-checkbox/simple-checkbox.css"</style>
        <label style="user-select: none">
            <input type="checkbox">
            <span><slot>Check, mate</slot></span>
        </label>
    `;
    this.root.appendChild(template.content.cloneNode(true));
  }

  initEventListener() {
    const checkbox = this.root.querySelector('input[type="checkbox"]');
    const labelSpan = this.root.querySelector('label span');

    checkbox.addEventListener('change', () => {
      labelSpan.textContent = checkbox.checked;
    });
  }

  destoryEventListener() {
    const checkbox = this.root.querySelector('input[type="checkbox"]');
    checkbox.removeEventListener('change');
  }
}

customElements.define('simple-checkbox', SimpleCheckbox);
