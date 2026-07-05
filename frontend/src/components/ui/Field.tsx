import { ChevronDown } from "lucide-react";
import cn from "../../utils/cn.ts";
import type { FieldProps } from "../../types/fieldProps.ts";

export default function Field({
                                  label,
                                  id,
                                  type = "text",
                                  placeholder,
                                  required = false,
                                  as = "input",
                                  options = [],
                                  value = "",
                                  onChange,
                                  error,
                                  rows = 4,
                                  className,
                              }: FieldProps) {
    const baseClasses = cn(
        "w-full px-4 rounded border bg-slate-50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-slate-300 focus:bg-white transition-all",
        error ? "border-red-500 ring-2 ring-red-500/20" : "border-slate-200",
        as === "textarea" ? "py-3 resize-none" : "h-11",
        className
    );

    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="text-sm font-semibold text-slate-700">
                {label}
                {required && <span className="text-[#2563EB] ml-0.5">*</span>}
            </label>

            {as === "textarea" ? (
                <textarea
                    id={id}
                    rows={rows}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={baseClasses}
                    required={required}
                />
            ) : as === "select" ? (
                <div className="relative">
                    <select
                        id={id}
                        value={value}
                        onChange={onChange}
                        className={cn(baseClasses, "appearance-none pr-10")}
                        required={required}
                    >
                        <option value="">{placeholder || "Select…"}</option>
                        {options.map(o => (
                            <option key={o} value={o}>{o}</option>
                        ))}
                    </select>
                    <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
            ) : (
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={baseClasses}
                    required={required}
                />
            )}

            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
    );
}