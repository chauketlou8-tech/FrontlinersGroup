import { ArrowRight } from "lucide-react";
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
        <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] text-white text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-2xl" />

            <div className="relative max-w-2xl mx-auto">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-200 border border-white/20 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-5">
                    Join Our Community
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
                    Come learn with us.
                </h2>
                <p className="text-blue-100 text-base mb-8 max-w-lg mx-auto leading-relaxed">
                    Sessions available weekday afternoons and Saturdays. Limited group sizes — secure your spot today.
                </p>
                <button
                    onClick={() => handleNavigate("enrollments")}
                    className="inline-flex items-center gap-2 px-8 py-3.5 font-bold rounded-lg bg-white text-[#1e3a5f] shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                    Enroll Now
                    <ArrowRight size={16} className="transition-all duration-300 group-hover:translate-x-1" />
                </button>
            </div>
        </section>
    );
}