import { Calculator, CheckCircle } from "lucide-react";
import Chip from "../ui/Chip.tsx";
import { MATHS_TOPICS } from "../../constants/topics.ts";
import maths_topics from "../../constants/maths_topics.ts";

export default function Maths() {
    return (
        <section className="py-20 px-4 sm:px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-[420px_1fr] gap-12 items-start">
                    {/* Left column - Topics by grade */}
                    <div className="space-y-4">
                        {maths_topics.map(({ grade, topics }) => (
                            <div key={grade} className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm hover:shadow-md hover:border-[#2563eb]/30 transition-all duration-300">
                                <p className="font-extrabold text-[#1e3a5f] text-sm mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                                    {grade}
                                </p>
                                <ul className="space-y-1.5">
                                    {topics.map(t => (
                                        <li key={t} className="text-xs text-slate-600 flex items-center gap-2 hover:text-[#1e3a5f] transition-colors">
                                            <span className="text-[#2563eb] font-bold">→</span>
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div>
                        <div className="inline-flex items-center gap-3 mb-5">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] flex items-center justify-center shadow-lg">
                                <Calculator size={24} className="text-white" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-[#2563eb] uppercase tracking-widest">Subject 1</p>
                                <h2 className="text-2xl font-extrabold text-slate-900">Mathematics</h2>
                            </div>
                        </div>
                        <Chip color="blue">Grade 10 · 11 · 12</Chip>
                        <p className="mt-4 text-slate-600 leading-relaxed">
                            Mathematics is the foundation of almost every career path that matters — but it's also a subject that rewards the right teaching approach. Our programme focuses on building a rock-solid understanding of core concepts before moving into complex problem-solving.
                        </p>
                        <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                            From algebra and calculus to trigonometry and statistics, we break down each topic into manageable steps. Our learners work through past NSC papers throughout the year so that by the time exams come, they are confident and prepared.
                        </p>
                        <div className="mt-8">
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Core topics covered</p>
                            <div className="grid grid-cols-2 gap-2">
                                {MATHS_TOPICS.map(t => (
                                    <div key={t} className="flex items-center gap-2.5 text-sm text-slate-700 hover:text-[#1e3a5f] transition-colors">
                                        <CheckCircle size={14} className="text-[#2563eb] flex-shrink-0" />
                                        {t}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}