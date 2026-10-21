"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function DropdownMenu({ label, href, items, active = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center gap-1"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={href}
        className={`text-sm font-medium transition-colors duration-200 ${
          active ? "text-red-600" : "text-white/80 hover:text-white"
        }`}
      >
        {label}
      </Link>

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={`Toggle ${label} menu`}
        className={`transition-colors duration-200 ${
          active ? "text-red-600" : "text-white/70 hover:text-white"
        }`}
      >
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 top-full z-50 w-[125px] -translate-x-1/2 pt-3">
          <div className="flex h-[202px] flex-col justify-center gap-4 rounded-xl bg-white/10 px-5 backdrop-blur-md">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/90 transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}