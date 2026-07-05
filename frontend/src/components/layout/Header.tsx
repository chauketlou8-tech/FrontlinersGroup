import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, X, Menu } from "lucide-react";
import links from "../../constants/header_links.ts"
import useActiveLink from "../../hooks/useActiveLink.ts";

export default function Header() {
    const [open, setOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    const navigate = useNavigate();
    const { activeLink, setActiveLink } = useActiveLink();

    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", h);
        return () => window.removeEventListener("scroll", h);
    }, []);

    const handleNavigate = (link: string) => {
        setActiveLink(link);
        setOpen(false);
        navigate(`/frontlinersgroup.com/${link}`);
    };

    return (
        <header className={`fixed inset-x-0 top-0 z-[999] transition-all duration-300 ${
            scrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100"
                : "bg-white/90 backdrop-blur-sm"
        }`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div onClick={() => handleNavigate("home")} className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                            <GraduationCap size={20} className="text-white" />
                        </div>
                        <div>
                            <span className="font-extrabold text-slate-900 text-xl tracking-tight leading-tight">
                                Frontliners<span className="text-[#2563eb]"> Group</span>
                            </span>
                            <p className="text-[10px] text-slate-500 font-medium -mt-0.5 tracking-wider hidden sm:block">
                                TUTORING • MATHS • PHYSICS
                            </p>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {links.map(link => (
                            <button key={link.page} onClick={() => handleNavigate(link.page)} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer relative ${activeLink === link.page ? "text-[#1E3A5F] bg-slate-100" : "text-slate-600 hover:text-[#1E3A5F] hover:bg-slate-50"}`}>
                                {link.label}
                                {activeLink === link.page && (<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#2563eb] rounded-full" />)}
                            </button>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <button
                            className="px-7 py-2.5 font-semibold rounded-lg text-white bg-gradient-to-r from-[#2563eb] to-[#1e3a5f] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                            onClick={() => handleNavigate("enrollments")}
                        >
                            Enroll Now
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-slate-100 px-4 py-4 space-y-1 shadow-2xl">
                    {links.map(link => (
                        <button
                            key={link.page}
                            onClick={() => handleNavigate(link.page)}
                            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                                activeLink === link.page
                                    ? "bg-[#2563eb]/10 text-[#2563eb]"
                                    : "text-slate-700 hover:bg-slate-50"
                            }`}
                        >
                            {link.label}
                            {activeLink === link.page && (
                                <span className="float-right text-[#2563eb]">✓</span>
                            )}
                        </button>
                    ))}
                    <button
                        onClick={() => handleNavigate("enrollments")}
                        className="w-full h-12 mt-2 bg-gradient-to-r from-[#2563eb] to-[#1e3a5f] text-white font-bold rounded-lg text-sm shadow-md hover:shadow-lg transition-all"
                    >
                        Enroll Now
                    </button>
                </div>
            )}
        </header>
    );
}