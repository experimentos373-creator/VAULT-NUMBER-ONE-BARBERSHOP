import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function CustomDropdown({ label, value, options, onChange, icon, minimal }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between gap-2.5 w-full outline-none cursor-pointer transition-all select-none text-left text-xs font-bold text-neutral-700 ${
          minimal 
            ? "bg-transparent border-none rounded-none px-1.5 py-2 hover:text-neutral-950" 
            : "px-4 py-3 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300"
        }`}
      >
        <div className="flex items-center gap-2.5 truncate">
          {icon && <div className="text-primary-dark shrink-0">{icon}</div>}
          <span className="truncate">{value || label}</span>
        </div>
        <ChevronDown 
          className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-300 shrink-0 ${
            isOpen ? "rotate-180 text-primary-dark" : ""
          }`} 
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full min-w-[160px] bg-white border border-neutral-100 rounded-xl p-1.5 shadow-xl z-40 animate-menu-fade max-h-[220px] overflow-y-auto">
          {/* Default Option to Reset */}
          <button
            type="button"
            onClick={() => {
              onChange("");
              setIsOpen(false);
            }}
            className={`w-full px-3.5 py-2.5 rounded-lg text-left text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              !value 
                ? "bg-primary/15 text-primary-dark font-extrabold" 
                : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
            }`}
          >
            {label}
          </button>
          
          {options.map((opt) => {
            const isSelected = value === opt;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
                className={`w-full px-3.5 py-2.5 rounded-lg text-left text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  isSelected 
                    ? "bg-primary/15 text-primary-dark font-extrabold" 
                    : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
