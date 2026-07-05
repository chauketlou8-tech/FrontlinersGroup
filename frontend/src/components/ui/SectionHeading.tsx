import cn from "../../utils/cn.ts";

export default function SectionHeading({ eyebrow, title, subtitle, light = false }: { eyebrow: string; title: string; subtitle?: string; light?: boolean }) {
    return (
        <div className="text-center mb-12">
      <span className={cn("inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md text-xs font-bold tracking-widest uppercase border mb-4", light ? "bg-white/15 text-white border-white/25" : "bg-slate-50 text-[#1E3A5F] border-slate-200")}>
        <span className={cn("w-1.5 h-1.5 rounded-full", light ? "bg-slate-200" : "bg-[#2563EB]")} />
          {eyebrow}
      </span>
            <h2 className={cn("text-3xl sm:text-4xl font-extrabold tracking-tight", light ? "text-white" : "text-slate-900")}>{title}</h2>
            {subtitle && <p className={cn("mt-3 max-w-xl mx-auto text-base leading-relaxed", light ? "text-slate-200" : "text-slate-500")}>{subtitle}</p>}
        </div>
    );
}