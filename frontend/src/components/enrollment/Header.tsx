import cn from "../../utils/cn.ts";
import { CheckCircle } from "lucide-react";
import steps from "../../constants/steps.ts";

export default function Header({ step }: { step: string }) {
    // Determine which steps are completed
    const getStepStatus = (id: string) => {
        if (step === id) return "current";
        if (step === "payment" && id === "form") return "completed";
        if (step === "success") return "completed";
        return "pending";
    };

    return (
        <div className="relative pt-32 pb-20 bg-gradient-to-br from-[#1e3a5f] via-[#1e3a5f] to-[#2563eb] text-white px-4 sm:px-6 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2563eb]/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-2xl" />

            <div className="relative max-w-6xl mx-auto text-center">
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase border-2 bg-white/10 text-white border-white/30 backdrop-blur-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    Enrollment
                </span>

                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                    {step === "form" && "Enroll for Tutoring"}
                    {step === "payment" && "Complete Your Payment"}
                    {step === "success" && "You're All Set!"}
                </h1>
                <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
                    {step === "form" && "Fill in your details below. We will contact you within one business day to confirm your place."}
                    {step === "payment" && "Secure your spot by completing your payment. Your place is reserved for 24 hours."}
                    {step === "success" && "Payment received. Welcome to Frontliners Group!"}
                </p>

                {/* Step indicator - Improved */}
                <div className="mt-10 flex items-center justify-center gap-4 sm:gap-6">
                    {steps.map(({ id, label }, idx) => {
                        const status = getStepStatus(id);
                        const isCompleted = status === "completed";
                        const isCurrent = status === "current";

                        return (
                            <div key={id} className="flex items-center gap-3 sm:gap-4">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    {/* Step circle */}
                                    <div className={cn(
                                        "w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold border-2 transition-all duration-300 flex-shrink-0",
                                        isCurrent && "bg-white text-[#1e3a5f] border-white shadow-lg scale-110",
                                        isCompleted && "bg-emerald-500 text-white border-emerald-400 shadow-lg",
                                        status === "pending" && "bg-white/15 text-white/60 border-white/25"
                                    )}>
                                        {isCompleted ? <CheckCircle size={16} /> : idx + 1}
                                    </div>

                                    {/* Label */}
                                    <span className={cn(
                                        "text-xs sm:text-sm font-semibold hidden sm:block transition-colors",
                                        isCurrent && "text-white",
                                        isCompleted && "text-emerald-200",
                                        status === "pending" && "text-slate-300"
                                    )}>
                                        {label}
                                    </span>
                                </div>

                                {/* Connector line */}
                                {idx < steps.length - 1 && (
                                    <div className={cn(
                                        "w-8 sm:w-12 h-0.5 rounded-full transition-all duration-300",
                                        isCompleted || isCurrent ? "bg-white/50" : "bg-white/20"
                                    )} />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}