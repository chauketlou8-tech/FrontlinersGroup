import { useNavigate } from "react-router-dom";
import Chip from "../ui/Chip.tsx";
import subjects from "../../constants/subjects.ts";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.tsx";
import useActiveLink from "../../hooks/useActiveLink.ts";

export default function SubjectsPreview() {
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
                    eyebrow="Subjects Offered"
                    title="Two subjects. Total focus."
                    subtitle="We specialise in exactly two subjects so we can be truly excellent at both."
                />
                <div className="grid md:grid-cols-2 gap-8">
                    {subjects.map(({ icon: Icon, color, subject, grades, desc, topics }) => {
                        const isBlue = color === "blue";
                        const gradient = isBlue
                            ? "from-[#1e3a5f] to-[#2563eb]"
                            : "from-[#7c3aed] to-[#4f46e5]";
                        const hoverBg = isBlue
                            ? "hover:border-[#2563eb] hover:shadow-[0_8px_32px_rgba(37,99,235,0.15)]"
                            : "hover:border-[#7c3aed] hover:shadow-[0_8px_32px_rgba(124,58,237,0.15)]";

                        return (
                            <div
                                key={subject}
                                className={`group rounded-2xl p-8 border-2 border-slate-200 bg-white transition-all duration-300 ${hoverBg} cursor-pointer`}
                                onClick={() => handleNavigate("subjects")}
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon size={24} className="text-white" />
                                </div>
                                <Chip color={isBlue ? "blue" : "indigo"}>{grades}</Chip>
                                <h3 className="text-2xl font-extrabold text-slate-900 mt-3 mb-2">{subject}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">{desc}</p>
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {topics.slice(0, 4).map(topic => (
                                        <span key={topic} className="text-xs bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg font-medium hover:bg-slate-100 transition-colors">
                                            {topic}
                                        </span>
                                    ))}
                                    {topics.length > 4 && (
                                        <span className="text-xs text-slate-400 px-3 py-1.5">+{topics.length - 4} more</span>
                                    )}
                                </div>
                                <button
                                    onClick={() => handleNavigate("subjects")}
                                    className={`inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3 ${
                                        isBlue ? "text-[#2563eb]" : "text-[#7c3aed]"
                                    }`}
                                >
                                    View full curriculum
                                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}