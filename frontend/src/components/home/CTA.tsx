import { ArrowRight, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useActiveLink from "../../hooks/useActiveLink.ts";

export default function CTA() {
    const navigate = useNavigate();
    const { setActiveLink } = useActiveLink();

    const handleNavigate = (link: string) => {
        setActiveLink(link);
        navigate(`/frontlinersgroup.com/${link}`);
    }

    return (
        <section className="py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-4xl mx-auto text-center">
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase border-2 bg-white text-[#1e3a5f] border-[#1e3a5f]/20 shadow-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
                    2025 Registration Open
                </span>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
                    Ready to improve your marks?
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                    Spots are limited — we keep our groups small so every learner gets the attention they need. Secure your place today.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <button
                        className="flex justify-center items-center gap-2 px-8 py-3.5 font-semibold rounded-lg text-white bg-gradient-to-r from-[#2563eb] to-[#1e3a5f] shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                        onClick={() => handleNavigate("enrollments")}
                    >
                        Enroll Now
                        <ArrowRight size={16} className="transition-all duration-300 group-hover:translate-x-1" />
                    </button>
                    <a
                        href="https://wa.me/27720000000"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-emerald-500 text-emerald-700 font-bold text-sm hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                    >
                        <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </section>
    );
}