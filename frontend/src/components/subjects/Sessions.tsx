import SectionHeading from "../ui/SectionHeading.tsx";
import cn from "../../utils/cn.ts";
import { useNavigate } from "react-router-dom";
import sessions from "../../constants/sessions.ts";
import useActiveLink from "../../hooks/useActiveLink.ts";

export default function Sessions() {
    const navigate = useNavigate();
    const { setActiveLink } = useActiveLink();

    const handleNavigate = (link: string) => {
        setActiveLink(link);
        navigate(`/frontlinersgroup.com/${link}`);
    }

    return (
        <section className="py-20 px-4 sm:px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    eyebrow="Session Options"
                    title="Choose what works for you."
                    subtitle="Flexible plans designed to fit your schedule and learning needs."
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {sessions.map(({ label, price, desc, icon: Icon, highlight }) => (
                        <div
                            key={label}
                            className={cn(
                                "relative rounded-2xl p-8 border-2 transition-all duration-300",
                                highlight
                                    ? "bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] border-[#1e3a5f] shadow-2xl hover:shadow-3xl hover:-translate-y-1"
                                    : "bg-white border-slate-200 shadow-sm hover:shadow-xl hover:border-[#2563eb]/30 hover:-translate-y-1"
                            )}
                        >
                            {highlight && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#2563eb] to-[#1e3a5f] text-white text-[10px] font-bold px-5 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                    Most Popular
                                </span>
                            )}

                            <div className={cn(
                                "w-14 h-14 rounded-2xl flex items-center justify-center mb-5",
                                highlight ? "bg-white/20" : "bg-gradient-to-br from-[#1e3a5f]/10 to-[#2563eb]/10"
                            )}>
                                <Icon size={22} className={highlight ? "text-white" : "text-[#1e3a5f]"} />
                            </div>

                            <h3 className={cn(
                                "font-extrabold text-xl mb-1",
                                highlight ? "text-white" : "text-slate-900"
                            )}>
                                {label}
                            </h3>

                            <p className={cn(
                                "text-3xl font-extrabold mb-3",
                                highlight ? "text-white" : "text-[#1e3a5f]"
                            )}>
                                {price}
                                <span className="text-sm font-normal opacity-70"> /month</span>
                            </p>

                            <p className={cn(
                                "text-sm leading-relaxed mb-6",
                                highlight ? "text-slate-200" : "text-slate-500"
                            )}>
                                {desc}
                            </p>

                            <button
                                onClick={() => handleNavigate("enrollments")}
                                className={cn(
                                    "w-full h-12 rounded-xl font-bold text-sm transition-all duration-300",
                                    highlight
                                        ? "bg-white text-[#1e3a5f] hover:bg-slate-100 hover:shadow-lg hover:scale-105"
                                        : "bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] text-white hover:shadow-lg hover:scale-105"
                                )}
                            >
                                Enroll Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}