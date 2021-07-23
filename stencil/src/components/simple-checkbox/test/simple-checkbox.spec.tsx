import { newSpecPage } from '@stencil/core/testing';
import { SimpleCheckbox } from '../simple-checkbox';

describe('simple-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SimpleCheckbox],
      html: `<simple-checkbox></simple-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <simple-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </simple-checkbox>
    `);
  });
});
