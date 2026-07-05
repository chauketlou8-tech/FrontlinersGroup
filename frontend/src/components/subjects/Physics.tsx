import { Atom, CheckCircle } from "lucide-react";
import Chip from "../ui/Chip.tsx";
import { PHYSICS_TOPICS } from "../../constants/topics.ts";
import physics_topics from "../../constants/physics_topics.ts";

export default function Physics() {
    return (
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-[420px_1fr] gap-12 items-start">
                    <div className="space-y-4">
                        {physics_topics.map(({ grade, topics }) => (
                            <div key={grade} className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm hover:shadow-md hover:border-[#7c3aed]/30 transition-all duration-300">
                                <p className="font-extrabold text-[#1e3a5f] text-sm mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#7c3aed]" />
                                    {grade}
                                </p>
                                <ul className="space-y-1.5">
                                    {topics.map(t => (
                                        <li key={t} className="text-xs text-slate-600 flex items-center gap-2 hover:text-[#7c3aed] transition-colors">
                                            <span className="text-[#7c3aed] font-bold">→</span>
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div>
                        <div className="inline-flex items-center gap-3 mb-5">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] flex items-center justify-center shadow-lg">
                                <Atom size={24} className="text-white" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-[#7c3aed] uppercase tracking-widest">Subject 2</p>
                                <h2 className="text-2xl font-extrabold text-slate-900">Physical Sciences (Physics)</h2>
                            </div>
                        </div>
                        <Chip color="indigo">Grade 10 · 11 · 12</Chip>
                        <p className="mt-4 text-slate-600 leading-relaxed">
                            Physical Sciences is one of the most misunderstood school subjects — and one of the most important for any learner aiming for a career in engineering, medicine, or science. Our programme demystifies Physics by grounding every concept in how the world actually works.
                        </p>
                        <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                            We use diagrams, demonstrations, and real-life examples to make mechanics, electricity, waves, and matter genuinely click. By the time exam season arrives, our learners have worked through multiple years of past NSC papers and know exactly what to expect.
                        </p>
                        <div className="mt-8">
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Core topics covered</p>
                            <div className="grid grid-cols-2 gap-2">
                                {PHYSICS_TOPICS.map(t => (
                                    <div key={t} className="flex items-center gap-2.5 text-sm text-slate-700 hover:text-[#7c3aed] transition-colors">
                                        <CheckCircle size={14} className="text-[#7c3aed] flex-shrink-0" />
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