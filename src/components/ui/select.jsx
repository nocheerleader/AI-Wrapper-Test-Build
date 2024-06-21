import React from 'react';

export const Select = ({ children, onValueChange, className, defaultValue = "" }) => (
  <select
    onChange={(e) => onValueChange(e.target.value)}
    className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline ${className}`}
    defaultValue={defaultValue}
  >
    {children}
  </select>
);

export const SelectTrigger = ({ children, className }) => (
  <div className={`relative ${className}`}>
    {children}
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
      <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </div>
  </div>
);

export const SelectContent = ({ children }) => <>{children}</>;

export const SelectItem = ({ value, children }) => (
  <option value={value} className="bg-white hover:bg-gray-100">
    {children}
  </option>
);

export const SelectValue = ({ placeholder }) => (
  <option value="" disabled hidden>
    {placeholder}
  </option>
);