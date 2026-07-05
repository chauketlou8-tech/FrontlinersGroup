import Field from "../ui/Field.tsx";
import { ChevronDown, Send, ArrowRight } from "lucide-react";
import {useState, type ChangeEvent, type FormEvent} from "react";
import { useNavigate } from "react-router-dom";
import { useEnrollment } from "../../hooks/useEnrollment";

export default function EnrollmentForm({ setStep }: { setStep: (step: string) => void }) {
    const navigate = useNavigate();
    const { data, updateData } = useEnrollment();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleNavigate = (link: string) => {
        setStep("payment");
        navigate(`/frontlinersgroup.com/${link}`);
    };

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!data.firstName.trim()) newErrors.firstName = "First name is required";
        if (!data.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!data.grade) newErrors.grade = "Grade is required";
        if (!data.subject) newErrors.subject = "Subject is required";
        if (!data.sessionType) newErrors.sessionType = "Session type is required";
        if (!data.parentName.trim()) newErrors.parentName = "Parent/Guardian name is required";
        if (!data.phone.trim()) newErrors.phone = "Phone number is required";
        if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFieldChange = (field: string, value: string) => {
        updateData(field as keyof typeof data, value);
        if (errors[field]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validate()) {
            const firstErrorField = document.querySelector('[data-error="true"]');
            if (firstErrorField) {
                firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        handleNavigate("enrollments/payment");
    };

    const hasError = (field: string) => !!errors[field];

    return (
        <form onSubmit={handleSubmit} className="py-16 px-4 sm:px-6 bg-slate-50">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg border border-slate-100 overflow-hidden">
                    {/* Section 1: Learner Information */}
                    <div className="px-6 sm:px-8 pt-8 pb-6 border-b border-slate-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded-full bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center text-sm font-bold">1</div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-[#2563eb]">Learner Information</p>
                                <p className="text-xs text-slate-400">Who are we helping?</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div data-error={hasError("firstName")}>
                                <Field
                                    label="Learner's First Name"
                                    id="fname"
                                    placeholder="e.g. Thabo"
                                    required
                                    value={data.firstName}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleFieldChange("firstName", e.target.value)}
                                    error={errors.firstName}
                                />
                            </div>
                            <div data-error={hasError("lastName")}>
                                <Field
                                    label="Learner's Surname"
                                    id="lname"
                                    placeholder="e.g. Sithole"
                                    required
                                    value={data.lastName}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleFieldChange("lastName", e.target.value)}
                                    error={errors.lastName}
                                />
                            </div>
                            <div data-error={hasError("grade")}>
                                <Field
                                    label="Current Grade"
                                    id="grade"
                                    as="select"
                                    options={["", "Grade 10", "Grade 11", "Grade 12"]}
                                    required
                                    value={data.grade}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFieldChange("grade", e.target.value)}
                                    error={errors.grade}
                                />
                            </div>
                            <Field
                                label="School Name"
                                id="school"
                                placeholder="Name of school"
                                value={data.school}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleFieldChange("school", e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Section 2: Subject & Session */}
                    <div className="px-6 sm:px-8 py-6 border-b border-slate-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded-full bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center text-sm font-bold">2</div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-[#2563eb]">Subject & Session</p>
                                <p className="text-xs text-slate-400">What do they want to learn?</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div data-error={hasError("subject")}>
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="subject" className="text-sm font-semibold text-slate-700">
                                        Subject <span className="text-[#2563eb] ml-0.5">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="subject"
                                            value={data.subject}
                                            onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFieldChange("subject", e.target.value)}
                                            className={`w-full appearance-none h-11 px-4 pr-10 rounded border ${
                                                errors.subject ? 'border-red-500 ring-2 ring-red-500/20' : 'border-slate-200'
                                            } bg-slate-50 text-sm text-slate-800 focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-slate-300 focus:bg-white transition-all`}
                                            required
                                        >
                                            <option value="">Select subject…</option>
                                            {["Mathematics", "Physical Sciences (Physics)", "Both Mathematics & Physics"].map(o => (
                                                <option key={o}>{o}</option>
                                            ))}
                                        </select>
                                        <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                    </div>
                                    {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                                </div>
                            </div>
                            <div data-error={hasError("sessionType")}>
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="session-type" className="text-sm font-semibold text-slate-700">
                                        Session Type <span className="text-[#2563eb] ml-0.5">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="session-type"
                                            value={data.sessionType}
                                            onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFieldChange("sessionType", e.target.value)}
                                            className={`w-full appearance-none h-11 px-4 pr-10 rounded border ${
                                                errors.sessionType ? 'border-red-500 ring-2 ring-red-500/20' : 'border-slate-200'
                                            } bg-slate-50 text-sm text-slate-800 focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-slate-300 focus:bg-white transition-all`}
                                            required
                                        >
                                            <option value="">Select session type…</option>
                                            {["1-on-1 Session", "Small Group (2–4 learners)", "Weekend Bootcamp"].map(o => (
                                                <option key={o}>{o}</option>
                                            ))}
                                        </select>
                                        <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                    </div>
                                    {errors.sessionType && <p className="text-xs text-red-500 mt-1">{errors.sessionType}</p>}
                                </div>
                            </div>
                            <Field
                                label="Current Mark (approximate)"
                                id="current-mark"
                                as="select"
                                options={["", "Below 30%", "30%–49%", "50%–59%", "60%–74%", "75%+", "Not sure"]}
                                value={data.currentMark}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFieldChange("currentMark", e.target.value)}
                            />
                            <Field
                                label="Preferred Session Day"
                                id="session-day"
                                as="select"
                                options={["", "Weekday afternoons", "Saturday mornings", "Flexible / any"]}
                                value={data.sessionDay}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFieldChange("sessionDay", e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Section 3: Contact Details */}
                    <div className="px-6 sm:px-8 py-6 border-b border-slate-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded-full bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center text-sm font-bold">3</div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-[#2563eb]">Contact Details</p>
                                <p className="text-xs text-slate-400">How can we reach you?</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div data-error={hasError("parentName")}>
                                <Field
                                    label="Parent / Guardian Name"
                                    id="parent-name"
                                    placeholder="Full name"
                                    required
                                    value={data.parentName}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleFieldChange("parentName", e.target.value)}
                                    error={errors.parentName}
                                />
                            </div>
                            <div data-error={hasError("phone")}>
                                <Field
                                    label="Contact Number"
                                    id="phone"
                                    type="tel"
                                    placeholder="+27 72 000 0000"
                                    required
                                    value={data.phone}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleFieldChange("phone", e.target.value)}
                                    error={errors.phone}
                                />
                            </div>
                            <div data-error={hasError("email")}>
                                <Field
                                    label="Email Address"
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={data.email}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleFieldChange("email", e.target.value)}
                                    error={errors.email}
                                />
                            </div>
                            <Field
                                label="How did you hear about us?"
                                id="referral"
                                as="select"
                                options={["", "Word of mouth", "WhatsApp / social media", "Google search", "School notice", "Other"]}
                                value={data.referral}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFieldChange("referral", e.target.value)}
                            />
                        </div>
                        <div className="mt-4">
                            <Field
                                label="Any additional notes or questions?"
                                id="notes"
                                as="textarea"
                                placeholder="Tell us anything else we should know — current challenges, exam dates, specific topics to focus on, etc."
                                rows={3}
                                value={data.notes}
                                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleFieldChange("notes", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="px-6 sm:px-8 py-6 bg-slate-50">
                        <button
                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                            disabled={isSubmitting}
                            className="w-full h-14 bg-[#1e3a5f] text-white font-bold text-sm rounded shadow-md hover:shadow-lg hover:bg-[#162d4a] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    <Send size={16} />
                                    Submit Enrollment
                                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                </>
                            )}
                        </button>
                        <p className="text-center text-xs text-slate-400 mt-4">
                            Your information is kept private and will only be used to confirm your enrollment.
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
}