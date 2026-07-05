import { useContext } from "react";
import { EnrollmentContext } from "../context/EnrollmentContext";

export function useEnrollment() {
    const context = useContext(EnrollmentContext);
    if (context === undefined) {
        throw new Error("useEnrollment must be used within an EnrollmentProvider");
    }
    return context;
}