import { useState } from "react";
import PROMO from "../../constants/promo.ts";
import cn from "../../utils/cn.ts";
import { BookOpen, Clock, Tag, Users, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PromoBanner() {
    const navigate = useNavigate();
    const [dismissed, setDismissed] = useState(false);
    if (!PROMO.active || dismissed) return null;

    const isAmber = PROMO.color === "amber";

    const bg = isAmber
        ? "bg-gradient-to-br from-amber-500 to-orange-500"
        : "bg-[#1E3A5F]";

    const handleNavigate = (link: string) => {
        //setActiveLink(link);
        navigate(`/frontlinersgroup.com/${link}`);
    }

    return (
        <section className="px-4 sm:px-6 py-8">
            <div className="max-w-6xl mx-auto">
                {/* Header label */}
                <div className="flex items-center gap-2 mb-3">
                    <div className="h-px flex-1 bg-slate-200" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Upcoming Event</span>
                    <div className="h-px flex-1 bg-slate-200" />
                </div>

                <div className={cn("relative rounded overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.10)]", bg)}>
                    {/* Decorative circle */}
                    <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/5" />

                    <div className="relative grid sm:grid-cols-[1fr_auto] gap-6 px-6 py-6 sm:px-8 sm:py-7">
                        {/* Left: event info */}
                        <div>
                            {/* Type pill */}
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest bg-white/20 text-white border border-white/25 mb-3">
                <Tag size={10} />
                                {PROMO.type}
              </span>

                            <h3 className="text-white font-extrabold text-xl leading-snug mb-1">{PROMO.headline}</h3>
                            <p className="text-white/80 text-sm leading-relaxed mb-4 max-w-lg">{PROMO.body}</p>

                            {/* Detail chips */}
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { icon: Clock, text: PROMO.date },
                                    { icon: Clock, text: PROMO.time },
                                    { icon: Users, text: PROMO.seats },
                                    { icon: BookOpen, text: PROMO.subject },
                                ].map(({ icon: Icon, text }) => (
                                    <span key={text} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/15 border border-white/20 text-white text-xs font-semibold">
                    <Icon size={11} className="opacity-80" />
                                        {text}
                  </span>
                                ))}
                            </div>
                        </div>

                        {/* Right: CTA + dismiss */}
                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3">
                            <button
                                onClick={() => handleNavigate("enrollment")}
                                className="h-11 px-6 bg-white font-bold text-sm rounded-md shadow-md transition-all duration-150 hover:shadow-lg hover:scale-[1.02] active:scale-100"
                                style={{ color: isAmber ? "#B45309" : "#1E3A5F" }}
                            >
                                {PROMO.cta} →
                            </button>
                            <button
                                onClick={() => setDismissed(true)}
                                aria-label="Dismiss"
                                className="w-8 h-8 rounded-md flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-all"
                            >
                                <X size={15} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}