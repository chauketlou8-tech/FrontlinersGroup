import { useState } from "react";
import PROMO from "../../constants/promo.ts";
import cn from "../../utils/cn.ts";
import { BookOpen, Clock, Tag, Users, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useActiveLink from "../../hooks/useActiveLink.ts";

export default function PromoBanner() {
    const navigate = useNavigate();
    const { setActiveLink } = useActiveLink();

    const [dismissed, setDismissed] = useState(false);
    if (!PROMO.active || dismissed) return null;

    const isAmber = PROMO.color === "amber";

    const bgGradient = isAmber
        ? "bg-gradient-to-br from-amber-500 to-orange-600"
        : "bg-gradient-to-br from-[#1e3a5f] to-[#2563eb]";

    const ctaColor = isAmber ? "text-amber-700" : "text-[#1e3a5f]";

    const handleNavigate = (link: string) => {
        setActiveLink(link);
        navigate(`/frontlinersgroup.com/${link}`);
    }

    return (
        <section className="px-4 sm:px-6 py-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-2 mb-3">
                    <div className="h-px flex-1 bg-slate-200" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Upcoming Event
                    </span>
                    <div className="h-px flex-1 bg-slate-200" />
                </div>

                <div className={cn("relative rounded-2xl overflow-hidden shadow-xl", bgGradient)}>
                    {/* Decorative circles */}
                    <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5" />
                    <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-white/5" />
                    <div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-white/5" />

                    <div className="relative grid sm:grid-cols-[1fr_auto] gap-6 px-6 py-6 sm:px-8 sm:py-7">
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/20 text-white border border-white/25 mb-3">
                                <Tag size={10} />
                                {PROMO.type}
                            </span>

                            <h3 className="text-white font-extrabold text-2xl leading-snug mb-1">
                                {PROMO.headline}
                            </h3>
                            <p className="text-white/90 text-sm leading-relaxed mb-4 max-w-lg">
                                {PROMO.body}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {[
                                    { icon: Clock, text: PROMO.date },
                                    { icon: Clock, text: PROMO.time },
                                    { icon: Users, text: PROMO.seats },
                                    { icon: BookOpen, text: PROMO.subject },
                                ].map(({ icon: Icon, text }) => (
                                    <span key={text} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm">
                                        <Icon size={11} className="opacity-80" />
                                        {text}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3">
                            <button
                                onClick={() => handleNavigate("enrollments")}
                                className={cn(
                                    "h-11 px-7 bg-white font-bold text-sm rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95",
                                    ctaColor
                                )}
                            >
                                {PROMO.cta} →
                            </button>
                            <button
                                onClick={() => setDismissed(true)}
                                aria-label="Dismiss"
                                className="w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-all hover:rotate-90"
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