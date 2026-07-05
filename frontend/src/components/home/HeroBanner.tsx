import { GraduationCap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Chip from "../ui/Chip.tsx";
import GhostBtn from "../ui/GhostBtn.tsx";
import useActiveLink from "../../hooks/useActiveLink.ts";

export default function HeroBanner() {
    const navigate = useNavigate();
    const { setActiveLink } = useActiveLink();

    const handleNavigate = (link: string) => {
        setActiveLink(link);
        navigate(`/frontlinersgroup.com/${link}`);
    };

    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/5 via-white to-[#2563eb]/5" />
            <div className="absolute -top-24 -right-24 w-[480px] h-[480px] bg-[#2563eb]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 -left-20 w-[360px] h-[360px] bg-[#1e3a5f]/10 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200/20 rounded-full blur-[150px]" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <Chip color="blue">
                            <GraduationCap size={12} />
                            Grade 10 · 11 · 12
                        </Chip>
                        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                            Maths & Physics
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] mt-1">
                                made simple.
                            </span>
                        </h1>
                        <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-lg">
                            Expert, CAPS-aligned tutoring for Grade 10–12 learners in Johannesburg. Small classes, past papers, and real results — every term.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <button
                                className="flex justify-center items-center gap-2 px-8 py-3 font-semibold rounded-lg text-white bg-gradient-to-r from-[#2563eb] to-[#1e3a5f] shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                                onClick={() => handleNavigate("enrollments")}
                            >
                                Enroll Now
                                <ArrowRight size={16} className="transition-all duration-300 group-hover:translate-x-1" />
                            </button>
                            <GhostBtn onClick={() => handleNavigate("subjects")}>
                                View Subjects
                            </GhostBtn>
                        </div>
                    </div>

                    <div className="hidden lg:block relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a5f]/20 to-transparent z-10" />
                            <img
                                src="/images/hero_photo.avif"
                                alt="Learners in tutoring session"
                                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}