import { useContext } from "react";
import { ActiveLinkContext } from "../context/ActiveLinkContext";

export default function useActiveLink() {
    const ctx = useContext(ActiveLinkContext);
    if (!ctx) throw new Error("useActiveLink must be used inside ActiveLinkProvider");
    return ctx;
}
