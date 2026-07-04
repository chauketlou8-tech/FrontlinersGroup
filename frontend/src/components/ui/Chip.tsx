import cn from "../../utils/cn.ts"
import type { ReactNode } from "react";

export default function Chip({ children, color = "blue" }: { children: ReactNode; color?: "blue" | "indigo" | "green" }) {
    const map = { blue: "bg-slate-50 text-[#1E3A5F] border-slate-200", indigo: "bg-slate-50 text-[#1E3A5F] border-slate-200", green: "bg-emerald-50 text-emerald-700 border-emerald-200" };
    return <span className={cn("inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold border", map[color])}>{children}</span>;
}