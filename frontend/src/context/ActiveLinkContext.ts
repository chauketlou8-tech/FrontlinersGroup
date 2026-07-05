import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export type ActiveLinkContextType = {
    activeLink: string;
    setActiveLink: Dispatch<SetStateAction<string>>;
};

export const ActiveLinkContext = createContext<ActiveLinkContextType | null>(null);
