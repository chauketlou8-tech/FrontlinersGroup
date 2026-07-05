import { useState } from "react";
import SESSION_PRICES from "../../constants/SESSION_PRICES.ts";
import { Building2, CreditCard, Lock, Shield, ArrowLeft, User, Phone, Mail, BookOpen, GraduationCap } from "lucide-react";
import cn from "../../utils/cn.ts";
import BANKS from "../../constants/BANKS.ts";
import { useNavigate } from "react-router-dom";
import { useEnrollment } from "../../hooks/useEnrollment";

export default function Payment() {
    const navigate = useNavigate();
    const { data, resetData } = useEnrollment();
    const [tab, setTab] = useState<"card" | "eft">("card");
    const [selectedBank, setSelectedBank] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    const getPrice = () => {
        const session = SESSION_PRICES[data.sessionType as keyof typeof SESSION_PRICES];
        return session || { label: data.sessionType || "Session", price: "R250/session" };
    };

    const info = getPrice();

    function onSuccess() {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            resetData();
            navigate("/frontlinersgroup.com/enrollments/payment/success");
        }, 2000);
    }

    return (
        <section className="py-10 px-4 sm:px-6 bg-slate-50 min-h-screen">
            <div className="max-w-2xl mx-auto space-y-6">
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
                >
                    <ArrowLeft size={16} />
                    Back to enrollment
                </button>

                <div className="bg-white rounded border border-slate-100 shadow-lg p-6 sm:p-8">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-1 h-6 bg-[#2563eb] rounded-full" />
                        <p className="text-xs font-bold uppercase tracking-widest text-[#2563eb]">Order Summary</p>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="font-extrabold text-slate-900 text-lg">{info.label}</p>
                            <div className="mt-3 space-y-2">
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <User size={14} className="text-slate-400 flex-shrink-0" />
                                    <span><span className="font-medium">Learner:</span> {data.firstName || "—"} {data.lastName || "—"}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <GraduationCap size={14} className="text-slate-400 flex-shrink-0" />
                                    <span><span className="font-medium">Grade:</span> {data.grade || "—"}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <BookOpen size={14} className="text-slate-400 flex-shrink-0" />
                                    <span><span className="font-medium">Subject:</span> {data.subject || "—"}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <Phone size={14} className="text-slate-400 flex-shrink-0" />
                                    <span><span className="font-medium">Contact:</span> {data.phone || "—"}</span>
                                </div>
                                {data.email && (
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <Mail size={14} className="text-slate-400 flex-shrink-0" />
                                        <span><span className="font-medium">Email:</span> {data.email}</span>
                                    </div>
                                )}
                            </div>
                            <div className="mt-3 flex items-center gap-2">
                                <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-semibold">Includes materials</span>
                            </div>
                        </div>
                        <p className="text-3xl font-extrabold text-[#1e3a5f] flex-shrink-0">{info.price}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between text-sm">
                        <span className="text-slate-500">Total due today</span>
                        <span className="font-bold text-slate-900">{info.price}</span>
                    </div>
                </div>

                <div className="bg-white rounded border border-slate-100 shadow-lg overflow-hidden">
                    <div className="flex border-b border-slate-100">
                        {[
                            { id: "card" as const, label: "Credit / Debit Card", icon: CreditCard },
                            { id: "eft" as const, label: "Instant EFT", icon: Building2 },
                        ].map(({ id, label, icon: Icon }) => (
                            <button
                                key={id}
                                onClick={() => setTab(id)}
                                className={cn(
                                    "flex-1 flex items-center justify-center gap-2.5 py-4 text-sm font-semibold transition-all duration-200 relative",
                                    tab === id
                                        ? "text-[#1e3a5f] bg-slate-50/50"
                                        : "text-slate-500 hover:text-slate-700 hover:bg-slate-50",
                                )}
                            >
                                <Icon size={18} />
                                {label}
                                {tab === id && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1e3a5f] rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="p-6 sm:p-8">
                        {tab === "card" && (
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="h-8 px-3 bg-[#1e3a5f] rounded flex items-center">
                                        <span className="text-white text-[10px] font-extrabold tracking-wider">VISA</span>
                                    </div>
                                    <div className="h-8 w-14 rounded border border-slate-200 flex items-center justify-center">
                                        <div className="flex">
                                            <div className="w-5 h-5 bg-red-500 rounded-full opacity-90" />
                                            <div className="w-5 h-5 bg-amber-400 rounded-full -ml-2.5 opacity-90" />
                                        </div>
                                    </div>
                                    <div className="h-8 px-3 border border-slate-200 rounded flex items-center">
                                        <span className="text-[10px] font-extrabold text-slate-600 tracking-wider">Mastercard</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-semibold text-slate-700 block mb-1.5">Card Number</label>
                                    <input
                                        type="text"
                                        placeholder="1234 5678 9012 3456"
                                        maxLength={19}
                                        className="w-full h-11 px-4 rounded border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-slate-300 focus:bg-white transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold text-slate-700 block mb-1.5">Cardholder Name</label>
                                    <input
                                        type="text"
                                        placeholder="Name as it appears on card"
                                        className="w-full h-11 px-4 rounded border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-slate-300 focus:bg-white transition-all"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-semibold text-slate-700 block mb-1.5">Expiry (MM/YY)</label>
                                        <input
                                            type="text"
                                            placeholder="MM/YY"
                                            maxLength={5}
                                            className="w-full h-11 px-4 rounded border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-slate-300 focus:bg-white transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-semibold text-slate-700 block mb-1.5">CVV</label>
                                        <input
                                            type="text"
                                            placeholder="3 digits"
                                            maxLength={4}
                                            className="w-full h-11 px-4 rounded border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-slate-300 focus:bg-white transition-all"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {tab === "eft" && (
                            <div>
                                <p className="text-sm text-slate-500 mb-4">Select your bank to proceed with Instant EFT.</p>
                                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                    {BANKS.map(bank => (
                                        <button
                                            key={bank.name}
                                            onClick={() => setSelectedBank(bank.name)}
                                            className={cn(
                                                "flex flex-col items-center justify-center gap-2 rounded border-2 p-4 transition-all duration-200",
                                                selectedBank === bank.name
                                                    ? "border-[#2563eb] shadow-md bg-[#2563eb]/5"
                                                    : "border-slate-200 hover:border-slate-400 hover:shadow-md",
                                            )}
                                        >
                                            <div className={cn(
                                                "w-12 h-12 rounded flex items-center justify-center text-xs font-extrabold shadow-sm",
                                                bank.color
                                            )}>
                                                {bank.initials}
                                            </div>
                                            <span className="text-[10px] font-semibold text-slate-600 text-center leading-tight">{bank.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mt-6 pt-4 border-t border-slate-100">
                            <div className="flex items-center justify-center gap-4 text-xs text-slate-400 mb-4">
                                <span className="flex items-center gap-1.5">
                                    <Lock size={12} />
                                    SSL Encrypted
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Shield size={12} />
                                    Secured by PayFast
                                </span>
                            </div>

                            <button
                                onClick={onSuccess}
                                disabled={isProcessing}
                                className="w-full h-14 bg-[#1e3a5f] text-white font-bold text-sm rounded shadow-md hover:shadow-lg hover:bg-[#162d4a] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isProcessing ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Processing...
                                    </span>
                                ) : (
                                    "Pay Now"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}