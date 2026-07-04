import Header from "./Header.tsx"
import Footer from "./Footer.tsx"
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
const PageLayout = ({ children }) => {
    const [activeLink,setActiveLink] = useState<string>("home");

    return (
        <div>
            <Header activeLink={activeLink} setActiveLink={setActiveLink} />
            <main>{children}</main>
            <Footer setActiveLink={setActiveLink} />
        </div>
    );
}

export default PageLayout;