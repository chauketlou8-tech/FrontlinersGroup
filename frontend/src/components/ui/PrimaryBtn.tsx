import cn from "../../utils/cn.ts";
import type { ReactNode } from "react";

export default function PrimaryBtn({ children, onClick, fullWidth = false, white = false, type = "button" }: {
    children: ReactNode; onClick?: () => void; fullWidth?: boolean; white?: boolean; type?: "button" | "submit";
}) {
    return (
        <button type={type} onClick={onClick} className={cn(
            "inline-flex items-center justify-center gap-2 h-12 px-7 font-bold text-sm rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
            white
                ? "bg-white text-[#1E3A5F] hover:bg-slate-50 focus:ring-white shadow-lg"
                : "bg-[#1E3A5F] text-white hover:bg-[#162d4a] shadow-[0_4px_14px_rgba(29,78,216,0.35)] hover:shadow-[0_6px_20px_rgba(29,78,216,0.45)] focus:ring-[#2563EB]",
            fullWidth && "w-full",
        )}>
            {children}
        </button>
    );
}