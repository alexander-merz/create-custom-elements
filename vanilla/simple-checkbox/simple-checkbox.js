/*

    Takeaways

    (+) The most lightweight solution lol
    (+) No build steps
    (+) Can run directly in the web browser

    (-) Low level api and even lower developer experience
    (-) Can not inherit from a subclass of HTMLElement (e.g. HTMLInputElement)
    (-) Thus, crucial attributes are undefined (e.g. checked)
    (-) It's annoying to write and integrate markup and styling
    (-) Adding a event listener has to be done programmatically
    (-) Style import paths are relative of the index html file (fixable?)

*/

class SimpleCheckbox extends HTMLElement {
  get checked() {
    return this.hasAttribute('checked');
  }

  set checked(value) {
    if (value) {
      this.setAttribute('checked', value);
    } else {
      this.removeAttribute('checked');
    }
  }

  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.initEventListener();
    this.onChange();
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
            <span><slot>${this.checked}</slot></span>
        </label>
    `;
    this.root.appendChild(template.content.cloneNode(true));
    this.input = this.root.querySelector('input[type="checkbox"]');
    this.label = this.root.querySelector('label span');
  }

  initEventListener() {
    this.input.addEventListener('change', this.onChange.bind(this));
  }

  onChange() {
    this.checked = this.input.checked;
    this.label.textContent = this.checked;
    this.dispatchEvent(new Event('change'));
  }

  destoryEventListener() {
    const checkbox = this.root.querySelector('input[type="checkbox"]');
    checkbox.removeEventListener('change', this.onChange);
  }
}

customElements.define('simple-checkbox', SimpleCheckbox);
