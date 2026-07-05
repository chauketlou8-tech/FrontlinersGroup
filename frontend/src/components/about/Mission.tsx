import objectives from "../../constants/objectives.ts";
import cn from "../../utils/cn.ts";

export default function Mission() {
    return (
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563eb] mb-3">
                        <span className="w-8 h-0.5 bg-[#2563eb]" />
                        Our Mission
                        <span className="w-8 h-0.5 bg-[#2563eb]" />
                    </span>
                    <h2 className="text-3xl font-extrabold text-slate-900">What drives us.</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {objectives.map(({ icon: Icon, label, color, body }) => {
                        const colorMap: Record<string, string> = {
                            blue: "bg-gradient-to-br from-[#1e3a5f] to-[#2563eb]",
                            indigo: "bg-gradient-to-br from-[#4f46e5] to-[#7c3aed]",
                            emerald: "bg-gradient-to-br from-[#059669] to-[#10b981]",
                            amber: "bg-gradient-to-br from-[#d97706] to-[#f59e0b]",
                            rose: "bg-gradient-to-br from-[#dc2626] to-[#ef4444]",
                        };

                        const borderMap: Record<string, string> = {
                            blue: "hover:border-[#2563eb]",
                            indigo: "hover:border-[#7c3aed]",
                            emerald: "hover:border-[#10b981]",
                            amber: "hover:border-[#f59e0b]",
                            rose: "hover:border-[#ef4444]",
                        };

                        return (
                            <div
                                key={label}
                                className={cn(
                                    "group bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                                    borderMap[color] || "hover:border-[#2563eb]"
                                )}
                            >
                                <div className={cn(
                                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300",
                                    colorMap[color] || "bg-gradient-to-br from-[#1e3a5f] to-[#2563eb]"
                                )}>
                                    <Icon size={22} className="text-white" />
                                </div>
                                <p className="text-xs font-bold uppercase tracking-widest text-[#2563eb] mb-2">
                                    {label}
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {body}
                                </p>
                                <div className="mt-4 w-12 h-0.5 bg-[#2563eb]/30 group-hover:w-full transition-all duration-500 rounded-full" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}