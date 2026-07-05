import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Success() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white pt-20 px-4">
            <div className="max-w-md w-full text-center">
                {/* Success animation */}
                <div className="relative mx-auto mb-6 w-24 h-24">
                    <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping" />
                    <div className="relative w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
                        <CheckCircle size={48} className="text-white" />
                    </div>
                </div>

                <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Enrollment Confirmed! 🎉</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    Payment received. Thank you for enrolling with Frontliners Group. We will contact you within 24 hours to schedule your first session.
                </p>

                {/* Next steps */}
                <div className="bg-slate-50 rounded-xl p-6 mb-6 text-left border border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#2563eb] mb-3">What happens next?</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                            We'll review your enrollment details
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                            We'll contact you to schedule your first session
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                            You'll receive a welcome email with session details
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <a
                        href="https://wa.me/27720000000"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <MessageCircle size={16} />
                        Chat on WhatsApp
                    </a>
                    <button
                        onClick={() => navigate("/frontlinersgroup.com/enrollments")}
                        className="inline-flex items-center justify-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors group"
                    >
                        Submit another enrollment
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}