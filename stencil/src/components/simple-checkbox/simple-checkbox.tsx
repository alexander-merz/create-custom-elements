import { Component, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'simple-checkbox',
  styleUrl: 'simple-checkbox.css',
  shadow: true,
})
export class SimpleCheckbox {
  @Prop({ reflect: true, mutable: true }) checked: boolean;
  @State() isChecked: boolean; // State triggers rerender
  @Event() change: EventEmitter<boolean>; // mirror native onchange event

  componentWillLoad(): void {
    this.setChecked(this.checked);
  }

  @Watch('checked')
  watchChecked(checked: boolean): void {
    this.isChecked = checked; // do not call setChecked
  }

  onChange(): void {
    this.toggle().then(this.change.emit);
  }

  @Method()
  async toggle(): Promise<boolean> {
    this.setChecked(!this.isChecked);
    return this.checked;
  }

  setChecked(value: boolean): void {
    this.checked = this.isChecked = value;
  }

  render() {
    return (
      <label>
        <input type="checkbox" checked={this.isChecked} onChange={this.onChange.bind(this)} />
        <span>{this.isChecked.toString()}</span>
      </label>
    );
  }
}
