import { ArrowRight, CheckCircle, Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import cn from "../../utils/cn.ts";
import Field from "../../components/ui/Field.tsx";
import HOURS from "../../constants/HOURS.ts";

export default function Contact() {
    const [sent, setSent] = useState(false);

    return (
        <div>
            <div className="relative pt-32 pb-20 bg-gradient-to-br from-[#1e3a5f] via-[#1e3a5f] to-[#2563eb] text-white px-4 sm:px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2563eb]/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-2xl" />

                <div className="relative max-w-6xl mx-auto text-center">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase border-2 bg-white/10 text-white border-white/30 backdrop-blur-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                        Contact Us
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                        Get in touch
                    </h1>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
                        Have a question before enrolling? Want to discuss your learner's needs? Reach out — we respond quickly.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 bg-white">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-10">
                    <div className="space-y-4">
                        <a
                            href="https://wa.me/27720000000"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-4 p-5 bg-emerald-50 border border-emerald-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-100 transition-all duration-200 group"
                        >
                            <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                                <MessageCircle size={22} className="text-white" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 text-sm">WhatsApp</p>
                                <p className="text-emerald-700 text-sm font-semibold">+27 72 000 0000</p>
                                <p className="text-xs text-slate-500">Fastest way to reach us</p>
                            </div>
                            <ArrowRight size={16} className="text-emerald-500 ml-auto group-hover:translate-x-1 transition-transform" />
                        </a>

                        {[
                            {
                                icon: Phone,
                                label: "Call Us",
                                detail: "+27 11 000 0000",
                                sub: "Mon–Sat, during session hours",
                                href: "tel:+27110000000"
                            },
                            {
                                icon: Mail,
                                label: "Email Us",
                                detail: "info@frontliners.co.za",
                                sub: "We reply within 1 business day",
                                href: "mailto:info@frontliners.co.za"
                            },
                        ].map(({ icon: Icon, label, detail, sub, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 group"
                            >
                                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Icon size={20} className="text-[#1e3a5f]" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-sm">{label}</p>
                                    <p className="text-[#1e3a5f] text-sm font-semibold">{detail}</p>
                                    <p className="text-xs text-slate-500">{sub}</p>
                                </div>
                                <ArrowRight size={16} className="text-slate-300 ml-auto group-hover:text-slate-400 group-hover:translate-x-1 transition-all" />
                            </a>
                        ))}

                        <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin size={20} className="text-[#1e3a5f]" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-sm mb-1">Location</p>
                                    <p className="text-slate-600 text-sm">Maokeng, Bochum, Limpopo</p>
                                    <p className="text-xs text-slate-400 mt-1">Exact address shared on enrollment confirmation</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Clock size={20} className="text-[#1e3a5f]" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-slate-900 text-sm mb-3">Business Hours</p>
                                    <div className="space-y-1.5">
                                        {HOURS.map(({ day, time }) => (
                                            <div key={day} className="flex justify-between text-sm">
                                                <span className="text-slate-600">{day}</span>
                                                <span className={cn(
                                                    "font-semibold",
                                                    time === "Closed" ? "text-red-400" : "text-[#1e3a5f]"
                                                )}>
                                                    {time}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div className="bg-white rounded-lg border border-slate-100 shadow-lg overflow-hidden">
                            <div className="p-6 sm:p-8">
                                <h2 className="text-xl font-extrabold text-slate-900 mb-1">Send us a message</h2>
                                <p className="text-sm text-slate-500 mb-6">We respond within 1 business day.</p>

                                {sent ? (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle size={36} className="text-emerald-500" />
                                        </div>
                                        <h3 className="font-bold text-slate-900 text-lg mb-1">Message sent!</h3>
                                        <p className="text-sm text-slate-500">We will get back to you shortly.</p>
                                        <button
                                            onClick={() => setSent(false)}
                                            className="mt-4 text-sm text-[#2563eb] hover:text-[#1e3a5f] font-semibold transition-colors"
                                        >
                                            Send another
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                                        <div className="grid grid-cols-2 gap-3">
                                            <Field label="Name" id="c-name" placeholder="Your name" required />
                                            <Field label="Phone / WhatsApp" id="c-phone" type="tel" placeholder="+27 72 …" required />
                                        </div>
                                        <Field label="Email" id="c-email" type="email" placeholder="you@example.com" />
                                        <Field
                                            label="Subject"
                                            id="c-subject"
                                            as="select"
                                            options={[
                                                "Enquiry about Mathematics",
                                                "Enquiry about Physics",
                                                "Session pricing",
                                                "Scheduling & availability",
                                                "Other"
                                            ]}
                                            required
                                        />
                                        <Field
                                            label="Message"
                                            id="c-msg"
                                            as="textarea"
                                            placeholder="How can we help?"
                                        />
                                        <button
                                            type="submit"
                                            className="w-full h-12 bg-[#1e3a5f] text-white font-bold text-sm rounded-md shadow-md hover:shadow-lg hover:bg-[#162d4a] transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <Send size={15} />
                                            Send Message
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Map placeholder */}
                        <div className="rounded-lg overflow-hidden border border-slate-200 h-52 relative bg-slate-100">
                            <img
                                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=700&h=300&fit=crop&auto=format"
                                alt="Maokeng"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
                                <div className="bg-white rounded-lg px-5 py-3 shadow-lg flex items-center gap-3">
                                    <div className="w-8 h-8 bg-[#1e3a5f] rounded-md flex items-center justify-center">
                                        <MapPin size={14} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-xs">Frontliners Group</p>
                                        <p className="text-slate-500 text-[10px]">Maokeng, Bochum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}