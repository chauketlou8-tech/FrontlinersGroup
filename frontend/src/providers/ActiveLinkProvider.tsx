import { useState } from "react";
import type { ReactNode } from "react";
import { ActiveLinkContext } from "../context/ActiveLinkContext.ts";

export function ActiveLinkProvider({ children }: { children: ReactNode }) {
    const [activeLink, setActiveLink] = useState("home");

    return (
        <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>
            {children}
        </ActiveLinkContext.Provider>
    );
}
