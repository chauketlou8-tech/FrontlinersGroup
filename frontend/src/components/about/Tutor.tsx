import SectionHeading from "../ui/SectionHeading.tsx";
import Chip from "../ui/Chip.tsx";

export default function Tutor() {
    return (
        <section className="py-20 px-4 sm:px-6 bg-slate-50">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    eyebrow="Meet the Tutor"
                    title="Your guide through Maths & Physics."
                    subtitle="Qualified, experienced, and passionate about helping you succeed."
                />
                <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xl">
                    <div className="flex flex-col sm:flex-row gap-8 items-start">
                        <div className="flex-shrink-0">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&auto=format"
                                    alt="Lead Tutor"
                                    className="w-36 h-36 rounded-2xl object-cover shadow-xl border-4 border-white"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-xs font-bold uppercase tracking-widest text-[#2563eb] mb-1">
                                Lead Tutor & Founder
                            </p>
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-1">
                                Mr. L. Molele
                            </h3>
                            <p className="text-sm text-slate-500 mb-4">
                                BSc Mathematics · 6 years tutoring experience · NSC examiner background
                            </p>

                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                A qualified Mathematics and Physical Sciences educator with a passion for making STEM accessible to all learners. Mr. Nkosi has helped over 150 learners improve their marks, and counts as his proudest achievement the learners who told him they used to hate Maths — and now love it.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {["Mathematics", "Physical Sciences", "NSC Exam Prep", "CAPS Specialist"].map(t => (
                                    <Chip key={t} color="blue">{t}</Chip>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}