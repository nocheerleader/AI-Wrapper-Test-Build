export const Switch = ({ id, checked, onCheckedChange }) => (
  <input type="checkbox" id={id} checked={checked} onChange={() => onCheckedChange(!checked)} />
);