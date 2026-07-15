import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import { type ReactNode } from "react";

interface PageLayoutProps {
    children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
        </div>
    );
};

export default PageLayout;