import {ArrowRight, Atom, Calculator, MessageCircle} from "lucide-react";
import HeroBanner from "../../components/home/HeroBanner.tsx";
import PromoBanner from "../../components/home/PromoBanner.tsx";
import cn from "../../utils/cn.ts";
import Chip from "../../components/ui/Chip.tsx";

export default function Home() {
    return (
        <div>
            <HeroBanner />

            {/* Promo Banner */}
            <PromoBanner/>

            {/* Subjects preview */}
            <section className="py-20 px-4 sm:px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <SectionHeading eyebrow="Subjects Offered" title="Two subjects. Total focus." subtitle="We specialise in exactly two subjects so we can be truly excellent at both." />
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: Calculator, color: "blue", subject: "Mathematics", grades: "Grade 10 · 11 · 12",
                                desc: "From algebra and geometry to calculus and financial maths — we break every concept down step by step and drill past papers until confidence clicks.",
                                topics: MATHS_TOPICS.slice(0, 4),
                            },
                            {
                                icon: Atom, color: "indigo", subject: "Physical Sciences (Physics)", grades: "Grade 10 · 11 · 12",
                                desc: "Mechanics, waves, electricity, matter and more — taught with real-world examples that make abstract theory feel logical and learnable.",
                                topics: PHYSICS_TOPICS.slice(0, 4),
                            },
                        ].map(({ icon: Icon, color, subject, grades, desc, topics }) => (
                            <div key={subject} className={cn("group rounded-md p-7 border transition-all duration-200 hover:shadow-[0_8px_32px_rgba(29,78,216,0.10)] cursor-pointer", color === "blue" ? "bg-slate-50 border-slate-200 hover:border-slate-400" : "bg-slate-50 border-slate-200 hover:border-slate-400")} onClick={() => go("subjects")}>
                                <div className={cn("w-12 h-12 rounded flex items-center justify-center mb-4", color === "blue" ? "bg-[#1E3A5F]" : "bg-[#1E3A5F]")}>
                                    <Icon size={22} className="text-white" />
                                </div>
                                <Chip color={color === "blue" ? "blue" : "indigo"}>{grades}</Chip>
                                <h3 className="text-xl font-extrabold text-slate-900 mt-3 mb-2">{subject}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">{desc}</p>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {topics.map(t => <span key={t} className="text-xs bg-white border border-slate-200 text-slate-600 px-2.5 py-1 rounded-md">{t}</span>)}
                                    <span className="text-xs text-slate-400 px-2.5 py-1">+more</span>
                                </div>
                                <button onClick={() => go("subjects")} className={cn("inline-flex items-center gap-1.5 text-sm font-bold transition-colors", color === "blue" ? "text-[#1E3A5F] hover:text-[#162d4a]" : "text-[#1E3A5F] hover:text-[#162d4a]")}>
                                    View full curriculum <ArrowRight size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-4 sm:px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <SectionHeading eyebrow="Why Frontliners" title="We do things differently." subtitle="We believe every learner can succeed with the right support, the right method, and the right environment." />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {WHY_ITEMS.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="group bg-white rounded p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200">
                                <div className="w-11 h-11 bg-slate-50 group-hover:bg-slate-100 rounded flex items-center justify-center mb-4 transition-colors">
                                    <Icon size={20} className="text-[#1E3A5F]" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-1.5">{title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 sm:px-6 bg-white">
                <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md text-xs font-bold tracking-widest uppercase border bg-slate-50 text-[#1E3A5F] border-slate-200 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />2025 Registration Open
          </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Ready to improve your marks?
                    </h2>
                    <p className="text-slate-500 leading-relaxed mb-8">
                        Spots are limited — we keep our groups small so every learner gets the attention they need. Secure your place today.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button onClick={() => go("enrollment")}>Enroll Now <ArrowRight size={15} /></button>
                        <a
                            href="https://wa.me/27720000000"
                            target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-2 h-12 px-7 rounded border-2 border-emerald-500 text-emerald-700 font-bold text-sm hover:bg-emerald-50 transition-all duration-200"
                        >
                            <MessageCircle size={16} /> WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
