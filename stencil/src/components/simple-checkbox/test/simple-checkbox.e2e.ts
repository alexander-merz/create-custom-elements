import { newE2EPage } from '@stencil/core/testing';

describe('simple-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<simple-checkbox></simple-checkbox>');

    const element = await page.find('simple-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
