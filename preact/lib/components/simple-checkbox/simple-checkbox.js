import { h } from 'preact';
import { useCallback, useEffect, useState } from 'preact/hooks';
import register from 'preact-custom-element';
export const SimpleCheckbox = () => {
    const [checked, setChecked] = useState(false);
    useEffect(() => console.log(checked), [checked]);
    const toggle = useCallback(() => setChecked(!checked), [checked]);
    return (h("label", null,
        h("input", { type: "checkbox", checked: checked, onChange: toggle }),
        h("span", null, checked.toString())));
};
register(SimpleCheckbox, 'simple-checkbox', ['checked'], { shadow: true });
//# sourceMappingURL=simple-checkbox.js.map