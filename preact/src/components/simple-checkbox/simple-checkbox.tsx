import { FunctionalComponent, h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import register from 'preact-custom-element';

interface SimpleCheckboxProps {
  checked: boolean;
}

export const SimpleCheckbox: FunctionalComponent<SimpleCheckboxProps> = ({
  checked: initialChecked = false,
}: SimpleCheckboxProps) => {
  const [checked, setChecked] = useState(Boolean(initialChecked));

  const toggle = useCallback(() => setChecked(!checked), [checked]);

  return (
    <label>
      <input type="checkbox" checked={checked} onChange={toggle} />
      <span>{checked.toString()}</span>
    </label>
  );
};

register(SimpleCheckbox, 'simple-checkbox', ['checked'], { shadow: true });
