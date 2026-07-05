import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import { useState, type ReactNode } from "react";

interface PageLayoutProps {
    children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
    const [activeLink, setActiveLink] = useState<string>("home");

    return (
        <div className="min-h-screen flex flex-col">
            <Header activeLink={activeLink} setActiveLink={setActiveLink} />
            <main className="flex-grow pt-20">{children}</main>
            <Footer setActiveLink={setActiveLink} />
        </div>
    );
};

export default PageLayout;