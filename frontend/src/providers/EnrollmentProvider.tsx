import { type ReactNode, useState } from "react";
import { EnrollmentContext } from "../context/EnrollmentContext";
import type { EnrollmentData } from "../types/enrollment.types";

const defaultData: EnrollmentData = {
    firstName: "",
    lastName: "",
    grade: "",
    school: "",
    subject: "",
    sessionType: "",
    currentMark: "",
    sessionDay: "",
    parentName: "",
    phone: "",
    email: "",
    referral: "",
    notes: "",
};

export function EnrollmentProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<EnrollmentData>(defaultData);

    const updateData = (field: keyof EnrollmentData, value: string) => {
        setData(prev => ({ ...prev, [field]: value }));
    };

    const resetData = () => {
        setData(defaultData);
    };

    const isFormValid = (): boolean => {
        const required: (keyof EnrollmentData)[] = [
            "firstName", "lastName", "grade", "subject",
            "sessionType", "parentName", "phone"
        ];
        return required.every(field => data[field].trim() !== "");
    };

    return (
        <EnrollmentContext.Provider value={{ data, updateData, resetData, isFormValid }}>
            {children}
        </EnrollmentContext.Provider>
    );
}