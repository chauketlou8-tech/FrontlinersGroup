import WHY_ITEMS from "../../constants/why.items.ts";
import SectionHeading from "../ui/SectionHeading.tsx";

export default function WhyUs() {
    return (
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    eyebrow="Why Frontliners"
                    title="We do things differently."
                    subtitle="We believe every learner can succeed with the right support, the right method, and the right environment."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {WHY_ITEMS.map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#2563eb]/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1e3a5f]/10 to-[#2563eb]/10 group-hover:from-[#1e3a5f]/20 group-hover:to-[#2563eb]/20 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110">
                                <Icon size={22} className="text-[#1e3a5f] group-hover:text-[#2563eb] transition-colors duration-300" />
                            </div>
                            <h3 className="font-extrabold text-slate-900 text-lg mb-2 group-hover:text-[#1e3a5f] transition-colors duration-300">
                                {title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                                {desc}
                            </p>
                            <div className="w-0 h-0.5 bg-gradient-to-r from-[#2563eb] to-[#1e3a5f] group-hover:w-full transition-all duration-500 mt-4 rounded-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}