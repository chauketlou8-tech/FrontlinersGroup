import { GraduationCap, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import socials from "../../constants/socials.ts";
import links from "../../constants/links.ts";
import contacts from "../../constants/contact.ts"

interface Props {
    setActiveLink: (activeLink: string) => void;
}

export default function Footer({ setActiveLink }: Props) {
    const navigate = useNavigate();

    const handleNavigate = (link: string) => {
        setActiveLink(link);
        navigate(`/frontlinersgroup.com/${link}`);
    }

    return (
        <footer className="bg-slate-900 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
                    <div>
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="w-8 h-8 bg-[#2563EB] rounded-md flex items-center justify-center">
                                <GraduationCap size={16} className="text-white" />
                            </div>
                            <span className="font-extrabold text-white text-[15px]">Frontliners Group</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-5">Helping Grade 10–12 learners in South Africa unlock their potential in Mathematics and Physics.</p>
                        <div className="flex gap-2">
                            {socials.map((social) => (
                                <a key={social.name} href="#" className="w-9 h-9 bg-white/5 hover:bg-[#2563eb] border border-white/10 hover:border-[#2563eb] rounded-md flex items-center justify-center transition-all duration-150">
                                    <i className={`fa-brands ${social.icon} w-5 h-5`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Quick Links</p>
                        <ul className="space-y-2.5">
                            {links.map(link => (
                                <li key={link.page}>
                                    <button onClick={() => handleNavigate(link.page)} className="text-slate-300 hover:text-white text-sm capitalize transition-colors">{link.label}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Subjects</p>
                        <ul className="space-y-2.5">
                            <li><button onClick={() => handleNavigate("subjects")} className="text-slate-300 hover:text-white text-sm transition-colors">Mathematics (Gr 10–12)</button></li>
                            <li><button onClick={() => handleNavigate("subjects")} className="text-slate-300 hover:text-white text-sm transition-colors">Physics (Gr 10–12)</button></li>
                            <li><button onClick={() => handleNavigate("enrollments")} className="text-slate-300 hover:text-white text-sm transition-colors">Enroll Now</button></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Contact</p>
                        <ul className="space-y-3">
                            {contacts.map(({ icon: Icon, text }) => (
                                <li key={text} className="flex gap-2.5 text-slate-300 text-sm">
                                    <Icon size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-slate-500 text-xs">© {new Date().getFullYear()} Frontliners Group. All rights reserved.</p>
                    <a href={`https://wa.me/27720000000`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
                        <MessageCircle size={13} />WhatsApp us
                    </a>
                </div>
            </div>
        </footer>
    );
}