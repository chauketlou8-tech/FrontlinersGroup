import type { ReactNode } from "react";

export default function GhostBtn({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
    return (
        <button onClick={onClick} className="inline-flex items-center justify-center gap-2 h-12 px-7 font-bold text-sm rounded border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-slate-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2">
            {children}
        </button>
    );
}