import {css} from 'lit';

export default css`
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
