"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Select({ label, options, placeholder, required, name }) {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-semibold text-slate-900">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          name={name}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>
    </div>
  );
}