import { GraduationCap, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import socials from "../../constants/socials.ts";
import contacts from "../../constants/contact.ts";
import links from "../../constants/links.ts";
import subjects from "../../constants/footer_subjects.ts";

interface Props {
    setActiveLink: (activeLink: string) => void;
}

export default function Footer({ setActiveLink }: Props) {
    const navigate = useNavigate();

    const handleNavigate = (link: string) => {
        setActiveLink(link);
        navigate(`/frontlinersgroup.com/${link}`);
    };

    return (
        <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white border-t border-white/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#2563eb] to-[#1e3a5f] rounded-xl flex items-center justify-center shadow-lg">
                                <GraduationCap size={18} className="text-white" />
                            </div>
                            <div>
                                <span className="font-extrabold text-white text-lg tracking-tight">
                                    Frontliners <span className="text-blue-400">Group</span>
                                </span>
                                <p className="text-[10px] text-blue-400/70 font-semibold tracking-wider">
                                    EXCELLENCE IN EDUCATION
                                </p>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-5">
                            Helping Grade 10–12 learners in South Africa unlock their potential in Mathematics and Physics.
                        </p>
                        <div className="flex gap-2">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    className="w-10 h-10 bg-white/5 hover:bg-[#2563eb] border border-white/10 hover:border-[#2563eb] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                    aria-label={social.name}
                                >
                                    <i className={`fa-brands ${social.icon} w-4 h-4 text-white/70 hover:text-white`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
                            Quick Links
                        </p>
                        <ul className="space-y-2.5">
                            {links.map(link => (
                                <li key={link.page}>
                                    <button
                                        onClick={() => handleNavigate(link.page)}
                                        className="text-slate-400 hover:text-white text-sm capitalize transition-all duration-200 hover:translate-x-1 flex items-center gap-2"
                                    >
                                        <span className="text-blue-400/50">›</span>
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
                            Our Subjects
                        </p>
                        <ul className="space-y-2.5">
                            {subjects.map((subject) => (
                                <li key={subject}>
                                    <button
                                        onClick={() => handleNavigate("subjects")}
                                        className="text-slate-400 hover:text-white text-sm transition-all duration-200 hover:translate-x-1 flex items-center gap-2"
                                    >
                                        <span className="text-blue-400/50">›</span>
                                        {subject}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
                            Get in Touch
                        </p>
                        <ul className="space-y-3">
                            {contacts.slice(0, contacts.length - 1).map(({ icon: Icon, text }) => (
                                <li key={text} className="flex gap-3 text-slate-400 text-sm group hover:text-white transition-colors">
                                    <Icon size={16} className="text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="https://wa.me/27720000000"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 rounded-lg text-emerald-400 text-xs font-semibold transition-all hover:scale-105"
                        >
                            <MessageCircle size={14} />
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-slate-500 text-xs">
                        © {new Date().getFullYear()} Frontliners Group. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-xs text-slate-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <span className="text-slate-600">|</span>
                        <span className="text-slate-400">Made with ♥ in SA</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}