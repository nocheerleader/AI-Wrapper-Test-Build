export const Select = ({ children, onValueChange }) => <select onChange={(e) => onValueChange(e.target.value)}>{children}</select>;
export const SelectContent = ({ children }) => <>{children}</>;
export const SelectItem = ({ value, children }) => <option value={value}>{children}</option>;
export const SelectTrigger = ({ children }) => <>{children}</>;
export const SelectValue = ({ placeholder }) => <option value="">{placeholder}</option>;