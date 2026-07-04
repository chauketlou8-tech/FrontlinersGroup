import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, X, Menu } from "lucide-react";

interface Props {
    activeLink: string;
    setActiveLink: (activeLink: string) => void;
}

export default function Header({ activeLink, setActiveLink }: Props) {

    const [open, setOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    
    const navigate = useNavigate();

    const links: { label: string; page: string }[] = [
        { label: "Home", page: "home" },
        { label: "About", page: "about" },
        { label: "Subjects", page: "subjects" },
        { label: "Enrollment", page: "enrollments" },
        { label: "Contact", page: "contact" },
    ];

    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", h);
        return () => window.removeEventListener("scroll", h);
    }, []);

    const handleNavigate = (link: string) => {
        setActiveLink(link);
        navigate(`/frontlinersgroup.com/${link}`);
    }

    return (
        <header className={`fixed inset-x-0 top-0 z-[999] transition-all duration-300 w-full", ${scrolled ? "bg-white/96 backdrop-blur shadow-sm border-b border-slate-100" : "bg-white/80 backdrop-blur-sm"}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div onClick={() => handleNavigate("home")} className="flex items-center gap-3 group">
                        <div className="w-8 h-8 bg-[#1e3a5f] rounded-md flex items-center justify-center shadow-sm">
                            <GraduationCap size={16} className="text-white" />
                        </div>

                        <span className="font-bold text-slate-900 text-[15px] tracking-tight leading-tight">
                            Frontliners<span className="text-[#2563eb]"> Group</span>
                        </span>
                    </div>

                    <nav className="hidden md:flex items-center gap-1">
                        {links.map(link => (
                            <span key={link.page} onClick={() => handleNavigate(link.page)} className={`px-4 py-2 rounded text-sm font-semibold transition-all duration-150 cursor-pointer ${activeLink === link.page ? "bg-slate-100 text-[#1E3A5F]" : "text-slate-600 hover:text-[#1E3A5F] hover:bg-slate-50"}`}>
                                {link.label}
                            </span>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <button className="px-6 py-2.5 font-[600] rounded-[4px] text-white bg-[#2e4a6f] transition-all duration-200 hover:bg-[#3e5a7f] cursor-pointer" onClick={() => handleNavigate("enrollment")}>Enroll Now</button>
                    </div>

                    <button onClick={() => setOpen(!open)} className="md:hidden w-10 h-10 flex items-center justify-center rounded hover:bg-slate-100 transition-colors">
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {open && (
                <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-1 shadow-lg">
                    {links.map(link => (
                        <button key={link.page} onClick={() => handleNavigate(link.page)} className={`w-full text-left px-4 py-3 rounded text-sm font-semibold transition-all ${activeLink === link.page ? "bg-slate-100 text-[#1E3A5F]" : "text-slate-700 hover:bg-slate-50"}`}>
                            {link.label}
                        </button>
                    ))}
                    <button onClick={() => handleNavigate("enrollment")} className="w-full h-11 mt-2 bg-[#1E3A5F] text-white font-bold rounded text-sm">Enroll Now</button>
                </div>
            )}
        </header>
    );
}