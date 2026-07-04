import { GraduationCap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Chip from "../ui/Chip.tsx"
import GhostBtn from "../ui/GhostBtn.tsx";

export default function HeroBanner() {

    const navigate = useNavigate();

    const handleNavigate = (link: string) => {
        //setActiveLink(link);
        navigate(`/frontlinersgroup.com/${link}`);
    }

    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
            <div className="absolute -top-24 -right-24 w-[480px] h-[480px] bg-slate-200/60 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 -left-20 w-[360px] h-[360px] bg-slate-200/40 rounded-full blur-[80px]" />
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <Chip color="blue"><GraduationCap size={12} />Grade 10 · 11 · 12</Chip>
                        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                            Maths & Physics
                            <span className="block text-[#1E3A5F] mt-1">made simple.</span>
                        </h1>
                        <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-lg">
                            Expert, CAPS-aligned tutoring for Grade 10–12 learners in Johannesburg. Small classes, past papers, and real results — every term.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <button onClick={() => handleNavigate("enrollment")}>Enroll Now <ArrowRight size={15} /></button>
                            <GhostBtn onClick={() => handleNavigate("subjects")}>View Subjects</GhostBtn>
                        </div>
                    </div>
                    {/* Hero image */}
                    <div className="hidden lg:block relative">
                        <div className="rounded-md overflow-hidden shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=640&h=480&fit=crop&auto=format" alt="Learners in tutoring session" className="w-full h-[420px] object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}