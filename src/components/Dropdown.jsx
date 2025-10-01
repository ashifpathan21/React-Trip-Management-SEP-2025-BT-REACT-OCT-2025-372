import React from "react";
import { AlertCircle, ChevronDown } from "lucide-react";



const Dropdown = ({
  id,
  label,
  options = [],
  value,
  onChange,
  error,
  required = false,
  className = "",
  placeholder = "Select an option",
  ...props
}) => {
  const cn = (...classes) => classes.filter(Boolean).join(" ");

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700 block">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          className={cn(
            "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors outline-none appearance-none",
            error ? "border-red-300 bg-red-50" : "border-gray-300 bg-white",
            className
          )}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>

      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
};

export default Dropdown;
