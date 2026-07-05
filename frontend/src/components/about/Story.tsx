export default function Story() {
    return (
        <section className="py-20 px-4 sm:px-6 bg-white">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a5f]/30 to-transparent z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=640&h=480&fit=crop&auto=format"
                        alt="Tutor with student"
                        className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
                <div>
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563eb] mb-4">
                        <span className="w-8 h-0.5 bg-[#2563eb]" />
                        Our Story
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-5 leading-tight">
                        Built from frustration.
                        <span className="block text-[#2563eb]">Driven by results.</span>
                    </h2>
                    <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                        <p className="border-l-4 border-[#2563eb] pl-4 font-medium text-slate-700">
                            Frontliners Group was founded after seeing too many capable, intelligent learners fall behind simply because they didn't have access to patient, effective extra help.
                        </p>
                        <p>Maths and Physics are subjects where one missed concept can cause a learner to lose confidence entirely. We believe that with the right explanation, at the right pace, every learner can not only pass but genuinely understand — and even enjoy — Mathematics and Physics.</p>
                        <p className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                            <span className="font-semibold text-[#1e3a5f]">Today</span> we serve learners across Bochum, with a growing community of students who have improved by <span className="font-bold text-[#2563eb]">two or more symbols</span> in a single term. We are proud to be a trusted partner for parents and learners who are serious about results.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}